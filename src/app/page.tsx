'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProducts, getCollections, getProductPrice, getProductImageUrl } from '@/lib/api';
import type { ShopifyProduct, ShopifyCollection } from '@/lib/types';

const DEFAULT_COLLECTION_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDujufskFxZyhQ5BoUUZAwsYNgkHkNKGPzb4eMP9HrpKwFjb523UToJL_t0CUq_z1K_IghWx7bHFJOs5yuoz28I0fdMtPEkOzbk9Refn9SDGbWoqb5yYuI9mAuS8LjlWP1TCQatq8gd-GYsk1V9Vvmr0PqxpVEXqqPxMniQ-OK-KA9zgfeOmukZ5PVMKtwQcmXglfyewQl5zoG_qzMYrXyhTfTybY2b8fEhHNKvn7fVFhYwdT_lzXmc9eqxt_y79iBkrLfclNV9HlU';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<ShopifyProduct[]>([]);
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsResult, collectionsResult] = await Promise.all([
          getProducts({ first: 6, sortKey: 'BEST_SELLING' }),
          getCollections(3)
        ]);
        
        setFeaturedProducts(productsResult.products);
        setCollections(collectionsResult);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center px-4 py-20 text-center text-white sm:px-6 lg:px-8" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkqIHBq0XBpPAHiQCORm81eoeNcAlQ4djylcsEnVdLcdYKFkJWKYM86gpL_xgEqT0_qxC1hCHUJkgXNBaztq6kipNhglQFmzxbFTRvqnJhQrRx9bFN6PoT5ITNdsXkwnUbBG90n2mQLEHIRxQbCQocYGpehM_pQuRiq4q89oFhjVw5IVzs16R-lUjDWxWi5zLGf8vK89nG8YmwrpL2LGP2dSA1t40ZKc-4RXhfbwoWs8VFC8P3I2C3Y-suXKmfv-Y8p2Nw_eLRyhs")'}}>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">Elevate Your Gaze</h1>
          <p className="mt-4 text-base font-light leading-relaxed sm:text-lg">Discover our exquisite collection of false eyelashes, designed to enhance your natural beauty and create captivating looks for every occasion.</p>
          <Link href="/category">
            <Button className="mt-8 h-12 min-w-48 text-base font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Collections Section */}
        {collections.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-neutral-900">Shop by Collection</h2>
            {loading ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] w-full animate-pulse rounded-lg bg-neutral-200" />
                    </CardContent>
                    <CardHeader className="p-4">
                      <div className="h-6 animate-pulse rounded bg-neutral-200" />
                      <div className="h-4 animate-pulse rounded bg-neutral-200" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {collections.map((collection) => (
                  <Link key={collection.id} href={`/category/${collection.handle}`}>
                    <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none transition-transform hover:scale-105">
                      <CardContent className="p-0">
                        <div 
                          className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                          style={{backgroundImage: `url("${collection.image?.url || DEFAULT_COLLECTION_IMAGE}")`}}
                          aria-label={collection.title}
                        />
                      </CardContent>
                      <CardHeader className="p-4">
                        <CardTitle className="font-bold text-neutral-900">{collection.title}</CardTitle>
                        <p className="text-sm text-neutral-500">{collection.products.nodes.length} products</p>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Featured Products Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-neutral-900">Featured Products</h2>
          {loading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] w-full animate-pulse rounded-lg bg-neutral-200" />
                  </CardContent>
                  <CardHeader className="p-4">
                    <div className="h-6 animate-pulse rounded bg-neutral-200" />
                    <div className="h-4 animate-pulse rounded bg-neutral-200" />
                    <div className="h-4 w-16 animate-pulse rounded bg-neutral-200" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.handle}`}>
                  <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none transition-transform hover:scale-105">
                    <CardContent className="p-0">
                      <div 
                        className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                        style={{backgroundImage: `url("${getProductImageUrl(product)}")`}}
                        aria-label={product.title}
                      />
                    </CardContent>
                    <CardHeader className="p-4">
                      <CardTitle className="font-bold text-neutral-900">{product.title}</CardTitle>
                      <p className="text-sm text-neutral-500">{product.productType || 'Lashes'}</p>
                      <p className="text-sm font-medium text-primary">{getProductPrice(product)}</p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Link href="/category">
              <Button className="h-12 min-w-48 text-base font-bold">
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}