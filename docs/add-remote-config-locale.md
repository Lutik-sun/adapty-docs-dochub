---
title: "Add paywall locale in remote config"
description: "Expand your paywall's reach across diverse markets by configuring locales in remote config. Learn how to optimize localization and cater to specific regional preferences"
metadataTitle: "Implement Multi-Language Support: Adding Paywall Locale in Remote Config"
---

In a world with many cultures, it's important to adapt your product for each country. You can do this by using paywall localizations. For each paywall, make versions in different languages —each one catering to a specific language—to match the needs of specific local markets.

If you've [designed a paywall with the remote config](customize-paywall-with-remote-config), use the remote config as well to add localizations. Whether you're using a table view or JSON format, you can easily tweak settings for different languages. For example, you can translate String keys from English to Italian or set different Boolean values like TRUE for English and FALSE for Italian. You can even change background images based on the language. Basically, you keep the same setup but customize values for each language, making sure users get a personalized experience.

How to set up a localization for a paywall customized using remote config:

1. Open the [**Products and Paywalls**](https://app.adapty.io/paywalls) section in the Adapty main menu and click the **Paywall** tab to open it and click the **3-dot** button next to the product and select the **Edit** option.

   
<img
  src={require('./img/deaa5f0-paywalls_edit.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




2. In the **Paywalls / Your paywall** window, switch to the **Remote config** tab.

   
<img
  src={require('./img/68e80c5-switch_to_remote_config.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




3. In the **Remote config** tab, click the **Add locale** button and select all languages you want to have in your app.

   
<img
  src={require('./img/eea8027-add_locale.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




4. Click on the element you want to translate and enter a new value. You can both translate **String** and **List** values and replace pictures with those more appropriate for the locale. 

   
<img
  src={require('./img/032b429-remote_config_localization.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




Feel free to use the context menu of the English locale to fix localization issues:

- Use the **Push this value to all locales** menu to overwrite any changes made in the row for non-English locales, replacing them with the values from the English locale.
- Use the **Revert all row changes to original values** menu to cancel all changes made in the current session, reverting them to the last saved values.

  
<img
  src={require('./img/d7e70f1-remote_confi_loc_table_options.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>




Once you add locales to a paywall, learn to [correctly work with locale codes in your app's code](localizations-and-locale-codes).