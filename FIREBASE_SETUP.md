# Firebase App Hosting Setup

## Configurazione Variabili d'Ambiente

Questo progetto utilizza Firebase App Hosting per il deployment. Le variabili d'ambiente sono configurate attraverso il file `apphosting.yaml`.

### Setup Locale

1. Copia `.env.example` in `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Configura le tue variabili Shopify in `.env.local`

### Setup Firebase App Hosting

1. **File di configurazione**: `apphosting.yaml` (già presente)

2. **Variabili da configurare**:
   - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`: Il dominio del tuo store Shopify
   - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Token per Storefront API
   - `SHOPIFY_ADMIN_ACCESS_TOKEN`: Token per Admin API (solo server-side)

3. **Availability Settings**:
   - `BUILD`: Disponibile durante la build
   - `RUNTIME`: Disponibile durante l'esecuzione
   - Variabili `NEXT_PUBLIC_*`: Sempre disponibili lato client

### Best Practices

- ✅ Usa `apphosting.yaml` per Firebase App Hosting
- ✅ Usa prefisso `NEXT_PUBLIC_` per variabili client-side
- ✅ Limita `availability` per variabili sensibili (solo `RUNTIME`)
- ✅ Usa Google Cloud Secret Manager per dati super sensibili

### Deploy

```bash
# Deploy automatico tramite Firebase App Hosting
# Le variabili vengono caricate da apphosting.yaml
firebase deploy --only hosting
```

### Environments Multipli

Firebase App Hosting supporta ambienti multipli:
- Crea progetti Firebase separati (dev, staging, prod)
- Usa lo stesso `apphosting.yaml` con valori diversi per progetto
- Google Cloud Secret Manager gestisce i valori per ambiente

## Sicurezza

- ⚠️ Non committare mai `.env.local`
- ✅ Usa `apphosting.yaml` per configurazione Firebase
- ✅ Variabili sensibili solo con `availability: [RUNTIME]`
- ✅ Considera Google Cloud Secret Manager per token critici