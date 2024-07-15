---
title: "Apple App Store shared secret (LEGACY)"
description: ""
metadataTitle: ""
---

:::warning
This is a legacy receipt verification method

You only need to configure this shared secret if you're on Apple's StoreKit \<v2.0 and Adapty SDK \<v.2.9.0 — as it is currently deprecated by Apple.

If you're just starting out with Adapty, configure [Apple In-App Purchase API](in-app-purchase-api-storekit-2) instead.
:::

Adapty uses this key for receipt verification. This key is app-specific, make sure to generate it for each of your apps. To do this please follow the steps below.

:::note
You can also generate one Primary Shared Secret, and use one key for all your apps. To generate it, go to Users and Access > [Shared Secret](https://appstoreconnect.apple.com/access/shared-secret) page and click **Generate** there.
:::

## 1\. Generate a shared secret for your app

Select your app on the [App Store Connect apps page](https://appstoreconnect.apple.com/apps). Go to **App Information** in section **General**. On the page, you can see the App-Specific Shared Secret description with  **Manage** link below, click it, and you'll be able to see or create a new shared secret.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/4185892-CleanShot_2023-08-25_at_12.14.41_22x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





Generate a Shared Secret, copy it, and don't forget to paste it in Adapty Dashboard.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/2b25bba-CleanShot_2023-08-25_at_12.15.562x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





## 2\. Add the generated shared secret to Adapty

Select [App settings -> iOS SDK](https://app.adapty.io/settings/ios-sdk) in Adapty. Scroll down to App Store Connect shared secret section, and enter your shared secret. 


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/5e00c24-CleanShot_2022-12-29_at_07.53.55.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>

