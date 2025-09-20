"use client"

import { useState } from "react"
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function CategoryPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  return (
    <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8">
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
          <ProductGrid />
        </div>
      </div>
    </main>
  );
}