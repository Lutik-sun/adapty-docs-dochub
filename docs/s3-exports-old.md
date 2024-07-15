---
title: "Amazon S3"
description: ""
metadataTitle: ""
---

Adapty's integration with Amazon S3 allows you to store event and paywall visit data securely in one central location. You will be able to save your [subscription events](events) to your Amazon S3 bucket as .csv files.  
To set up this integration, you will need to follow a few simple steps in the AWS Console and Adapty dashboard.

:::note
Schedule

Adapty sends your data every **24h** at 4:00 UTC.

Each file will contain data for the events created for the entire previous calendar day in UTC. For example, the data exported automatically at 4:00 UTC on March 8th will contain all the events created on March 7th from 00:00:00 to 23:59:59 in UTC.
:::

## How to set up Amazon S3 integration integration

To start receiving data, you'll need the following credentials:

1. Access key ID
2. Secret access key
3. S3 bucket name
4. Folder name inside the S3 bucket

:::note
Nested directories

You can specify nested directories in the Amazon S3 bucket name field, e.g. adapty-events/com.sample-app
:::

To integrate Amazon S3 go to [**Integrations** -> **Amazon S3**](https://app.adapty.io/integrations/s3), turn on a toggle from off to on, and fill out fields.

First of all set credentials to build a connection between Amazon S3 and Adapty profiles. 


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/2b1a6e3-CleanShot_2023-03-24_at_14.51.272x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





In the Adapty Dashboard, the following fields are needed to set up the connection:

| Field                        | Description                                                                                                                                                                                                                                                  |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Access Key ID**            | A unique identifier that is used to authenticate a user or application's access to an AWS service.  Find this ID in the downloaded [csv file](https://docs.adapty.io/docs/s3-exports#how-to-create-amazon-s3-credentials) .                                  |
| **Secret Access Key**        | A private key that is used in conjunction with the Access Key ID to authenticate a user or application's access to an AWS service. Find this Key in the downloaded  [csv file](https://docs.adapty.io/docs/s3-exports#how-to-create-amazon-s3-credentials) . |
| **S3 Bucket Name **          | A globally unique name that identifies a specific S3 bucket within the AWS cloud. S3 buckets are a simple storage service that allows users to store and retrieve data objects, such as files and images, in the cloud.                                      |
| **Folder Inside the Bucker** | The  name of the folder that you want to have inside the selected S3 bucket. Please note that S3 simulates folders using object key prefixes, which are essentially folder names.                                                                            |

## How to create Amazon S3 credentials

This guide will help you create the necessary credentials in your AWS Console.

### 1\. Create Access Policy

First, navigate to the [IAM Policy Dashboard](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/policies) in your AWS Console and select the option to **Create Policy**.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/7af075c-CleanShot_2023-03-21_at_10.52.002x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





In the Policy editor, paste the following JSON and change `adapty-s3-integration-test` to your bucket name: 

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowListObjectsInBucket",
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::adapty-s3-integration-test"
        },
        {
            "Sid": "AllowAllObjectActions",
            "Effect": "Allow",
            "Action": "s3:*Object",
            "Resource": [
                "arn:aws:s3:::adapty-s3-integration-test/*",
                "arn:aws:s3:::adapty-s3-integration-test"
            ]
        },
        {
            "Sid": "AllowBucketLocation",
            "Effect": "Allow",
            "Action": "s3:GetBucketLocation",
            "Resource": "arn:aws:s3:::adapty-s3-integration-test"
        }
    ]
}
```


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/d4e474a-CleanShot_2023-03-21_at_10.56.212x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





After completing the policy configuration, you may choose to add tags (optional) and then click **Next** to proceed to the final step. In this step, you will name your policy and simply click on the **Create policy** button to finalize the creation process.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/7dcb02f-CleanShot_2023-03-21_at_11.03.372x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





### 2\. Create IAM user

To enable Adapty to upload raw data reports to your bucket, you will need to provide them with the Access Key ID and Secret Access Key for a user who has write access to the specific bucket. 

To proceed with that, navigate to the IAM Console and select the [Users section](https://console.aws.amazon.com/iamv2/home#/users). From there, click on the **Add users** button.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/bb612c8-CleanShot_2023-03-21_at_11.12.392x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





Give the user a name, choose **Access key – Programmatic access**, and proceed to permissions.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/467ee4d-j6aoX.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





For the next step, please select the **Add user to group** option and then click the **Create group** button.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/bfd0e80-CleanShot_2023-03-21_at_11.24.592x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





Next, you need to assign a name to your User Group and select the policy that was previously created by you. Once you have selected the policy, click on the **Create group** button to complete the process.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/df29c12-CleanShot_2023-03-21_at_11.28.052x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





After successfully creating the group, please **select it** and proceed to the next step.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/1f3722e-CleanShot_2023-03-21_at_11.36.192x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





Since this is the final step for this section, you may proceed by simply clicking on the **Create User** button.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/ea43722-CleanShot_2023-03-21_at_11.40.462x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





Lastly, you can either **download the credentials in .csv** format or alternatively, copy and paste the credentials directly from the dashboard.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/bcf35e1-S3created.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>





## Manual data export

In addition to the automatic event data export to Amazon S3, Adapty also provides a manual file export functionality. With this feature, you can select a specific time interval for the event data and export it to your S3 bucket manually. This allows you to have greater control over the data you export and when you export it. 

Please note that the specified date range will be used to export the events created from Date A 00:00:00 UTC up to Date B 00:00:00 UTC. As a consequence, it currently isn't possible to export the data created during the current day.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/466bd29-CleanShot_2023-03-21_at_12.35.252x.png" 
    style={{ width: '600px', border: '1px solid grey' }}
  />
</div>





## Table structure

In AWS S3 integration, Adapty provides a table to store historical data for transaction events and paywall visits. The table contains information about the user profile, revenue and proceeds, and the origin store, among other data points. Essentially, these tables log all transactions generated by an app for a given time period.

:::warning
Note that this structure may grow over time — with new data being introduced by us or by the 3rd parties we work with. Make sure that your code that processes it is robust enough and relies on the specific fields, but not on the structure as a whole.
:::

Here is the table structure for the events:

| Column                          | Description                                                                                                                           |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| **profile_id**                  | Adapty user ID.                                                                                                                       |
| **event_type**                  | Lower cased event name. Refer to the [Events](events) section to learn event types.                                               |
| **event_datetime**              | ISO 8601 date.                                                                                                                        |
| **transaction_id**              | A unique identifier for a transaction such as a purchase or renewal.                                                                  |
| **original_transaction_id**     | The transaction identifier of the original purchase.                                                                                  |
| **subscription_expires_at**     | The Expiration date of subscription. Usually in the future.                                                                           |
| **environment**                 | Could be Sandbox or Production.                                                                                                       |
| **revenue_usd**                 | Revenue in USD. Can be empty.                                                                                                         |
| **proceeds_usd**                | Proceeds in USD. Can be empty.                                                                                                        |
| **net_revenue_usd**             | Net revenue (income after taxes) in USD. Can be empty.                                                                                |
| **tax_amount_usd**              | Amount of money deducted for taxes in USD. Can be empty.                                                                              |
| **revenue_local**               | Revenue in local currency. Can be empty.                                                                                              |
| **proceeds_local**              | Proceeds in local currency. Can be empty.                                                                                             |
| **net_revenue_local**           | Net revenue (income after taxes) in local currency. Can be empty.                                                                     |
| **tax_amount_local**            | Amount of money deducted for taxes in local currency. Can be empty.                                                                   |
| **customer_user_id**            | Developer user ID. For example, it can be your user UUID, email, or any other ID. Null if you didn't set it.                          |
| **store**                       | Could be _app_store_ or _play_store_.                                                                                                 |
| **product_id**                  | Product id in Apple/Google store.                                                                                                     |
| **developer_id**                | Developer (SDK) ID of the paywall where the transaction originated.                                                                   |
| **ab_test_name**                | Name of the A/B test where the transaction originated.                                                                                |
| **ab_test_revision**            | Revision of the A/B test where the transaction originated.                                                                            |
| **paywall_name**                | Name of the paywall where the transaction originated.                                                                                 |
| **paywall_revision**            | Revision of the paywall where the transaction originated.                                                                             |
| **profile_county**              | Profile Country determined by Adapty, based on IP.                                                                                    |
| **install_date**                | ISO 8601 date when the installation happened.                                                                                         |
| **idfv**                        | [identifierForVendor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) on iOS devices            |
| **idfa**                        | [advertisingIdentifier](https://developer.apple.com/documentation/adsupport/asidentifiermanager/advertisingidentifier) on iOS devices |
| **currency**                    | The 3-letter currency code (ISO-4217) of the transaction.                                                                             |
| **store_country**               | Profile Country determined by Apple/Google store.                                                                                     |
| **attribution_source**          | Attribution source.                                                                                                                   |
| **attribution_network_user_id** | ID assigned to the user by attribution source.                                                                                        |
| **attribution_status**          | Can be organic, non_organic or unknown                                                                                                |
| **attribution_channel**         | Marketing channel name.                                                                                                               |
| **attribution_campaign**        | Marketing campaign name.                                                                                                              |
| **attribution_ad_group**        | Attribution ad group.                                                                                                                 |
| **attribution_ad_set**          | Attribution ad set.                                                                                                                   |
| **attribution_creative**        | Attribution creative keyword.                                                                                                         |

Here is the table structure for the paywall visits:

| Column                | Description                                                                                                  |
| :-------------------- | :----------------------------------------------------------------------------------------------------------- |
| **profile_id**        | Adapty user ID.                                                                                              |
| **customer_user_id**  | Developer user ID. For example, it can be your user UUID, email, or any other ID. Null if you didn't set it. |
| **profile_country**   | Profile Country determined by Apple/Google store.                                                            |
| **install_date**      | ISO 8601 date when the installation happened.                                                                |
| **store**             | Could be _app_store_ or _play_store_.                                                                        |
| **paywall_showed_at** | The date when the paywall has been displayed to the customer.                                                |
| **developer_id**      | Developer (SDK) ID of the paywall where the transaction originated.                                          |
| **ab_test_name**      | Name of the A/B test where the transaction originated.                                                       |
| **ab_test_revision**  | Revision of the A/B test where the transaction originated.                                                   |
| **paywall_name**      | Name of the paywall where the transaction originated.                                                        |
| **paywall_revision**  | Revision of the paywall where the transaction originated.                                                    |

## Events and tags

Below the credentials, there are three groups of events you can export, send, and store in Amazon S3 from Adapty. Simply turn on the ones you need. Check the full list of the events offered by Adapty [here](https://docs.adapty.io/docs/events).


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.readme.io/fd5ccb9-CleanShot_2023-08-17_at_14.49.282x.png" 
    style={{ width: '700px', border: '1px solid grey' }}
  />
</div>

