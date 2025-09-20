"use client"

import { useState, useEffect, use } from "react"
import { notFound } from 'next/navigation'
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { getCollectionByHandle } from '@/lib/api';
import type { ShopifyCollection } from '@/lib/types';

interface CategoryPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [collection, setCollection] = useState<ShopifyCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollection() {
      try {
        const result = await getCollectionByHandle(resolvedParams.handle);
        if (!result) {
          notFound();
          return;
        }
        setCollection(result);
      } catch (error) {
        console.error('Error fetching collection:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchCollection();
  }, [resolvedParams.handle]);

  if (loading) {
    return (
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="h-8 w-64 animate-pulse rounded bg-neutral-200 mb-4"></div>
          <div className="h-4 w-96 animate-pulse rounded bg-neutral-200"></div>
        </div>
      </main>
    );
  }

  if (!collection) {
    notFound();
  }

  return (
    <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8">
      {/* Collection Header */}
      <div className="py-8 border-b border-primary/20">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          {collection.title}
        </h1>
        {collection.description && (
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl">
            {collection.description}
          </p>
        )}
        <p className="mt-2 text-sm text-neutral-500">
          {collection.products.nodes.length} products
        </p>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden py-4 sm:py-6 border-b border-primary/20">
        <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="py-6">
              <FilterSidebar />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-col py-6 sm:py-8 lg:flex-row lg:gap-12">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
          <FilterSidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 lg:min-w-0">
          <ProductGrid collectionHandle={resolvedParams.handle} />
        </div>
      </div>
    </main>
  );
}