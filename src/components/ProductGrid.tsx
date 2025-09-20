'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getProducts, getCollectionByHandle, getProductPrice, getProductImageUrl, isProductInStock } from '@/lib/api';
import type { ShopifyProduct } from '@/lib/types';

interface ProductGridProps {
  collectionHandle?: string;
  searchQuery?: string;
}

export default function ProductGrid({ collectionHandle, searchQuery }: ProductGridProps) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState('BEST_SELLING');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        if (collectionHandle) {
          // Fetch products from specific collection
          const collection = await getCollectionByHandle(collectionHandle, {
            first: 20,
            sortKey: sortKey as 'BEST_SELLING' | 'PRICE' | 'CREATED_AT',
            reverse: sortKey === 'PRICE' ? false : true
          });
          
          if (collection) {
            let filteredProducts = collection.products.nodes;
            
            // Apply category filter if selected
            if (selectedCategory !== 'all') {
              filteredProducts = filteredProducts.filter((product: ShopifyProduct) => 
                product.productType === selectedCategory
              );
            }
            
            // Apply search query if provided
            if (searchQuery) {
              filteredProducts = filteredProducts.filter((product: ShopifyProduct) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
              );
            }
            
            setProducts(filteredProducts);
          } else {
            setProducts([]);
          }
        } else {
          // Fetch all products
          let query = searchQuery || '';
          
          // Aggiungi filtro per categoria se selezionata
          if (selectedCategory !== 'all') {
            query = query ? `${query} AND product_type:${selectedCategory}` : `product_type:${selectedCategory}`;
          }
          
          const result = await getProducts({
            first: 20,
            query: query || undefined,
            sortKey,
            reverse: sortKey === 'PRICE' ? false : true
          });
          
          setProducts(result.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [searchQuery, sortKey, selectedCategory, collectionHandle]);

  // Estrai categorie uniche dai prodotti
  const categories = ['all', ...Array.from(new Set(products.map(p => p.productType).filter(Boolean)))];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (newSortKey: string) => {
    setSortKey(newSortKey);
  };

  if (loading) {
    return (
      <div className="w-full">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">False Eyelashes</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="overflow-hidden border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="aspect-square w-full animate-pulse rounded-lg bg-neutral-200"></div>
              </CardContent>
              <CardHeader className="p-4 pb-2">
                <div className="h-4 animate-pulse rounded bg-neutral-200"></div>
                <div className="h-3 animate-pulse rounded bg-neutral-200"></div>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <div className="h-4 w-16 animate-pulse rounded bg-neutral-200"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
        {collectionHandle ? 'Collection Products' : 'False Eyelashes'}
      </h2>
      
      {/* Category Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-neutral-700">Categories:</span>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "secondary" : "outline"}
            size="sm"
            className={`rounded-full ${
              selectedCategory === category 
                ? "bg-primary/20 text-primary hover:bg-primary/30" 
                : "bg-background-light text-neutral-600 hover:bg-primary/10"
            }`}
            onClick={() => handleCategoryFilter(category)}
          >
            {category === 'all' ? 'All' : category}
          </Button>
        ))}
      </div>

      {/* Sort Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-primary/20 pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-neutral-700">Sort By:</span>
          {[
            { key: 'BEST_SELLING', label: 'Popularity' },
            { key: 'PRICE', label: 'Price' },
            { key: 'CREATED_AT', label: 'New Arrivals' }
          ].map((sort) => (
            <Button
              key={sort.key}
              variant={sortKey === sort.key ? "secondary" : "outline"}
              size="sm"
              className={`rounded-full ${
                sortKey === sort.key 
                  ? "bg-primary/20 text-primary hover:bg-primary/30" 
                  : "bg-background-light text-neutral-600 hover:bg-primary/10"
              }`}
              onClick={() => handleSortChange(sort.key)}
            >
              {sort.label}
            </Button>
          ))}
        </div>
        <p className="text-sm text-neutral-500">{products.length} products</p>
      </div>

      {/* Products Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden border-0 bg-transparent shadow-none transition-all hover:shadow-md">
            <CardContent className="p-0">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
                <img 
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                  src={getProductImageUrl(product)}
                  alt={product.featuredImage?.altText || product.title}
                  loading="lazy"
                />
              </div>
            </CardContent>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-900">
                <Link href={`/product/${product.handle}`} className="hover:text-primary transition-colors">
                  {product.title}
                </Link>
              </CardTitle>
              <p className="text-sm text-neutral-500">{product.productType || 'Lashes'}</p>
            </CardHeader>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <p className="text-sm font-medium text-primary">{getProductPrice(product)}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                disabled={!isProductInStock(product)}
              >
                {isProductInStock(product) ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && !loading && (
        <div className="mt-8 text-center">
          <p className="text-lg text-neutral-500">No products found.</p>
          <p className="text-sm text-neutral-400">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
}