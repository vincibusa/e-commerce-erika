'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { createCart, addToCart, updateCartLine, removeFromCart, getCart, getTotalCartItems } from '@/lib/api';
import type { ShopifyCart, ShopifyCartLine } from '@/lib/types';

interface CartContextType {
  cart: ShopifyCart | null;
  cartItemsCount: number;
  loading: boolean;
  addToCartHandler: (merchandiseId: string, quantity: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCartId = localStorage.getItem('shopify-cart-id');
    if (savedCartId) {
      loadCart(savedCartId);
    }
  }, []);

  const loadCart = async (cartId: string) => {
    try {
      const cartData = await getCart(cartId);
      if (cartData) {
        setCart(cartData);
      } else {
        // Cart not found, remove from localStorage
        localStorage.removeItem('shopify-cart-id');
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      localStorage.removeItem('shopify-cart-id');
    }
  };

  const addToCartHandler = async (merchandiseId: string, quantity: number) => {
    setLoading(true);
    try {
      let cartData: ShopifyCart | null;

      if (cart?.id) {
        // Add to existing cart
        cartData = await addToCart(cart.id, [{ merchandiseId, quantity }]);
      } else {
        // Create new cart
        cartData = await createCart([{ merchandiseId, quantity }]);
        if (cartData?.id) {
          localStorage.setItem('shopify-cart-id', cartData.id);
        }
      }

      if (cartData) {
        setCart(cartData);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cart?.id) return;

    setLoading(true);
    try {
      const cartData = await updateCartLine(cart.id, lineId, quantity);
      if (cartData) {
        setCart(cartData);
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (lineId: string) => {
    if (!cart?.id) return;

    setLoading(true);
    try {
      const cartData = await removeFromCart(cart.id, [lineId]);
      if (cartData) {
        setCart(cartData);
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = () => {
    setCart(null);
    localStorage.removeItem('shopify-cart-id');
  };

  const cartItemsCount = cart ? getTotalCartItems(cart) : 0;

  const value: CartContextType = {
    cart,
    cartItemsCount,
    loading,
    addToCartHandler,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}