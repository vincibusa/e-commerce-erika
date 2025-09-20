// Shopify Types
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  featuredImage?: {
    url: string;
    altText?: string;
  };
  images: {
    nodes: Array<{
      url: string;
      altText?: string;
    }>;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    nodes: Array<{
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      compareAtPrice?: {
        amount: string;
        currencyCode: string;
      };
      availableForSale: boolean;
      selectedOptions: Array<{
        name: string;
        value: string;
      }>;
    }>;
  };
  options: Array<{
    name: string;
    values: string[];
  }>;
  tags: string[];
  productType: string;
  vendor: string;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  image?: {
    url: string;
    altText?: string;
  };
  products: {
    nodes: ShopifyProduct[];
  };
}

export interface ShopifyCart {
  id: string;
  lines: {
    nodes: Array<{
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        product: {
          title: string;
          handle: string;
          featuredImage?: {
            url: string;
            altText?: string;
          };
        };
      };
    }>;
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  checkoutUrl: string;
}

export interface ShopifyCartLine {
  merchandiseId: string;
  quantity: number;
}