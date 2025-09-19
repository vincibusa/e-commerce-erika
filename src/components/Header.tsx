'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Shop', href: '/category' },
    { label: 'Product', href: '/product' },
    { label: 'Cart', href: '/cart' },
    { label: 'Home', href: '/' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-primary/20 bg-background-light/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-10">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <svg 
            className="h-6 w-6 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M21 4H14.3333V10.6667H7.66667V17.3333H1V20H21V4Z" fill="currentColor"></path>
          </svg>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">Lash Luxe</h2>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-md px-2 py-1"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-primary/10 text-neutral-700 hover:bg-primary/20"
          aria-label="Search products"
        >
          <span className="material-symbols-outlined text-xl">search</span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-primary/10 text-neutral-700 hover:bg-primary/20 relative"
          aria-label="Shopping cart"
          asChild
        >
          <Link href="/cart">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
              2
            </span>
          </Link>
        </Button>

        {/* Mobile Menu Button - Spostato a destra */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-primary/10 text-neutral-700 hover:bg-primary/20"
                aria-label="Open mobile menu"
              >
                <span className="material-symbols-outlined text-xl">menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    className="text-base font-medium text-neutral-600 hover:text-primary transition-colors duration-200 py-2 px-4 rounded-md hover:bg-primary/10"
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}