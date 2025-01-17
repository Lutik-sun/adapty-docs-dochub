---
title: "Design paywall with remote config (COPY)"
description: ""
metadataTitle: ""
---

The Paywall Remote Config is a powerful tool that provides flexible configuration options. It allows the use of custom JSON payloads to tailor your paywalls precisely. With it, you can define various parameters such as titles, images, fonts, colors, and more, ensuring that the overall size remains within 10 KB per language.

<details>
   <summary>Before you start customizing a paywall (Click to Expand)</summary>

   1. [Create a product](create-product).
2. [Create a paywall and add the product to it](create-paywall).
</details>

To start customizing a paywall using the remote config:

1. Open the [**Products and Paywalls**](https://app.adapty.io/paywalls) section in the Adapty main menu and click the **Paywall** tab to open it. 



1. Click the Remote config tab to open it.

   
<img
  src={require('./img/b7eb293-paywalls_edit.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




2. Click the **3-dot** button next to the paywall and select the **Edit** option.

   
<img
  src={require('./img/d44fdb9-switch_to_remote_config.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




3. In the opened **Paywalls/ Your paywall** page, switch to the **Remote config** tab.

Remote config has 2 views: 

- [Table](customize-paywall-with-remote-config#table-view-of-the-remote-config)
- [JSON](customize-paywall-with-remote-config#json-view-of-the-remote-config)

Both the **Table** and **JSON** views include the same configuration elements. The only distinction is a matter of preference, with the sole difference being that the table view offers a context menu, which can be helpful for correcting localization errors.  
You can switch between views by clicking on the **Table** or **JSON** tab whenever necessary.

Whatever view you've chosen to customize your paywall, you can later access this data from SDK using the`remoteConfig` or `remoteConfigString` properties of `AdaptyPaywall`, and make some adjustments to your paywall. Here are some examples of how you can use a remote config.

```json title="Titles"
{
    "screen_title": "Today only: Subscribe, and get 7 days for free!"
}

## Test titles or others texts
```
```json title="Images"
{
    "background_image": "https://adapty.io/media/paywalls/bg1.png"
}

## Test images on your paywall
```
```json title="Fonts"
{
    "font_family": "San Francisco",
    "font_size": 16
}

## Test fonts
```
```json title="Color"
{
    "subscribe_button_color": "purple"
}

## Test colors of buttons, texts etc.
```
```json title="HTML"
{
    "photo_gallery": "https://adapty.io/media/paywalls/link-to-html-snippet.html"
}

## Any HTML code that can be displayed on the paywall
```
```json title="Soft/Hard Paywall"
{
    "hard_paywall": true
}

## By setting it to true, you disalow skipping paywall without subscribing
## You have to handle this logic in your app
```
```json title="Translations"
{
    "title": {
        "en": "Try for free!",
        "es": "¡Prueba gratis!",
        "ru": "Попробуй бесплатно!"
    }
}
```

You can combine different options, and make up your own. This way you can test different titles, texts, images, fonts, colors, and so on.

### JSON view of the remote config

In the **JSON** view of the remote config, you can enter any JSON formatted data up to 10 kB per language:


<img
  src={require('./img/3356ff5-remote_config_JSON.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>





### Table view of the remote config

If it's not common for you to work with code and there is a need to correct some values of the JSON, Adapty has the **Table** view for you.


<img
  src={require('./img/4c27b2f-remote_config_table.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>





It is a copy of your JSON in the format of a table that is easy to read and understand. Color coding helps to recognize different data types. 

To add a key, click the **Add raw** button. We automatically check the values and types mapping and show an alert if your corrections may lead to an invalid JSON.


<img
  src={require('./img/ef682d8-add_raw.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>





Additional raw options are mostly useful for [paywall localisations](add-remote-config-locale):


<img
  src={require('./img/17bcf80-remote_config_table_options.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>





Now it's time to [create a placement](create-placement) and add the paywall to it. After that, you can [display your remote config paywalls](display-remote-config-paywalls) in your mobile app.