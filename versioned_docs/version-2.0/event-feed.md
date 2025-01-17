---
title: "Event feed"
description: ""
metadataTitle: ""
---

Event feed allows you to visually track [Events](events) generated by Adapty and check the status of their export to 3rd-party integrations, including the webhook. Please note that [transactions generated with server-side API](server-side-api-specs#transaction) do not appear in the **Event Feed**.


<img
  src={require('./img/a117f65-event_feed.png').default}
  style={{
    border: '1px solid #727272', /* border width and color */
    width: '700px', /* image width */
    display: 'block', /* for alignment */
    margin: '0 auto' /* center alignment */
  }}
/>





:::note
AppsFlyer, Facebook Ads, and Branch sending status could be inaccurate because they do not always return errors when they occur.
:::

To view the profile of the user who has initiated the transaction, click the **View Profile** button in the event details.