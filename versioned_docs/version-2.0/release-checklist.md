---
title: "Release checklist"
description: ""
metadataTitle: ""
---

We’re thrilled you’ve decided to use Adapty! We want you to get the best results from the very first build. This guide will walk you through how to get started with Adapty

### Installing Adapty SDK

Install Adapty SDK in your app and be sure you have replaced the** "PUBLIC_SDK_KEY"** placeholder with your actual **[Public SDK key](https://app.adapty.io/settings/general)**.

Bear in mind, that SDK calls must be made after calling** `.activate()`** method. Otherwise, we won't be able to authenticate requests and they will be canceled.

```swift title="iOS"
Adapty.activate("PUBLIC_SDK_KEY", customerUserId: "YOUR_USER_ID")
```
```kotlin title="Android"
override fun onCreate() {
    super.onCreate()
    Adapty.activate(applicationContext, "PUBLIC_SDK_KEY", customerUserId: "YOUR_USER_ID")
}
```
```xml title="Flutter - info.plist"
<dict>
    ...
    <key>AdaptyPublicSdkKey</key>
    <string>PUBLIC_SDK_KEY</string>
</dict>
```
```xml title="Flutter - AndroidManifest.xml"
<application ...>
       ...
       <meta-data
              android:name="AdaptyPublicSdkKey"
              android:value="PUBLIC_SDK_KEY" />
</application>
```
```typescript title="React Native - /src/App.tsx"
import { activateAdapty } from 'react-native-adapty';

const App: React.FC = () => {
  // ...
  useEffect(() => {
    activateAdapty({ sdkKey: 'PUBLIC_SDK_KEY' });
  }, []);
  // ...
}
```

### Configuring processing of purchases

Adding  **App Store shared secret** for [iOS](app-store-shared-secret) and both **package name** with **service account key file** for [Android](service-account-key-file) would be neccessary to allow Adapty to successfully process purchasing events.

### Subscription Events

Here is what you can do to set up tracking of subscription events.

|                  |                                                                                                    |
| :--------------- | :------------------------------------------------------------------------------------------------- |
| **For iOS**      | **Update the App Store Server Notifications with our [link](app-store-server-notifications)**  |
| **For Android**  | **Set up [Real-time Developer Notifications (RTDN)](real-time-developer-notifications-rtdn)**  |

### Integrations

[Integrations](events) with third-party analytics and attribution services require [passing identifiers](analytics-integration) to the SDK. 

|                          |                                                                                                                                                                                                           |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **.updateProfile()**     | Use this method to passing identifiers to Amplitude, Mixpanel, Facebook Ads, and AppMetrica                                                                                                               |
| **.updateAttribution()** | This method would be required for passing attribution data from AppsFlyer, Adjust, and Branch. Be sure to configure the integration of interest in Adapty Dashboard, by providing API key and event names |

### Promo campaigns and promo offers

If you want to use Adapty along with Apple Promotional Offers, adding a [subscription key](app-store-promotional-offers) will allow us to sign offers.

### Notes

:::warning
Don't forget about Privacy Labels

[Learn more](apple-app-privacy) about the data Adapty collects and which flags you'd need to set for a review.
:::

:::danger
Make sure to [send paywall views](displaying-products#paywall-analytics) to Adapty using **.logShowPaywall()** method. Otherwise, paywall views will not be accounted for in the metrics and conversions will be irrelevant.
:::

If you have any questions about integrating Adapty SDK, feel free to contact us using [the website](https://adapty.io) (we use Intercom in the bottom right corner) or just email us at [support@adapty.io](mailto:support@adapty.io).