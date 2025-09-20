'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/ui/animated';
import { FloatingParticles, GlowOrb } from '@/components/ui/particles';
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
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Background with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkqIHBq0XBpPAHiQCORm81eoeNcAlQ4djylcsEnVdLcdYKFkJWKYM86gpL_xgEqT0_qxC1hCHUJkgXNBaztq6kipNhglQFmzxbFTRvqnJhQrRx9bFN6PoT5ITNdsXkwnUbBG90n2mQLEHIRxQbCQocYGpehM_pQuRiq4q89oFhjVw5IVzs16R-lUjDWxWi5zLGf8vK89nG8YmwrpL2LGP2dSA1t40ZKc-4RXhfbwoWs8VFC8P3I2C3Y-suXKmfv-Y8p2Nw_eLRyhs")'
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(240, 66, 153, 0.85) 0%, rgba(217, 70, 239, 0.75) 50%, rgba(251, 191, 36, 0.3) 100%)'
          }}
        />
        
        {/* Floating Particles */}
        <FloatingParticles count={15} className="z-10" />
        
        {/* Glow Orbs */}
        <GlowOrb 
          size={300} 
          color="rgba(217, 70, 239, 0.15)" 
          className="top-10 left-10 z-10"
        />
        <GlowOrb 
          size={250} 
          color="rgba(251, 191, 36, 0.1)" 
          className="bottom-20 right-20 z-10"
        />
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl">
          <FadeIn delay={0.2}>
            <h1 className="text-hero text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              Elevate Your
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                Gaze
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <p className="text-hero-sub text-lg text-white/90 sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover our exquisite collection of luxury false eyelashes, meticulously crafted to enhance your natural beauty and create captivating looks for every occasion.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/category">
                <Button 
                  variant="glamour" 
                  size="xl"
                  className="min-w-56 text-lg font-bold shadow-2xl hover:shadow-[#f04299]/50 transition-all duration-300"
                >
                  Shop Collection
                  <span className="ml-2">✨</span>
                </Button>
              </Link>
              <Link href="/category">
                <Button 
                  variant="elegant" 
                  size="xl"
                  className="min-w-48 text-lg border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#be185d] transition-all duration-300"
                >
                  Explore Styles
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 text-sm"
          >
            <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Collections Section */}
        {collections.length > 0 && (
          <section className="mb-20">
            <FadeIn>
              <h2 className="text-section-title mb-12 text-center text-4xl text-neutral-900">
                Shop by Collection
              </h2>
            </FadeIn>
            {loading ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="overflow-hidden !bg-transparent !border-0 !shadow-none !py-0">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] w-full animate-pulse rounded-[20px] bg-gradient-to-br from-[#f9a8d4] to-[#fce7f3]" />
                    </CardContent>
                    <CardHeader className="p-6">
                      <div className="h-6 animate-pulse rounded-full bg-gradient-to-r from-[#f9a8d4] to-[#fce7f3]" />
                      <div className="h-4 animate-pulse rounded-full bg-gradient-to-r from-[#f9a8d4] to-[#fce7f3]" />
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {collections.map((collection, index) => (
                  <StaggerItem key={collection.id}>
                    <Link href={`/category/${collection.handle}`}>
                      <div className="h-full">
                        <Card className="group h-full overflow-hidden !bg-transparent !border-0 !shadow-none !py-0">
                          <CardContent className="p-0">
                            <div 
                              className="aspect-[3/4] w-full overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-110 rounded-[20px]" 
                              style={{
                                backgroundImage: `url("${collection.image?.url || DEFAULT_COLLECTION_IMAGE}")`
                              }}
                              aria-label={collection.title}
                            />
                          </CardContent>
                          <CardHeader className="p-6">
                            <CardTitle className="text-card-title text-xl text-neutral-900 group-hover:text-primary transition-colors duration-300">
                              {collection.title}
                            </CardTitle>
                            <p className="text-elegant text-sm text-neutral-600">
                              {collection.products.nodes.length} exquisite pieces
                            </p>
                          </CardHeader>
                        </Card>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </section>
        )}

        {/* Featured Products Section */}
        <section className="mb-20">
          <FadeIn delay={0.3}>
            <h2 className="text-section-title mb-12 text-center text-4xl text-neutral-900">
              Featured Products
            </h2>
          </FadeIn>
          {loading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden !bg-transparent !border-0 !shadow-none !py-0">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] w-full animate-pulse rounded-[20px] bg-gradient-to-br from-[#f9a8d4] to-[#fce7f3]" />
                  </CardContent>
                  <CardHeader className="p-6">
                    <div className="h-6 animate-pulse rounded-full bg-gradient-to-r from-[#f9a8d4] to-[#fce7f3]" />
                    <div className="h-4 animate-pulse rounded-full bg-gradient-to-r from-[#f9a8d4] to-[#fce7f3]" />
                    <div className="h-5 w-20 animate-pulse rounded-full bg-gradient-to-r from-[#f04299] to-[#d946ef]" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <StaggerContainer 
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              staggerDelay={0.15}
            >
              {featuredProducts.map((product, index) => (
                <StaggerItem key={product.id}>
                  <Link href={`/product/${product.handle}`}>
                    <div className="h-full">
                      <Card className="group h-full overflow-hidden !bg-transparent !border-0 !shadow-none !py-0">
                        <CardContent className="p-0 relative">
                          <div 
                            className="aspect-[3/4] w-full bg-cover bg-center transition-all duration-500 group-hover:scale-110 rounded-[20px] overflow-hidden" 
                            style={{backgroundImage: `url("${getProductImageUrl(product)}")`}}
                            aria-label={product.title}
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]" />
                        </CardContent>
                        <CardHeader className="p-6">
                          <CardTitle className="text-card-title text-lg text-neutral-900 group-hover:text-primary transition-colors duration-300">
                            {product.title}
                          </CardTitle>
                          <p className="text-elegant text-sm text-neutral-600 mb-2">
                            {product.productType || 'Luxury Lashes'}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold bg-gradient-to-r from-primary to-[#d946ef] bg-clip-text text-transparent">
                              {getProductPrice(product)}
                            </p>
                            <div className="flex text-[#fbbf24] text-sm">
                              {'★'.repeat(5)}
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
          
          <FadeIn delay={0.8}>
            <div className="mt-16 text-center">
              <Link href="/category">
                <Button 
                  variant="feminine" 
                  size="xl"
                  className="min-w-64 text-lg font-bold shadow-lg hover:shadow-xl"
                >
                  View All Products
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  );
}