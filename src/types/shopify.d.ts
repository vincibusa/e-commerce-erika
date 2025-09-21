// Shopify Customer Privacy API Type Definitions
declare global {
  interface Window {
    Shopify?: {
      loadFeatures?: (
        features: Array<{ name: string; version: string }>,
        callback: (error?: string | null) => void
      ) => void;
      customerPrivacy?: {
        setTrackingConsent: (
          consent: {
            analytics?: boolean;
            marketing?: boolean;
            preferences?: boolean;
            sale_of_data?: boolean;
            headlessStorefront?: boolean;
            checkoutRootDomain?: string;
            storefrontRootDomain?: string;
            storefrontAccessToken?: string;
          },
          callback?: (result?: { error?: string }) => void
        ) => void;
        analyticsProcessingAllowed: () => boolean;
        marketingAllowed: () => boolean;
        preferencesProcessingAllowed: () => boolean;
        saleOfDataAllowed: () => boolean;
        currentVisitorConsent: () => {
          marketing: string;
          analytics: string;
          preferences: string;
          sale_of_data: string;
        };
        shouldShowBanner: () => boolean;
        saleOfDataRegion: () => boolean;
        getRegion: () => string;
        consentId: () => string;
      };
    };
  }
}

export {};