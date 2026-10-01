# Analytica Android (Capacitor + Google Play subscriptions)

## 1. Build the APK/AAB
Requires Node 18+, Android Studio, JDK 17.
    npm install
    npx cap add android
    npx cap sync android
    npx cap open android      # Build > Generate Signed Bundle (AAB)
Change `appId` in capacitor.config.json to your own package name first.

## 2. Set up subscriptions (Google Play Billing via RevenueCat)
1. Google Play Console: create the app, then Monetize > Subscriptions: add `analytica_pro` with base plans `monthly` and `yearly`, set prices.
2. Create a free RevenueCat account, connect Google Play, add an entitlement named `pro`, and an offering with Monthly and Annual packages.
3. Paste the RevenueCat Android public key into `RCKEY` in www/index.html (Billing module).
4. Upload to Internal testing, add license testers, and test a purchase before release.

## Free vs Pro (edit in www/index.html, `Billing`)
Free: descriptives, t-test, correlation, 3 runs/day, Excel steps, undergrad and MPhil lessons.
Pro: all analyses, SPSS and R code, unlimited runs, PhD lessons.

## Notes
- Google requires Play Billing for in-app digital subscriptions; do not use Stripe or Paystack inside the app.
- The client-side unlock is simple. For stronger protection, verify entitlements server-side via RevenueCat webhooks.
- Add a privacy policy URL and Data safety form in Play Console.
- In a browser the Go Pro button runs a clearly labelled demo purchase.
