'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

interface CartSheetProps {
  children: React.ReactNode;
}

export default function CartSheet({ children }: CartSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, cartItemsCount, updateQuantity, removeItem } = useCart();

  const subtotal = cart?.lines.nodes.reduce((sum, line) => {
    return sum + (parseFloat(line.merchandise.price.amount) * line.quantity);
  }, 0) || 0;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[500px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold">Your Cart ({cartItemsCount})</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {!cart || cart.lines.nodes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-neutral-100 p-4">
                <svg className="h-8 w-8 text-neutral-400" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16H34.05l4.89,26.86L54.68,152.86A16,16,0,0,0,70.42,166H184a8,8,0,0,0,0-16H70.42L66.58,120H196.1a16,16,0,0,0,15.74-13.14l16-80A8,8,0,0,0,222.14,58.87ZM198.1,104H64.67L56.41,64H207.59ZM88,200a20,20,0,1,1-20-20A20,20,0,0,1,88,200Zm128,0a20,20,0,1,1-20-20A20,20,0,0,1,216,200Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Your cart is empty</h3>
              <p className="mt-1 text-sm text-neutral-500">Add some beautiful lashes to get started!</p>
              <Button 
                className="mt-4" 
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.lines.nodes.map((line) => (
                  <div key={line.id} className="flex items-center gap-4 rounded-lg bg-neutral-50 p-4">
                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-neutral-200">
                      <img 
                        alt={line.merchandise.product.title}
                        className="h-full w-full object-cover" 
                        src={line.merchandise.product.featuredImage?.url || '/placeholder.jpg'}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-neutral-900">{line.merchandise.product.title}</h3>
                      <p className="text-sm text-neutral-500">{line.merchandise.title}</p>
                      <p className="font-medium text-primary">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: line.merchandise.price.currencyCode,
                        }).format(parseFloat(line.merchandise.price.amount))}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center rounded border border-neutral-200">
                        <button 
                          className="p-1 text-neutral-500 hover:text-primary"
                          onClick={() => updateQuantity(line.id, Math.max(0, line.quantity - 1))}
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                          </svg>
                        </button>
                        <span className="min-w-[2rem] px-2 text-center text-sm font-medium">{line.quantity}</span>
                        <button 
                          className="p-1 text-neutral-500 hover:text-primary"
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                          </svg>
                        </button>
                      </div>
                      <button 
                        className="p-1 text-neutral-400 hover:text-red-500"
                        onClick={() => removeItem(line.id)}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-neutral-200 pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Subtotal</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: cart.lines.nodes[0]?.merchandise.price.currencyCode || 'USD',
                      }).format(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-200 pt-2 text-base font-bold">
                    <span>Total</span>
                    <span>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: cart.lines.nodes[0]?.merchandise.price.currencyCode || 'USD',
                      }).format(subtotal)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button 
                  className="mt-6 w-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    // Redirect to Shopify checkout
                    if (cart.checkoutUrl) {
                      window.location.href = cart.checkoutUrl;
                    }
                  }}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}