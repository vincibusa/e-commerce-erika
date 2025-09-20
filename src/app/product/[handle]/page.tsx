'use client';

import { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductByHandle, getProducts, getProductPrice, getProductImageUrl, isProductInStock, getProductVariants } from '@/lib/api';
import type { ShopifyProduct } from '@/lib/types';

interface ProductPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyProduct['variants']['nodes'][0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const [productData, relatedData] = await Promise.all([
          getProductByHandle(resolvedParams.handle),
          getProducts({ first: 4, sortKey: 'BEST_SELLING' })
        ]);

        if (!productData) {
          notFound();
          return;
        }

        setProduct(productData);
        setRelatedProducts(relatedData.products.filter((p: ShopifyProduct) => p.id !== productData.id));
        setSelectedVariant(productData.variants.nodes[0] || null);
      } catch (error) {
        console.error('Error fetching product:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [resolvedParams.handle]);

  if (loading) {
    return (
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="aspect-square w-full animate-pulse rounded-xl bg-neutral-200"></div>
            <div className="space-y-6">
              <div className="h-8 animate-pulse rounded bg-neutral-200"></div>
              <div className="h-4 animate-pulse rounded bg-neutral-200"></div>
              <div className="h-6 animate-pulse rounded bg-neutral-200"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    notFound();
  }

  const availableVariants = getProductVariants(product);
  const currentPrice = selectedVariant ? selectedVariant.price.amount : product.priceRange.minVariantPrice.amount;
  const currentCurrency = selectedVariant ? selectedVariant.price.currencyCode : product.priceRange.minVariantPrice.currencyCode;

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-sm text-neutral-500">
          <Link className="hover:text-primary" href="/">Home</Link>
          <span>/</span>
          <Link className="hover:text-primary" href="/category">Products</Link>
          <span>/</span>
          <span className="font-medium text-neutral-800">{product.title}</span>
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-200">
              <img 
                alt={product.featuredImage?.altText || product.title}
                className="h-full w-full object-cover" 
                src={getProductImageUrl(product, '800x800')}
              />
            </div>
            
            {/* Additional Images */}
            {product.images.nodes.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {product.images.nodes.slice(0, 4).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg bg-neutral-200">
                    <img
                      alt={image.altText || `${product.title} ${index + 1}`}
                      className="h-full w-full object-cover"
                      src={image.url + '?width=200&height=200'}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                {product.title}
              </h1>
              <p className="mt-3 text-neutral-600">{product.description}</p>
              <p className="mt-4 text-3xl font-bold text-primary">
                {getProductPrice(product)}
              </p>
            </div>

            {/* Product Options */}
            {product.options.length > 0 && (
              <div className="space-y-4">
                {product.options.map((option) => (
                  <div key={option.name}>
                    <label className="text-sm font-medium text-neutral-900">
                      {option.name}
                    </label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {option.values.map((value) => (
                        <button
                          key={value}
                          className="rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-900 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="text-sm font-medium text-neutral-900">Quantity</label>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-l-md border border-neutral-300 px-3 py-2 text-neutral-900 hover:bg-neutral-50"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 border-t border-b border-neutral-300 px-3 py-2 text-center text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-r-md border border-neutral-300 px-3 py-2 text-neutral-900 hover:bg-neutral-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <button 
                className="flex-1 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                disabled={!isProductInStock(product)}
              >
                {isProductInStock(product) ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="rounded-lg bg-neutral-200 px-6 py-3 text-base font-bold text-neutral-800 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Add to Wishlist
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-lg font-bold text-neutral-900">Product Details</h3>
              <div 
                className="mt-2 prose prose-sm text-neutral-600"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              
              {/* Product Meta */}
              <div className="mt-4 space-y-2 text-sm text-neutral-600">
                {product.vendor && (
                  <p><span className="font-medium">Brand:</span> {product.vendor}</p>
                )}
                {product.productType && (
                  <p><span className="font-medium">Category:</span> {product.productType}</p>
                )}
                {product.tags.length > 0 && (
                  <div>
                    <span className="font-medium">Tags:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {product.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-neutral-900">You May Also Like</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
                    <img
                      alt={relatedProduct.featuredImage?.altText || relatedProduct.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      src={getProductImageUrl(relatedProduct)}
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-sm font-medium text-neutral-900">
                      <Link href={`/product/${relatedProduct.handle}`}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {relatedProduct.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{relatedProduct.productType}</p>
                    <p className="mt-1 font-medium text-primary">{getProductPrice(relatedProduct)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}