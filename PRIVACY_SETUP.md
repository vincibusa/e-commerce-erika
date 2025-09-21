# Setup Privacy e Cookie Banner - Shopify Admin

## 🍪 Configurazione Shopify Admin per Privacy Compliance

### Step 1: Accedi alle Impostazioni Privacy
1. Vai al tuo **Shopify Admin**
2. Naviga a **Settings** → **Customer Privacy**
3. Questa sezione è stata introdotta da Shopify nel 2024

### Step 2: Configurazione Base Privacy
1. **Enable cookie banner**: Attiva il banner per conformità GDPR/CCPA
2. **Configure regions**: Seleziona le regioni dove mostrare il banner
   - 🇪🇺 **EU**: Per GDPR compliance
   - 🇺🇸 **California**: Per CCPA compliance
   - 🇬🇧 **UK**: Per UK GDPR
   - 🇨🇦 **Canada**: Per PIPEDA

### Step 3: Privacy Policy Setup
1. **Crea Privacy Policy**:
   - Vai a **Settings** → **Legal**
   - Crea/aggiorna la **Privacy Policy**
   - Assicurati di includere:
     - Cookie usage
     - Data collection
     - Third-party integrations
     - Customer rights (GDPR)

2. **Terms of Service**:
   - Aggiorna i termini per includere privacy
   - Riferimenti alla privacy policy

### Step 4: Customer Data Rights
1. **Data Subject Requests**:
   - Configura il sistema per richieste GDPR
   - **Right to Access**: Accesso ai dati
   - **Right to Rectification**: Correzione dati
   - **Right to Erasure**: Cancellazione dati
   - **Right to Portability**: Portabilità dati

2. **Data Retention**:
   - Configura i tempi di conservazione
   - Policy di cancellazione automatica

## 🔧 Configurazione Tecnica

### Variabili d'Ambiente Necessarie
```bash
# Nel file .env.local e apphosting.yaml
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_CHECKOUT_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_APP_ENV=production # o development
```

### Content Security Policy
Il file `next.config.ts` include le CSP necessarie per:
- ✅ Shopify Customer Privacy API
- ✅ Cookie banner functionality
- ✅ Checkout domain access
- ✅ CDN e font esterni

## 🎯 Funzionalità Implementate

### Cookie Banner Features
- ✅ **GDPR Compliance**: Banner automatico per regioni EU
- ✅ **CCPA Compliance**: "Do Not Sell" option per California
- ✅ **Granular Control**: Separazione analytics/marketing/preferences
- ✅ **Local Storage**: Persistenza consenso locale
- ✅ **Shopify Integration**: Invio automatico a Customer Privacy API
- ✅ **Responsive Design**: Mobile-friendly con touch targets 48px+

### Privacy Hook Features
- ✅ **Consent Management**: Hook `usePrivacyConsent()` per analytics tools
- ✅ **Event System**: Custom events per tracking tools
- ✅ **Helper Functions**: `canTrack()`, `canMarketing()`, `allowDataSale()`
- ✅ **Consent Revocation**: Possibilità di revocare consenso

## 📋 Checklist Setup Completo

### Shopify Admin
- [ ] Settings → Customer Privacy configurato
- [ ] Regioni GDPR/CCPA selezionate
- [ ] Privacy Policy creata/aggiornata
- [ ] Terms of Service aggiornati
- [ ] Data retention policy configurata

### Codice
- [x] Cookie banner implementato
- [x] Privacy hook creato
- [x] CSP configurata
- [x] Variabili d'ambiente settate
- [x] Layout integrato

### Testing
- [ ] Test in regioni EU (GDPR)
- [ ] Test in California (CCPA)
- [ ] Test mobile responsiveness
- [ ] Test analytics integration
- [ ] Test consent persistence

## 🔗 Link Utili

- [Shopify Customer Privacy API Docs](https://shopify.dev/docs/api/customer-privacy)
- [GDPR Compliance Guide](https://help.shopify.com/en/manual/privacy-and-security/privacy/gdpr)
- [CCPA Compliance](https://help.shopify.com/en/manual/privacy-and-security/privacy/ccpa)

## 🚨 Note Importanti

1. **Geo-Detection**: Il banner attualmente si mostra a tutti gli utenti. Per production considera l'integrazione con servizi di geo-detection
2. **Analytics Tools**: Integra il hook privacy con Google Analytics, Facebook Pixel, ecc.
3. **Third-party Apps**: Se usi app Shopify di terze parti, verifica la loro compliance
4. **Legal Review**: Fai sempre rivedere setup privacy da un legale specializzato