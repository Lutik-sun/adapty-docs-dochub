---
title: "Asapty"
description: ""
metadataTitle: ""
---

Using [Asapty](https://asapty.com/) integration you can optimize your Search Ads campaigns. Adapty sends subscription events to Asapty, so you can build custom dashboards there, based on Apple Search Ads attribution.

This specific integration doesn't add any attribution data to Adapty, as we already have everything we need from [ASA](https://docs.adapty.io/docs/apple-search-ads) directly.

## How to set up Asapty integration

To integrate Asapty navigate to [Integrations > Asapty](https://app.adapty.io/integrations/asapty) in the Adapty dashboard and fill out the field value for Asapty ID.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/895de2b-CleanShot_2023-08-14_at_18.57.462x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





Asapty ID can be found in Settings> General section in your Asapty account.

## Events and tags

Below the credentials, there are three groups of events you can send to Asapty from Adapty. Simply turn on the ones you need. Check the full list of the events offered by Adapty [here](https://docs.adapty.io/docs/events).


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/58ddf41-CleanShot_2023-08-15_at_15.11.072x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





We recommend using the default event names provided by Asapty. But you can change the event names based on your needs.

## SDK configuration

You don't have to configure anything on the SDK side, but we recommend sending `customerUserId` to Adapty for better accuracy.

:::warning
Troubleshooting

- Make sure you've configured [Apple Search Ads](https://docs.adapty.io/docs/apple-search-ads) in Adapty and [uploaded credentials](https://app.adapty.io/settings/apple-search-ads), without them, Asapty won't work.
- Only the profiles with detailed, non-organic ASA attribution will deliver their events to Asapty. You will see "The user profile is missing the required integration data." if the attribution is no sufficients.
- Profiles created prior to configuring the integrations will not be able to deliver their events to Asapty. You will see "The user profile is missing the required integration data." error in such cases.
:::