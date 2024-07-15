---
title: "Android - Handle paywall events"
description: ""
metadataTitle: ""
---

Paywalls configured with the [Paywall Builder](adapty-paywall-builder) don't need extra code to make and restore purchases. However, they generate some events that your app can respond to. Those events include button presses (close buttons, URLs, product selections, and so on) as well as notifications on purchase-related actions taken on the paywall. Learn how to respond to these events below.

If you need to control or monitor the processes that take place on the purchase screen, implement the `AdaptyUiEventListener` methods.

If you would like to leave the default behavior in some cases, you can extend `AdaptyUiDefaultEventListener` and override only those methods you want to change.

Below are the defaults from `AdaptyUiDefaultEventListener`.

### User-generated events

#### Actions

If a user has performed some action  (`Close`, `OpenURL` or `Custom`, this method will be invoked:

```kotlin
override fun onActionPerformed(action: AdaptyUI.Action, view: AdaptyPaywallView) {
    when (action) {
        AdaptyUI.Action.Close -> (view.context as? Activity)?.onBackPressed()
        
        is AdaptyUI.Action.OpenUrl -> //launching intent to open url
        
        is AdaptyUI.Action.Custom -> //no default action
    }
}
```

The following action types are supported: 

- `Close`
- `OpenUrl(url)`
- `Custom(id)`

Note that at the very least you need to implement the reactions to both `Close` and `OpenURL`. For example, if a user taps the close button, the action `Close` will occur and you are supposed to dismiss the paywall. 

:::warning
This method is _not_ invoked when user taps the system back button instead of the close icon on the screen.
:::

> 💡 Login Action
> 
> If you have configured Login Action in the dashboard, you should implement reaction for custom action with id `"login"`

#### Product selection

If a product is selected for purchase (by a user or by the system), this method will be invoked:

```kotlin Kotlin
public override fun onProductSelected(
    product: AdaptyPaywallProduct,
    view: AdaptyPaywallView,
) {}
```

#### Started purchase

If a user initiates the purchase process, this method will be invoked:

```kotlin
public override fun onPurchaseStarted(
    product: AdaptyPaywallProduct,
    view: AdaptyPaywallView,
) {}
```

#### Canceled purchase

If a user initiates the purchase process but manually interrupts it afterward, the method below will be invoked. This event occurs when the `Adapty.makePurchase()` function completes with the `USER_CANCELED` error:

```kotlin
public override fun onPurchaseCanceled(
    product: AdaptyPaywallProduct,
    view: AdaptyPaywallView,
) {}
```

#### Successful purchase

If `Adapty.makePurchase()` succeeds, this method will be invoked:

```kotlin
public override fun onPurchaseSuccess(
    profile: AdaptyProfile?,
    product: AdaptyPaywallProduct,
    view: AdaptyPaywallView,
) {
    (view.context as? Activity)?.onBackPressed()
}
```

We recommend dismissing the screen in that case. 

#### Failed purchase

If `Adapty.makePurchase()` fails, this method will be invoked:

```kotlin
public override fun onPurchaseFailure(
    error: AdaptyError,
    product: AdaptyPaywallProduct,
    view: AdaptyPaywallView,
) {}
```

#### Successful restore

If `Adapty.restorePurchases()` succeeds, this method will be invoked:

```kotlin
public override fun onRestoreSuccess(
    profile: AdaptyProfile,
    view: AdaptyPaywallView,
) {}
```

We recommend dismissing the screen if the user has the required `accessLevel`. Refer to the [Subscription status](subscription-status) topic to learn how to check it.

#### Failed restore

If `Adapty.restorePurchases()` fails, this method will be invoked:

```kotlin
public override fun onRestoreFailure(
    error: AdaptyError,
    view: AdaptyPaywallView,
) {}
```

### Data fetching and rendering

#### Product loading errors

If you don't pass the products during the initialization, AdaptyUI will retrieve the necessary objects from the server by itself. If this operation fails, AdaptyUI will report the error by invoking this method:

```kotlin
public override fun onLoadingProductsFailure(
    error: AdaptyError,
    view: AdaptyPaywallView,
): Boolean = false
```

If you return `true`, AdaptyUI will repeat the request in 2 seconds.

#### Rendering errors

If an error occurs during the interface rendering, it will be reported by calling this method:

```kotlin
public override fun onRenderingError(
    error: AdaptyError,
    view: AdaptyPaywallView,
) {}
```

In a normal situation, such errors should not occur, so if you come across one, please let us know.