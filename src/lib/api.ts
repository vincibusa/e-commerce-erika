import { getStorefrontApiClient, getAdminApiClient, formatPrice } from './client';
import { 
  PRODUCTS_QUERY, 
  PRODUCT_BY_HANDLE_QUERY, 
  COLLECTIONS_QUERY, 
  COLLECTION_BY_HANDLE_QUERY,
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  GET_CART_QUERY
} from './queries';
import type { 
  ShopifyProduct, 
  ShopifyCollection, 
  ShopifyCart, 
  ShopifyCartLine 
} from './types';

// Prodotti
export async function getProducts(options: {
  first?: number;
  query?: string;
  sortKey?: string;
  reverse?: boolean;
} = {}) {
  const { first = 20, query, sortKey = 'BEST_SELLING', reverse = false } = options;
  
  try {
    const response = await getStorefrontApiClient().request(PRODUCTS_QUERY, {
      variables: { first, query, sortKey, reverse }
    });
    
    return {
      products: response.data?.products?.nodes || [],
      pageInfo: response.data?.products?.pageInfo || null
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [], pageInfo: null };
  }
}

// Prodotto singolo per handle
export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const response = await getStorefrontApiClient().request(PRODUCT_BY_HANDLE_QUERY, {
      variables: { handle }
    });
    
    return response.data?.productByHandle || null;
  } catch (error) {
    console.error('Error fetching product by handle:', error);
    return null;
  }
}

// Collezioni
export async function getCollections(first: number = 10) {
  try {
    const response = await getStorefrontApiClient().request(COLLECTIONS_QUERY, {
      variables: { first }
    });
    
    return response.data?.collections?.nodes || [];
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
}

// Collezione singola per handle
export async function getCollectionByHandle(
  handle: string, 
  options: {
    first?: number;
    sortKey?: string;
    reverse?: boolean;
  } = {}
) {
  const { first = 20, sortKey = 'BEST_SELLING', reverse = false } = options;
  
  try {
    const response = await getStorefrontApiClient().request(COLLECTION_BY_HANDLE_QUERY, {
      variables: { handle, first, sortKey, reverse }
    });
    
    return response.data?.collectionByHandle || null;
  } catch (error) {
    console.error('Error fetching collection by handle:', error);
    return null;
  }
}

// Gestione Carrello
export async function createCart(lines: ShopifyCartLine[] = []): Promise<ShopifyCart | null> {
  try {
    const response = await getStorefrontApiClient().request(CREATE_CART_MUTATION, {
      variables: {
        input: {
          lines: lines.map(line => ({
            merchandiseId: line.merchandiseId,
            quantity: line.quantity
          }))
        }
      }
    });
    
    if (response.data?.cartCreate?.userErrors?.length > 0) {
      console.error('Cart creation errors:', response.data.cartCreate.userErrors);
      return null;
    }
    
    return response.data?.cartCreate?.cart || null;
  } catch (error) {
    console.error('Error creating cart:', error);
    return null;
  }
}

export async function addToCart(cartId: string, lines: ShopifyCartLine[]): Promise<ShopifyCart | null> {
  try {
    const response = await getStorefrontApiClient().request(ADD_TO_CART_MUTATION, {
      variables: {
        cartId,
        lines: lines.map(line => ({
          merchandiseId: line.merchandiseId,
          quantity: line.quantity
        }))
      }
    });
    
    if (response.data?.cartLinesAdd?.userErrors?.length > 0) {
      console.error('Add to cart errors:', response.data.cartLinesAdd.userErrors);
      return null;
    }
    
    return response.data?.cartLinesAdd?.cart || null;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return null;
  }
}

export async function updateCartLine(
  cartId: string, 
  lineId: string, 
  quantity: number
): Promise<ShopifyCart | null> {
  try {
    const response = await getStorefrontApiClient().request(UPDATE_CART_MUTATION, {
      variables: {
        cartId,
        lines: [{ id: lineId, quantity }]
      }
    });
    
    if (response.data?.cartLinesUpdate?.userErrors?.length > 0) {
      console.error('Update cart errors:', response.data.cartLinesUpdate.userErrors);
      return null;
    }
    
    return response.data?.cartLinesUpdate?.cart || null;
  } catch (error) {
    console.error('Error updating cart:', error);
    return null;
  }
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart | null> {
  try {
    const response = await getStorefrontApiClient().request(REMOVE_FROM_CART_MUTATION, {
      variables: { cartId, lineIds }
    });
    
    if (response.data?.cartLinesRemove?.userErrors?.length > 0) {
      console.error('Remove from cart errors:', response.data.cartLinesRemove.userErrors);
      return null;
    }
    
    return response.data?.cartLinesRemove?.cart || null;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return null;
  }
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  try {
    const response = await getStorefrontApiClient().request(GET_CART_QUERY, {
      variables: { cartId }
    });
    
    return response.data?.cart || null;
  } catch (error) {
    console.error('Error fetching cart:', error);
    return null;
  }
}

// Utility functions
export function getProductPrice(product: ShopifyProduct): string {
  const minPrice = product.priceRange.minVariantPrice.amount;
  const maxPrice = product.priceRange.maxVariantPrice.amount;
  const currency = product.priceRange.minVariantPrice.currencyCode;
  
  if (minPrice === maxPrice) {
    return formatPrice(minPrice, currency);
  }
  
  return `${formatPrice(minPrice, currency)} - ${formatPrice(maxPrice, currency)}`;
}

export function getProductImageUrl(product: ShopifyProduct, size: string = '600x600'): string {
  if (!product.featuredImage) {
    return '/placeholder-product.jpg'; // Immagine placeholder
  }
  
  // Aggiungi parametri di resize per ottimizzazione
  const url = new URL(product.featuredImage.url);
  const transformedUrl = url.origin + url.pathname + `?width=${size.split('x')[0]}&height=${size.split('x')[1]}`;
  
  return transformedUrl;
}

export function isProductInStock(product: ShopifyProduct): boolean {
  return product.variants.nodes.some(variant => variant.availableForSale);
}

export function getProductVariants(product: ShopifyProduct) {
  return product.variants.nodes.filter(variant => variant.availableForSale);
}

export function getTotalCartItems(cart: ShopifyCart | null): number {
  if (!cart) return 0;
  
  return cart.lines.nodes.reduce((total, line) => total + line.quantity, 0);
}

export function getCartTotal(cart: ShopifyCart | null): string {
  if (!cart) return formatPrice('0', 'EUR');
  
  return formatPrice(
    cart.cost.totalAmount.amount, 
    cart.cost.totalAmount.currencyCode
  );
}