'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CustomerPrivacyConsent {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  saleOfData: boolean;
}

interface CookieBannerProps {
  storeDomain?: string;
  checkoutDomain?: string;
}

export default function CookieBanner({ 
  checkoutDomain = process.env.NEXT_PUBLIC_CHECKOUT_DOMAIN
}: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [consent, setConsent] = useState<CustomerPrivacyConsent>({
    analytics: false,
    marketing: false,
    preferences: false,
    saleOfData: false,
  });

  // Check if user is in a region that requires cookie consent
  useEffect(() => {
    const checkConsentRequired = () => {
      // Check localStorage for existing consent
      const existingConsent = localStorage.getItem('shopify-privacy-consent');
      
      if (existingConsent) {
        setShowBanner(false);
        setLoading(false);
        return;
      }

      // Simple geo-check (in production you'd use a proper geo service)
      // For now, show banner for all users
      setShowBanner(true);
      setLoading(false);
    };

    checkConsentRequired();
  }, []);

  const handleConsentSubmission = async (consentData: CustomerPrivacyConsent) => {
    try {
      // Store consent locally
      localStorage.setItem('shopify-privacy-consent', JSON.stringify({
        ...consentData,
        timestamp: new Date().toISOString(),
      }));

      // Wait for Shopify Customer Privacy API to be available
      const waitForShopifyAPI = () => {
        return new Promise<void>((resolve) => {
          if (window.Shopify?.customerPrivacy?.setTrackingConsent) {
            resolve();
          } else if (window.Shopify?.loadFeatures) {
            window.Shopify.loadFeatures([{
              name: 'consent-tracking-api',
              version: '0.1',
            }], (error?: string | null) => {
              if (!error) {
                resolve();
              } else {
                console.warn('Failed to load Shopify Customer Privacy API:', error);
                resolve(); // Continue anyway
              }
            });
          } else {
            // Fallback: wait a bit and try again
            setTimeout(() => resolve(), 100);
          }
        });
      };

      await waitForShopifyAPI();

      // Use Shopify Customer Privacy API for headless store
      if (window.Shopify?.customerPrivacy?.setTrackingConsent && checkoutDomain) {
        const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
        const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
        
        if (storefrontAccessToken && storeDomain) {
          // Extract root domain from store domain (remove subdomains)
          const storefrontRootDomain = storeDomain.replace('.myshopify.com', '').split('-').pop() + '.com';
          
          window.Shopify.customerPrivacy.setTrackingConsent({
            analytics: consentData.analytics,
            marketing: consentData.marketing,
            preferences: consentData.preferences,
            sale_of_data: consentData.saleOfData,
            headlessStorefront: true,
            checkoutRootDomain: checkoutDomain,
            storefrontRootDomain: storefrontRootDomain,
            storefrontAccessToken: storefrontAccessToken,
          }, (result?: { error?: string }) => {
            if (result?.error) {
              console.error('Shopify Customer Privacy API error:', result.error);
            } else {
              console.log('Consent successfully submitted to Shopify');
            }
          });
        }
      }

      // Emit custom events for analytics tools
      window.dispatchEvent(new CustomEvent('shopify:privacy:consent', {
        detail: consentData
      }));

      window.dispatchEvent(new CustomEvent('privacy:consent:changed', {
        detail: {
          analytics: consentData.analytics,
          marketing: consentData.marketing,
          preferences: consentData.preferences,
          saleOfData: consentData.saleOfData,
        }
      }));

      setShowBanner(false);
    } catch (error) {
      console.error('Error submitting privacy consent:', error);
      // Don't prevent banner from closing - consent is stored locally
      setShowBanner(false);
    }
  };

  const acceptAll = () => {
    const allConsent = {
      analytics: true,
      marketing: true,
      preferences: true,
      saleOfData: false, // Do not sell data
    };
    handleConsentSubmission(allConsent);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      analytics: false,
      marketing: false,
      preferences: true, // Usually considered necessary
      saleOfData: false,
    };
    handleConsentSubmission(necessaryOnly);
  };

  const savePreferences = () => {
    handleConsentSubmission(consent);
    setShowPreferences(false);
  };

  if (loading || !showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#fce7f3] shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          {!showPreferences ? (
            // Main Banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                  🍪 Your Privacy Matters
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We use cookies to enhance your shopping experience, provide personalized content, 
                  and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                  You can customize your preferences or learn more in our{' '}
                  <a href="/pages/privacy-policy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </a>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(true)}
                  className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  Customize
                </Button>
                <Button
                  variant="soft"
                  size="sm"
                  onClick={acceptNecessary}
                  className="border-primary/20"
                >
                  Necessary Only
                </Button>
                <Button
                  variant="feminine"
                  size="sm"
                  onClick={acceptAll}
                  className="min-w-24"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Preferences Panel
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold text-neutral-900">
                  Cookie Preferences
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPreferences(false)}
                  className="text-neutral-500"
                >
                  ✕
                </Button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {/* Necessary Cookies */}
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Necessary</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Essential for website functionality and security.
                  </p>
                </div>

                {/* Analytics */}
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Analytics</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        consent.analytics ? 'bg-primary' : 'bg-gray-200'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          consent.analytics ? 'translate-x-5' : 'translate-x-0'
                        } mt-0.5 ml-0.5`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Help us understand how you use our site.
                  </p>
                </div>

                {/* Marketing */}
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Marketing</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        consent.marketing ? 'bg-primary' : 'bg-gray-200'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          consent.marketing ? 'translate-x-5' : 'translate-x-0'
                        } mt-0.5 ml-0.5`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Personalized ads and promotional content.
                  </p>
                </div>

                {/* Sale of Data (CCPA) */}
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Do Not Sell My Data</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.saleOfData}
                        onChange={(e) => setConsent({...consent, saleOfData: e.target.checked})}
                        className="sr-only"
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${
                        consent.saleOfData ? 'bg-primary' : 'bg-gray-200'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          consent.saleOfData ? 'translate-x-5' : 'translate-x-0'
                        } mt-0.5 ml-0.5`} />
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Opt out of personal data sales (CCPA).
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setShowPreferences(false)}>
                  Cancel
                </Button>
                <Button variant="feminine" onClick={savePreferences}>
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}