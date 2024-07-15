---
title: "Unity – Observer mode"
description: ""
metadataTitle: ""
---

If you have a functioning subscription system and want to give Adapty SDK a quick try, you can use Observer mode. With just one line of code you can:

- get insights by using our top-class [analytics](analytics-charts);
- send [subscription events](events) to your server and 3rd party services;
- view and analyze customers in Adapty [CRM](profiles-crm).

### Important

:::warning
When running in Observer mode, Adapty SDK won't close any transactions, so make sure you're handling it.
:::

### Activating Observer Mode

Adapty SDK will automatically collect all transactions and will be sending subscription events. To turn on Observer mode, just add the `AdaptyObserverMode` key to `Adapty-Info.plist` and `AndroidManifest.xml`

```xml Adapty-Info.plist
<dict>
    ...
    <key>AdaptyPublicSdkKey</key>
    <string>PUBLIC_SDK_KEY</string>
    <key>AdaptyObserverMode</key>
		<true/>
</dict>
```
```xml AndroidManifest.xml
<application ...>
       ...
       <meta-data
              android:name="AdaptyPublicSdkKey"
              android:value="PUBLIC_SDK_KEY"/>
                
       <meta-data
              android:name="AdaptyObserverMode"
              android:value="true"/>
</application>
```

:::note
At any purchase or restore in your application, you need to call .`restorePurchases()` method to record the action in Adapty.
:::

### A/B tests analytics

In Observer mode, Adapty SDK doesn't know, where the purchase was made from. If you display products using our [Paywalls](paywalls) or [A/B Tests](ab-test), you can manually assign variation to the purchase. After doing this, you'll be able to see metrics in Adapty Dashboard.

```csharp Unity
Adapty.SetVariationForTransaction("<variationId>", "<transactionId>", (error) => { 
    if(error != null) {
        // handle the error
        return;
    }

    // successful binding
});
```

Request parameters:

- `variationId` (required): a string identifier of variation. You can get it using `variationId` property of [`Paywall`](sdk-models#paywall)
- `transactionId` (required): a string identifier of your purchased transaction [`SKPaymentTransaction`](https://developer.apple.com/documentation/storekit/skpaymenttransaction) for iOS