import { createAdminApiClient } from '@shopify/admin-api-client';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Funzione per ottenere le variabili d'ambiente (workaround per Turbopack)
function getEnvVar(name: string): string {
  // Workaround per Next.js 15 + Turbopack bug
  let value: string | undefined;
  
  switch (name) {
    case 'NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN':
      value = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
      break;
    case 'NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN':
      value = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
      break;
    case 'SHOPIFY_ADMIN_ACCESS_TOKEN':
      value = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
      break;
    case 'SHOPIFY_WEBHOOK_SECRET':
      value = process.env.SHOPIFY_WEBHOOK_SECRET;
      break;
    default:
      value = process.env[name];
  }
  
  if (!value) {
    console.warn(`Missing environment variable: ${name}`);
    return '';
  }
  
  return value;
}

// Configurazione client per Admin API (gestione prodotti, ordini, etc.)
// Solo server-side - creato lazy
let _adminApiClient: ReturnType<typeof createAdminApiClient> | null = null;
export function getAdminApiClient() {
  if (typeof window !== 'undefined') {
    throw new Error('Admin API Client can only be used on server-side');
  }
  
  if (!_adminApiClient) {
    const storeDomain = getEnvVar('NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN');
    const accessToken = getEnvVar('SHOPIFY_ADMIN_ACCESS_TOKEN');
    
    console.log('Creating Admin client with:', { storeDomain, accessToken: accessToken ? 'present' : 'missing' });
    
    _adminApiClient = createAdminApiClient({
      storeDomain,
      apiVersion: '2025-07',
      accessToken,
    });
  }
  
  return _adminApiClient;
}

// Configurazione client per Storefront API (query pubbliche prodotti/carrello)
// Può essere usato sia client che server-side
let _storefrontApiClient: ReturnType<typeof createStorefrontApiClient> | null = null;
export function getStorefrontApiClient() {
  if (!_storefrontApiClient) {
    const storeDomain = getEnvVar('NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN');
    const accessToken = getEnvVar('NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN');
    
    console.log('Creating Storefront client with:', { storeDomain, accessToken: accessToken ? 'present' : 'missing' });
    
    _storefrontApiClient = createStorefrontApiClient({
      storeDomain,
      apiVersion: '2025-07',
      publicAccessToken: accessToken,
    });
  }
  
  return _storefrontApiClient;
}

// Removed direct export to prevent immediate initialization

// Utility per formattare i prezzi
export function formatPrice(amount: string, currencyCode: string = 'EUR'): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}

// Utility per convertire handle Shopify in ID
export function createShopifyId(resource: string, id: string): string {
  return `gid://shopify/${resource}/${id}`;
}

// Utility per estrarre ID da GID Shopify
export function extractIdFromGid(gid: string): string {
  return gid.split('/').pop() || '';
}