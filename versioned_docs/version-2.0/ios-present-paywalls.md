---
title: "iOS - Present Paywall Builder paywalls"
description: ""
metadataTitle: ""
---

If you've customized a paywall using the Paywall Builder, you don't need to worry about rendering it in your mobile app code to display it to the user. Such a paywall contains both what should be shown within the paywall and how it should be shown.

:::note
If you work in [Observer mode](observer-vs-full-mode), refer to the [iOS - Present Paywall Builder paywalls in Observer mode](ios-present-paywall-builder-paywalls-in-observer-mode) topic instead.
:::

## Present paywalls in Swift

In order to display the visual paywall on the device screen, you must first configure it. To do this, use the method `.paywallController(for:products:viewConfiguration:delegate:)`:

```swift title="Swift"
import Adapty
import AdaptyUI

let visualPaywall = AdaptyUI.paywallController(
    for: <paywall object>,
    products: <paywall products array>,
    viewConfiguration: <LocalizedViewConfiguration>,
    delegate: <AdaptyPaywallControllerDelegate>
)
```

Request parameters:

| Parameter             | Presence | Description                                                                                                                                                                                                                                                                                                           |
| :-------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Paywall**           | required | An `AdaptyPaywall` object to obtain a controller for the desired paywall.                                                                                                                                                                                                                                             |
| **Products**          | optional | Provide an array of `AdaptyPaywallProducts` to optimize the display timing of products on the screen. If `nil` is passed, AdaptyUI will automatically fetch the necessary products.                                                                                                                                   |
| **ViewConfiguration** | required | An `AdaptyUI.LocalizedViewConfiguration` object containing visual details of the paywall. Use the `AdaptyUI.getViewConfiguration(paywall:locale:)` method.  Refer to [Fetch Paywall Builder paywalls and their configuration](get-and-show-paywall-builder-paywalls) topic for more details.                      |
| **Delegate**          | required | An `AdaptyPaywallControllerDelegate` to listen to paywall events. Refer to [Handling paywall events](ios-handling-events) topic for more details.                                                                                                                                                                 |
| **TagResolver**       | optional | Define a dictionary of custom tags and their resolved values. Custom tags serve as placeholders in the paywall content, dynamically replaced with specific strings for personalized content within the paywall. Refer to [Custom tags in paywall builder](custom-tags-in-paywall-builder) topic for more details. |

Returns:

| Object                  | Description                                          |
| :---------------------- | :--------------------------------------------------- |
| AdaptyPaywallController | An object, representing the requested paywall screen |

After the object has been successfully created, you can display it on the screen of the device: 

```swift title="Swift"
present(visualPaywall, animated: true)
```

## Present paywalls in SwiftUI

In order to display the visual paywall on the device screen, use the `.paywall` modifier in SwiftUI:

```swift title="SwiftUI"
@State var paywallPresented = false

var body: some View {
	Text("Hello, AdaptyUI!")
			.paywall(
          isPresented: $paywallPresented,
          paywall: <paywall object>,
          configuration: <LocalizedViewConfiguration>,
          didPerformAction: { action in
              switch action {
                  case .close:
                      paywallPresented = false
                  default:
                      // Handle other actions
                      break
              }
          },
          didFinishPurchase: { product, profile in paywallPresented = false },
          didFailPurchase: { product, error in /* handle the error */ },
          didFinishRestore: { profile in /* check access level and dismiss */  },
          didFailRestore: { error in /* handle the error */ },
          didFailRendering: { error in paywallPresented = false }
      )
}
```

Request parameters:

| Parameter         | Presence | Description                                                                                                                                                                                                                                                                                                            |
| :---------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Paywall**       | required | An `AdaptyPaywall` object to obtain a controller for the desired paywall.                                                                                                                                                                                                                                              |
| **Product**       | optional | Provide an array of `AdaptyPaywallProducts` to optimize the display timing of products on the screen. If `nil` is passed, AdaptyUI will automatically fetch the necessary products.                                                                                                                                    |
| **Configuration** | required | An `AdaptyUI.LocalizedViewConfiguration` object containing visual details of the paywall. Use the `AdaptyUI.getViewConfiguration(paywall:locale:)` method.  Refer to [Fetch Paywall Builder paywalls and their configuration](get-and-show-paywall-builder-paywalls) topic for more details.                       |
| **TagResolver**   | optional | Define a dictionary of custom tags and their resolved values. Custom tags serve as placeholders in the paywall content, dynamically replaced with specific strings for personalized content within the paywall. Refer to [Custom tags in paywall builder](custom-tags-in-paywall-builder)  topic for more details. |

Closure parameters:

| Closure parameter     | Description                                                                       |
| :-------------------- | :-------------------------------------------------------------------------------- |
| **didFinishPurchase** | If Adapty.makePurchase() succeeds, this callback will be invoked.                 |
| **didFailPurchase**   | If Adapty.makePurchase() fails, this callback will be invoked.                    |
| **didFinishRestore**  | If Adapty.restorePurchases() succeeds, this callback will be invoked.             |
| **didFailRestore**    | If Adapty.restorePurchases() fails, this callback will be invoked.                |
| **didFailRendering**  | If an error occurs during the interface rendering, this callback will be invoked. |

Refer to the [iOS - Handling events](ios-handling-events) topic for other closure parameters.