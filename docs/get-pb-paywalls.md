---
title: "Fetch Paywall Builder paywalls and their configuration"
description: ""
metadataTitle: ""
---

After [you designed the visual part for your paywall](https://docs.adapty.io/v3.0/docs/adapty-paywall-builder) with Paywall Builder in the Adapty Dashboard, you can display it in your mobile app. The first step in this process is to get the paywall associated with the placement and its view configuration as described below.

Please be aware that this topic refers to Paywall Builder-customized paywalls. For guidance on fetching remote config paywalls, please refer to the [Fetch paywalls and products for remote config paywalls in your mobile app](fetch-paywalls-and-products) topic.

<details>
   <summary>Before you start displaying paywalls in your mobile app (click to expand)</summary>

   1. [Create your products](create-product) in the Adapty Dashboard.
2. [Create a paywall and incorporate the products into it](create-paywall) in the Adapty Dashboard.
3. [Create placements and incorporate your paywall into it](create-placement) in the Adapty Dashboard.
4. Install [Adapty SDK](installation) and [AdaptyUI DSK](paywall-builder-installation) in your mobile app.
</details>

## Fetch paywall designed with Paywall Builder

If you've [designed a paywall using the Paywall Builder](https://docs.adapty.io/v3.0/docs/adapty-paywall-builder), you don't need to worry about rendering it in your mobile app code to display it to the user. Such a paywall contains both what should be shown within the paywall and how it should be shown. Nevertheless, you need to get its ID via the placement, its view configuration, and then present it in your mobile app.

To ensure optimal performance, it's crucial to retrieve the paywall and its [view configuration](get-pb-paywalls#fetch-the-view-configuration-of-paywall-designed-using-paywall-builder) as early as possible, allowing sufficient time for images to download before presenting them to the user.

To get a paywall, use the `getPaywall` method:

```swift title="Swift"
Adapty.getPaywall(placementId: "YOUR_PLACEMENT_ID", locale: "en") { result in
    switch result {
        case let .success(paywall):
            // the requested paywall
        case let .failure(error):
            // handle the error
    }
}
```
```kotlin title="Kotlin"
import com.adapty.utils.seconds

...

Adapty.getPaywall("YOUR_PLACEMENT_ID", locale = "en", loadTimeout = 10.seconds) { result ->
    when (result) {
        is AdaptyResult.Success -> {
            val paywall = result.value
            // the requested paywall
        }
        is AdaptyResult.Error -> {
            val error = result.error
            // handle the error
        }
    }
}
```
```java title="Java"
import com.adapty.utils.TimeInterval;

...

Adapty.getPaywall("YOUR_PLACEMENT_ID", "en", TimeInterval.seconds(10), result -> {
    if (result instanceof AdaptyResult.Success) {
        AdaptyPaywall paywall = ((AdaptyResult.Success<AdaptyPaywall>) result).getValue();
        // the requested paywall
      
    } else if (result instanceof AdaptyResult.Error) {
        AdaptyError error = ((AdaptyResult.Error) result).getError();
        // handle the error
      
    }
});
```
```javascript title="Flutter"
try {
  final paywall = await Adapty().getPaywall(id: "YOUR_PLACEMENT_ID", locale: "en");
  // the requested paywall
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (e) {
}
```
```csharp title="Unity"
Adapty.GetPaywall("YOUR_PLACEMENT_ID", "en", (paywall, error) => {
  if(error != null) {
    // handle the error
    return;
  }
  
  // paywall - the resulting object
});
```
```typescript title="React Native (TS)"
try {
	const id = 'YOUR_PLACEMENT_ID';
	const locale = 'en';

	const paywall = await adapty.getPaywall(id, locale);
  // the requested paywall
} catch (error) {
	// handle the error
}
```

| Parameter | Presence | Description |
|---------|--------|-----------|
| **placementId** | required | The identifier of the desired [Placement](placements). This is the value you specified when creating a placement in the Adapty Dashboard. |
| **locale** | <p>optional</p><p>default: `en`</p> | <p>The identifier of the [paywall localization](add-paywall-locale-in-adapty-paywall-builder). This parameter is expected to be a language code composed of one or two subtags separated by the minus (**-**) character. The first subtag is for the language, the second one is for the region.</p><p></p><p>Example: `en` means English, `pt-br` represents the Brazilian Portuguese language.</p><p></p><p>See [Localizations and locale codes](localizations-and-locale-codes) for more information on locale codes and how we recommend using them.</p> |
| **fetchPolicy** | default: `.reloadRevalidatingCacheData` | <p>By default, SDK will try to load data from the server and will return cached data in case of failure. We recommend this variant because it ensures your users always get the most up-to-date data.</p><p></p><p>However, if you believe your users deal with unstable internet, consider using `.returnCacheDataElseLoad` to return cached data if it exists. In this scenario, users might not get the absolute latest data, but they'll experience faster loading times, no matter how patchy their internet connection is. The cache is updated regularly, so it's safe to use it during the session to avoid network requests.</p><p></p><p>Note that the cache remains intact upon restarting the app and is only cleared when the app is reinstalled or through manual cleanup.</p><p></p><p>Adapty SDK stores paywalls locally in two layers: regularly updated cache described above and [fallback paywalls](fallback-paywalls). We also use CDN to fetch paywalls faster and a stand-alone fallback server in case the CDN is unreachable. This system is designed to make sure you always get the latest version of your paywalls while ensuring reliability even in cases where internet connection is scarce.</p> |
| **loadTimeout** | default: 5 sec | <p>This value limits the timeout for this method. If the timeout is reached, cached data or local fallback will be returned.</p><p></p><p>Note that in rare cases this method can timeout slightly later than specified in `loadTimeout`, since the operation may consist of different requests under the hood.</p><p></p><p>For Android: You can create `TimeInterval` with extension functions (like `5.seconds`, where `.seconds` is from `import com.adapty.utils.seconds`), or `TimeInterval.seconds(5)`. To set no limitation, use `TimeInterval.INFINITE`.</p> |


Don't hardcode product IDs! Since paywalls are configured remotely, the available products, the number of products, and special offers (such as free trials) can change over time. Make sure your code handles these scenarios.  
For example, if you initially retrieve 2 products, your app should display those 2 products. However, if you later retrieve 3 products, your app should display all 3 without requiring any code changes. The only thing you should hardcode is the placement ID.

Response parameters:

| Parameter | Description                                                                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paywall   | An [`AdaptyPaywall`](sdk-models#adaptypaywall)  object with a list of product IDs, the paywall identifier, remote config, and several other properties. |

## Fetch the view configuration of paywall designed using Paywall Builder

Once you've fetched the paywall, check whether it includes a `ViewConfiguration` (indicating it's created with Paywall Builder). This will determine how you should display the paywall. If the `ViewConfiguration` is present, it should be shown as a Paywall Builder paywall; if not, [treat it as a remote config paywall](present-remote-config-paywalls).

For paywalls with `ViewConfiguration`, use the `getViewConfiguration` method to load the view configuration. For cross-platform SDKs, you can directly call the `createPaywallView` method, as there is no need to manually fetch the view configuration beforehand.

```swift title="Swift"
import Adapty

guard paywall.hasViewConfiguration else {
    //  use your custom logic
  	return
}

AdaptyUI.getViewConfiguration(forPaywall: paywall) { result in
    switch result {
    case let .success(viewConfiguration):
        // use loaded configuration
    case let .failure(error):
        // handle the error
    }
}
```
```kotlin title="Kotlin"
if (!paywall.hasViewConfiguration) {
  	// use your custom logic
  	return
}

AdaptyUI.getViewConfiguration(paywall) { result ->
    when(result) {
        is AdaptyResult.Success -> {
            val viewConfiguration = result.value
            // use loaded configuration
        }
        is AdaptyResult.Error -> {
            val error = result.error
            // handle the error
        }
    }
}
```
```java title="Java"
if (!paywall.hasViewConfiguration()) {
    // use your custom logic
    return;
}

AdaptyUI.getViewConfiguration(paywall, result -> {
    if (result instanceof AdaptyResult.Success) {
        AdaptyUI.ViewConfiguration viewConfiguration =
          ((AdaptyResult.Success<AdaptyUI.ViewConfiguration>) result).getValue();
        // use loaded configuration
    } else if (result instanceof AdaptyResult.Error) {
        AdaptyError error = ((AdaptyResult.Error) result).getError();
        // handle the error
    }
});
```
```javascript title="Flutter"
import 'package:adapty_ui_flutter/adapty_ui_flutter.dart';

try {
  final view = await AdaptyUI().createPaywallView(paywall: paywall);
} on AdaptyError catch (e) {
  // handle the error
} catch (e) {
  // handle the error
}
```
```typescript title="React Native (TSX)"
import {createPaywallView} from '@adapty/react-native-ui';

if (paywall.hasViewConfiguration) {
  try {
    const view = await createPaywallView(paywall);
  } catch (error) {
    // handle the error
  }
} else {
  	//use your custom logic
}
```
```csharp title="Unity"
AdaptyUI.CreatePaywallView(paywall, preloadProducts: true, (view, error) => {
  // use the view
});
```

:::note
If you are using multiple languages, learn how to add a [Paywall builder localization](add-paywall-locale-in-adapty-paywall-builder) and how to use locale codes correctly [here](localizations-and-locale-codes).
:::

Once you have successfully loaded the paywall and its view configuration, you can proceed to presenting the paywall in your mobile app.