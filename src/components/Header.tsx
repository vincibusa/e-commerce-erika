'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CartSheet from '@/components/CartSheet';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemsCount } = useCart();

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/category' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[#fce7f3] bg-white/95 px-4 py-4 backdrop-blur-md shadow-[0_2px_20px_0_rgba(240,66,153,0.08)] sm:px-6 lg:px-10">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#d946ef] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-110" />
            <svg 
              className="relative h-8 w-8 text-primary group-hover:text-[#d946ef] transition-colors duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M21 4H14.3333V10.6667H7.66667V17.3333H1V20H21V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 to-primary bg-clip-text text-transparent font-serif">
            Lash Luxe
          </h2>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            className="relative text-sm font-medium text-neutral-700 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-lg px-3 py-2 group"
            href={item.href}
          >
            {item.label}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-[#d946ef] group-hover:w-full group-hover:left-0 transition-all duration-300" />
          </Link>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-soft"
          className="bg-gradient-to-r from-[#fce7f3] to-[#f9a8d4] text-primary hover:from-[#f9a8d4] hover:to-[#f472b6] hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          aria-label="Search products"
        >
          <span className="material-symbols-outlined text-xl">search</span>
        </Button>
        
        <CartSheet>
          <Button
            variant="ghost"
            size="icon-soft"
            className="bg-gradient-to-r from-[#fce7f3] to-[#f9a8d4] text-primary hover:from-[#f9a8d4] hover:to-[#f472b6] hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 relative"
            aria-label="Shopping cart"
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            {cartItemsCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-[#d946ef] text-xs font-bold text-white shadow-lg">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </CartSheet>

        {/* Mobile Menu Button - Spostato a destra */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-soft"
                className="bg-gradient-to-r from-[#fce7f3] to-[#f9a8d4] text-primary hover:from-[#f9a8d4] hover:to-[#f472b6] hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                aria-label="Open mobile menu"
              >
                <span className="material-symbols-outlined text-xl">menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-br from-white to-[#fdf2f8] border-l-2 border-[#fce7f3]">
              <SheetHeader className="pb-6 border-b border-[#fce7f3]">
                <SheetTitle className="text-left font-serif text-xl bg-gradient-to-r from-neutral-900 to-primary bg-clip-text text-transparent">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-3" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    className="text-lg font-medium text-neutral-700 hover:text-white transition-all duration-300 py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-primary hover:to-[#d946ef] hover:shadow-lg hover:shadow-primary/20 min-h-[48px] flex items-center"
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