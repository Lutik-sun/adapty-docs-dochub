---
title: "Configure App Store integration"
description: "Streamline App Store integration for your mobile app with Adapty, ensuring seamless validation of purchases and subscription updates. Learn how to input your app's configuration data from the App Store during initial onboarding or make changes later in the App Settings of the Adapty Dashboard"
metadataTitle: "Adapty App Store Integration Configuration"
---

This section describes how to establish the connection between the App Store and Adapty for your iOS app. This is required for us to be able to show subscription analytics and validate purchases. You can complete the integration during the initial onboarding or later in the **App Settings** within the Adapty Dashboard.

Although you might have initially configured the integration of your mobile app and Adapty during onboarding, you can modify these settings later in the **App settings**. 

:::danger
Configuration changes can be done safely during the Sandbox phase, until your mobile app goes live with Adapty SDK installed. Changes after the release can break the purchase flow in your app.
:::

## Step 1. Provide Bundle ID

Bundle ID is the unique identifier of your app in the App Store. This is required for the basic functionality of Adapty, such as subscription processing.

1. Open [App Store Connect](https://appstoreconnect.apple.com/apps). Select your app and proceed to **General** → **App Information** section.

2. Copy the **Bundle ID** in the **General Information** sub-section.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/afd5012-bundle_id_apple.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>




3. Open the [**App settings** -> **iOS SDK** tab](https://app.adapty.io/settings/ios-sdk) from the Adapty top menu.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/26f79d5-App_settings_top_menu.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>




4. Paste the copied value to the **Bundle ID** field.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/2d64163-bundle_id.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>




## Step 2. Provide Issuer ID and Key ID

The **In-app purchase Issuer ID**, referred to as **Issuer ID** in App Store Connect, is a special ID that identifies the issuer who created the authentication token. The **In-App Purchase Key ID**, referred to as **Key ID** in App Store Connect, is a unique identifier associated with a cryptographic key you've generated in the [Generate In-App Purchase Key in App Store Connect](generate-in-app-purchase-key) section.  

1. Open **App Store Connect**. Proceed to [**Users and Access** → **Integrations** → **In-App Purchase**](https://appstoreconnect.apple.com/access/integrations/api/subs) section.
2. In the **Active **list, find the key you've created in the [Generate In-App Purchase Key in App Store Connect](generate-in-app-purchase-key) section.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/19a2868-issuer_apple.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>



3. Copy **Issuer ID** and paste it to the **In-app purchase Issuer ID** field in the Adapty Dashboard.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/c2b42e7-issuer_id.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>



4. Copy the **Key ID** and paste it to the **In-app purchase Key ID** and **Subscription key ID** fields in the Adapty Dashboard.

## Step 3. Upload In-App Purchase Key file

Upload the **In-App Purchase Key** file you've downloaded in the [Generate In-App Purchase Key in App Store Connect](generate-in-app-purchase-key) section 


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/88cdfff-download_inapp_file.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





into the **Private key (.p8 file)** and **Subscription (.p8 file)** fields in the Adapty Dashboard.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/253b840-in-app_file_upload.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





## Step 4. Enter App Store shared secret

The **App Store shared secret**, also known as the App Store Connect Shared Secret, is a 32-character hexadecimal string used for in-app purchases and subscription receipt validation.  

1. Open [App Store Connect](https://appstoreconnect.apple.com/apps). Select your app and proceed to **General** → **App Information** section.

2. Scroll down to the **App-Specific Shared Secret** sub-section.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/2bd112a-shared_secret_apple.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>




   > 📘 If the **App-Specific Shared Secret** sub-section is absent, make sure you have an Account Holder or Admin role. If you have an Admin role and yet cannot see the **App-Specific Shared Secret** sub-section, ask the Account Holder of the app (the person who has created the application in the App Store Connect) to generate the App Store shared secret for the app. After that, the sub-section will be shown to Admins as well.

3. Click the **Manage** button.

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/2d8b4c0-shared_secret_apple_copy.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>




4. In the opened **App-Specific Shared Secret** window, copy the **Shared Secret**. If no shared secret is visible, first click either the **Manage** or **Generate** button whichever is available, and then copy the **Shared Secret**.

5. Paste the copied **Shared Secret** to the **App Store shared secret** field in the Adapty Dashboard. 

   
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/4f9624d-shared_secret.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>




6. Click the **Save** button in the Adapty Dashboard to confirm the changes.