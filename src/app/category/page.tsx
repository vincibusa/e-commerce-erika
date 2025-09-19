import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";

export default function CategoryPage() {
  return (
    <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col py-8 lg:flex-row lg:gap-12">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </main>
  );
}