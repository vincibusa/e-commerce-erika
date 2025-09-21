'use client';

import { useState, useEffect } from 'react';

export interface PrivacyConsent {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  saleOfData: boolean;
  timestamp?: string;
}

export function usePrivacyConsent() {
  const [consent, setConsent] = useState<PrivacyConsent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load existing consent from localStorage
    const loadConsent = () => {
      try {
        const stored = localStorage.getItem('shopify-privacy-consent');
        if (stored) {
          setConsent(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading privacy consent:', error);
      } finally {
        setLoading(false);
      }
    };

    loadConsent();

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      setConsent(event.detail);
    };

    window.addEventListener('shopify:privacy:consent', handleConsentUpdate as EventListener);

    return () => {
      window.removeEventListener('shopify:privacy:consent', handleConsentUpdate as EventListener);
    };
  }, []);

  // Helper functions for analytics tools
  const canTrack = () => consent?.analytics || false;
  const canMarketing = () => consent?.marketing || false;
  const allowDataSale = () => !consent?.saleOfData; // Reversed logic for CCPA
  const hasConsent = () => consent !== null;

  // Function to check if consent is required (can be enhanced with geo-detection)
  const isConsentRequired = () => {
    // In a real implementation, you'd check the user's location
    // For now, assume consent is always required
    return true;
  };

  // Function to revoke consent
  const revokeConsent = () => {
    localStorage.removeItem('shopify-privacy-consent');
    setConsent(null);
    
    // Emit event for analytics tools to stop tracking
    window.dispatchEvent(new CustomEvent('shopify:privacy:revoked'));
  };

  // Function to update specific consent
  const updateConsent = (updates: Partial<PrivacyConsent>) => {
    if (!consent) return;
    
    const newConsent = {
      ...consent,
      ...updates,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem('shopify-privacy-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
    
    window.dispatchEvent(new CustomEvent('shopify:privacy:updated', {
      detail: newConsent
    }));
  };

  return {
    consent,
    loading,
    canTrack,
    canMarketing,
    allowDataSale,
    hasConsent,
    isConsentRequired,
    revokeConsent,
    updateConsent,
  };
}