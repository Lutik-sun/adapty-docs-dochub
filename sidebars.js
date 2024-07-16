/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manually defined sidebar
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'what-is-adapty',
      label: 'What is Adapty?',
    },
    {
      type: 'doc',
      id: 'quickstart',
      label: 'Quickstart guide',
    },
    {
      type: 'category',
      label: 'Migrate to Adapty',
      link: {
        type: 'doc',
        id: 'migrate-to-adapty-from-another-solutions',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'observer-vs-full-mode',
          label: 'Observer mode',
        },
        {
          type: 'doc',
          id: 'migration-from-revenuecat',
          label: 'Migration from RevenueCat',
        },
        {
          type: 'doc',
          id: 'importing-historical-data-to-adapty',
          label: 'Importing historical data to Adapty',
        },
      ],
    },
    {
      type: 'category',
      label: 'Getting started',
      link: {
        type: 'doc',
        id: 'getting-started',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Initial integration with the App Store',
          link: {
            type: 'doc',
            id: 'initial_ios',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'generate-in-app-purchase-key',
              label: 'Generate In-App Purchase Key in App Store Connect',
            },
            {
              type: 'doc',
              id: 'app-store-connection-configuration',
              label: 'Configure App Store integration',
            },
            {
              type: 'doc',
              id: 'enable-app-store-server-notifications',
              label: 'Enable App Store server notifications',
            },
          ],
        },
        {
          type: 'category',
          label: 'Initial integration with Google Play',
          link: {
            type: 'doc',
            id: 'initial-android',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'enabling-of-devepoler-api',
              label: 'Enable Developer APIs in Google Play Console',
            },
            {
              type: 'doc',
              id: 'create-service-account',
              label: 'Create service account in the Google Cloud Console',
            },
            {
              type: 'doc',
              id: 'grant-permissions-to-service-account',
              label: 'Grant permissions to service account in the Google Play Console',
            },
            {
              type: 'doc',
              id: 'create-service-account-key-file',
              label: 'Generate service account key file in the Google Play Console',
            },
            {
              type: 'doc',
              id: 'google-play-store-connection-configuration',
              label: 'Configure Google Play Store integration',
            },
            {
              type: 'doc',
              id: 'enable-real-time-developer-notifications-rtdn',
              label: 'Enable Real-time developer notifications (RTDN) in Google Play Console',
            },
          ],
        },
        {
          type: 'category',
          label: 'Installation of Adapty SDKs',
          link: {
            type: 'doc',
            id: 'installation-of-adapty-sdks',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'sdk-installation-ios',
              label: 'iOS - Adapty SDK installation & configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-android',
              label: 'Android - Adapty SDK Installation and configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-flutter',
              label: 'Flutter - Adapty SDK Installation and configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-reactnative',
              label: 'React Native - Adapty SDK installation & configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-unity',
              label: 'Unity - Adapty SDK installation & configuration',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Paywalls and products',
      link: {
        type: 'doc',
        id: 'paywalls-and-products',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Products',
          link: {
            type: 'doc',
            id: 'product',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'create-product',
              label: 'Create product',
            },
            {
              type: 'doc',
              id: 'edit-product',
              label: 'Edit product',
            },
            {
              type: 'doc',
              id: 'delete-product',
              label: 'Delete product',
            },
            {
              type: 'doc',
              id: 'add-product-to-paywall',
              label: 'Add product to paywall',
            },
          ],
        },
        {
          type: 'category',
          label: 'Offers',
          link: {
            type: 'doc',
            id: 'offers',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'create-offer',
              label: 'Create offer',
            },
            {
              type: 'doc',
              id: 'add-offer-to-paywall',
              label: 'Add offer to paywall',
            },
          ],
        },
        {
          type: 'category',
          label: 'Paywalls',
          link: {
            type: 'doc',
            id: 'paywalls',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'create-paywall',
              label: 'Create paywall',
            },
            {
              type: 'category',
              label: 'Design paywalls with legacy Paywall Builder',
              link: {
                type: 'doc',
                id: 'adapty-paywall-builder-legacy',
              },
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'paywall-builder-templates',
                  label: 'Paywall builder templates',
                },
                {
                  type: 'doc',
                  id: 'paywall-layout-and-products',
                  label: 'Paywall layout and products',
                },
                {
                  type: 'doc',
                  id: 'paywall-builder-tag-variables',
                  label: 'Tag variables for product info in Paywall builder',
                },
                {
                  type: 'doc',
                  id: 'paywall-texts-and-buttons',
                  label: 'Paywall texts and buttons',
                },
                {
                  type: 'doc',
                  id: 'using-custom-fonts-in-paywall-builder',
                  label: 'Custom fonts in paywall builder',
                },
                {
                  type: 'doc',
                  id: 'custom-tags-in-paywall-builder',
                  label: 'Custom tags in paywall builder',
                },
              ],
            },
            {
              type: 'doc',
              id: 'customize-paywall-with-remote-config',
              label: 'Design paywall with remote config',
            },
            {
              type: 'category',
              label: 'Paywall localization',
              link: {
                type: 'doc',
                id: 'paywall-localization',
              },
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'add-paywall-locale-in-adapty-paywall-builder',
                  label: 'Add paywall locale in Adapty Paywall Builder',
                },
                {
                  type: 'doc',
                  id: 'add-remote-config-locale',
                  label: 'Add paywall locale in remote config',
                },
              ],
            },
            {
              type: 'doc',
              id: 'fallback-paywalls',
              label: 'Fallback paywalls',
            },
            {
              type: 'doc',
              id: 'paywall-metrics',
              label: 'Paywall metrics',
            },
            {
              type: 'doc',
              id: 'duplicate-paywalls',
              label: 'Duplicate paywall',
            },
            {
              type: 'doc',
              id: 'local-fallback-paywalls',
              label: 'Download fallback paywalls',
            },
            {
              type: 'doc',
              id: 'archive-paywalls',
              label: 'Archive paywall',
            },
            {
              type: 'doc',
              id: 'restore-paywall',
              label: 'Return paywall from archive',
            },
          ],
        },
        {
          type: 'category',
          label: 'Placements',
          link: {
            type: 'doc',
            id: 'placements',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'choose-meaningful-placements',
              label: 'Choose meaningful placements',
            },
            {
              type: 'doc',
              id: 'create-placement',
              label: 'Create placement',
            },
            {
              type: 'doc',
              id: 'edit-placement',
              label: 'Edit placement',
            },
            {
              type: 'doc',
              id: 'delete-placement',
              label: 'Delete placement',
            },
            {
          type: 'category',
          label: 'Audiences',
          link: {
            type: 'doc',
            id: 'audience',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'add-audience-paywall-ab-test',
              label: 'Add audience and paywall or A/B test to placement',
            },
            {
              type: 'doc',
              id: 'change-audience-priority',
              label: 'Change audience priority in placement',
            },
          ],
        },
            {
              type: 'doc',
              id: 'placement-metrics',
              label: 'Placement metrics',
            },
          ],
        },
        {
          type: 'category',
          label: 'Access levels',
          link: {
            type: 'doc',
            id: 'access-level',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'create-access-level',
              label: 'Create access level',
            },
            {
              type: 'doc',
              id: 'assigning-access-level-to-a-product',
              label: 'Assign access level to product',
            },
            {
              type: 'doc',
              id: 'give-access-level-to-specific-customer',
              label: 'Give access level to specific customer',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      link: {
        type: 'doc',
        id: 'SDK',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Installation of Adapty SDKs',
          link: {
            type: 'doc',
            id: 'installation-of-adapty-sdks',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'sdk-installation-ios',
              label: 'iOS - Adapty SDK installation & configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-android',
              label: 'Android - Adapty SDK Installation and configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-flutter',
              label: 'Flutter - Adapty SDK Installation and configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-reactnative',
              label: 'React Native - Adapty SDK installation & configuration',
            },
            {
              type: 'doc',
              id: 'sdk-installation-unity',
              label: 'Unity - Adapty SDK installation & configuration',
            },
          ],
        },
        {
          type: 'category',
          label: 'Display paywalls designed with Paywall Builder',
          link: {
            type: 'doc',
            id: 'display-pb-paywalls',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'get-pb-paywalls',
              label: 'Fetch Paywall Builder paywalls and their configuration',
            },
            {
          type: 'category',
          label: 'Present Paywall Builder paywalls',
          link: {
            type: 'doc',
            id: 'present-pb-paywalls',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'ios-present-paywalls',
              label: 'iOS - Present Paywall Builder paywalls',
            },
            {
              type: 'doc',
              id: 'android-present-paywalls',
              label: 'Android - Present Paywall Builder paywalls',
            },
            {
              type: 'doc',
              id: 'flutter-present-paywalls',
              label: 'Flutter - Present Paywall Builder paywalls',
            },
            {
              type: 'doc',
              id: 'react-native-present-paywalls',
              label: 'React Native - Present Paywall Builder paywalls',
            },
            {
              type: 'doc',
              id: 'unity-present-paywalls',
              label: 'Unity - Present Paywall Builder paywalls',
            },
          ],
        },
            {
              type: 'doc',
              id: 'hide-paywall-builder-paywalls',
              label: 'Hide Paywall Builder paywalls (on cross-platform SDKs)',
            },
            {
          type: 'category',
          label: 'Handle paywall events',
          link: {
            type: 'doc',
            id: 'handling-pb-paywall-events',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'ios-handling-events',
              label: 'iOS - Handle paywall events',
            },
            {
              type: 'doc',
              id: 'android-handling-events',
              label: 'Android - Handle paywall events',
            },
            {
              type: 'doc',
              id: 'flutter-handling-events',
              label: 'Flutter - Handle paywall events',
            },
            {
              type: 'doc',
              id: 'react-native-handling-events-1',
              label: 'React Native - Handle paywall events',
            },
            {
              type: 'doc',
              id: 'unity-handling-events',
              label: 'Unity - Handle paywall events',
            },
          ],
        },
          ],
        },
        {
          type: 'category',
          label: 'Display paywalls designed with remote config',
          link: {
            type: 'doc',
            id: 'display-remote-config-paywalls',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'fetch-paywalls-and-products',
              label: 'Fetch paywalls and products for remote config paywalls',
            },
            {
              type: 'doc',
              id: 'present-remote-config-paywalls',
              label: 'Render paywall designed by remote config',
            },
            {
              type: 'doc',
              id: 'making-purchases',
              label: 'Make purchases in mobile app',
            },
            {
              type: 'doc',
              id: 'restore-purchase',
              label: 'Restore purchases in mobile app',
            },
          ],
        },
        {
              type: 'doc',
              id: 'subscription-status',
              label: 'Check subscription status',
            },
            {
              type: 'doc',
              id: 'identifying-users',
              label: 'Identify users',
            },
            {
              type: 'doc',
              id: 'setting-user-attributes',
              label: 'Set user attributes',
            },
            {
              type: 'doc',
              id: 'onboarding-screens-tracking',
              label: 'Track onboarding screens',
            },
            {
          type: 'category',
          label: 'Use fallback paywalls',
          link: {
            type: 'doc',
            id: 'use-fallback-paywalls',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'ios-use-fallback-paywalls',
              label: 'iOS - Use fallback paywalls',
            },
            {
              type: 'doc',
              id: 'android-use-fallback-paywalls',
              label: 'Android - Use fallback paywalls',
            },
            {
              type: 'doc',
              id: 'flutter-use-fallback-paywalls',
              label: 'Flutter - Use fallback paywalls',
            },
            {
              type: 'doc',
              id: 'react-native-use-fallback-paywalls',
              label: 'React Native - Use fallback paywalls',
            },
            {
              type: 'doc',
              id: 'unity-use-fallback-paywalls',
              label: 'Unity - Use fallback paywalls',
            },
          ],
        },
        {
              type: 'doc',
              id: 'localizations-and-locale-codes',
              label: 'Use localizations and locale codes',
            },
            {
          type: 'category',
          label: 'API reference',
          link: {
            type: 'doc',
            id: 'api-reference',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
            type: 'link',
            label: 'iOS SDK - Public API', // The link label
            href: 'https://swift.adapty.io/documentation/adapty/', // The external URL
            },
            {
            type: 'link',
            label: 'Android SDK - Public API', // The link label
            href: 'https://kotlin.adapty.io/', // The external URL
            },
            {
            type: 'link',
            label: 'Flutter SDK - Public API', // The link label
            href: 'https://pub.dev/documentation/adapty_flutter/latest/adapty_flutter/adapty_flutter-library.html', // The external URL
            },
            {
            type: 'link',
            label: 'React Native SDK - Public API', // The link label
            href: 'https://react-native.adapty.io/classes/adapty', // The external URL
            },
            {
              type: 'doc',
              id: 'sdk-models',
              label: 'SDK Models',
            },
          ],
        },
      ],
    },
    {
          type: 'category',
          label: 'Test and release',
          link: {
            type: 'doc',
            id: 'test-and-release',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
          type: 'category',
          label: 'Handle errors',
          link: {
            type: 'doc',
            id: 'error-handling',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'ios-sdk-error-handling',
              label: 'iOS - Handle errors',
            },
            {
              type: 'doc',
              id: 'android-sdk-error-handling',
              label: 'Android - Handle errors',
            },
            {
              type: 'doc',
              id: 'error-handling-on-flutter-react-native-unity',
              label: 'Flutter, React Native, Unity - Handle errors',
            },
          ],
            },
            {
          type: 'category',
          label: 'Test purchases',
          link: {
            type: 'doc',
            id: 'testing-purchases',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
          type: 'category',
          label: 'Test in-app purchases in Apple App Store',
          link: {
            type: 'doc',
            id: 'testing-purchases-ios',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'test-purchases-in-sandbox',
              label: 'Test in-app purchases in App Store Sandbox',
            },
            {
              type: 'doc',
              id: 'test-purchases-with-testflight',
              label: 'Test in-app purchases with TestFlight',
            },
          ],
        },
            {
              type: 'doc',
              id: 'testing-on-android',
              label: 'Test in-app purchases in Google Play Store',
            },
            {
              type: 'doc',
              id: 'validate-test-purchases',
              label: 'Validate test purchases',
            },
            {
              type: 'doc',
              id: 'troubleshooting-test-purchases',
              label: 'Troubleshooting test purchases',
            },
          ],
        },
          ],
        },
    {
      type: 'category',
      label: 'Analytics',
      link: {
        type: 'doc',
        id: 'how-adapty-analytics-works',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'overview',
          label: 'Analytics overview',
        },
        {
          type: 'doc',
          id: 'controls-filters-grouping-compare-proceeds',
          label: 'Analytics controls',
        },
        {
          type: 'category',
          label: 'Analytics charts',
          link: {
            type: 'doc',
            id: 'charts',
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'revenue',
              label: 'Revenue',
            },
            {
              type: 'doc',
              id: 'mrr',
              label: 'MRR',
            },
            {
              type: 'doc',
              id: 'arr',
              label: 'ARR',
            },
            {
              type: 'doc',
              id: 'arpu',
              label: 'ARPU',
            },
            {
              type: 'doc',
              id: 'arppu',
              label: 'ARPPU',
            },
            {
              type: 'doc',
              id: 'installs',
              label: 'Installs',
            },
            {
              type: 'doc',
              id: 'active-subscriptions',
              label: 'Active subscriptions',
            },
            {
              type: 'doc',
              id: 'reactivated-subscriptions',
              label: 'New subscriptions',
            },
            {
              type: 'doc',
              id: 'non-subscriptions',
              label: 'Non-subscriptions',
            },
            {
              type: 'doc',
              id: 'cancelled-subscriptions',
              label: 'Subscriptions renewal cancelled',
            },
            {
              type: 'doc',
              id: 'churned-expired-subscriptions',
              label: 'Churned (expired) subscriptions',
            },
            {
              type: 'doc',
              id: 'active-trials',
              label: 'Active trials',
            },
            {
              type: 'doc',
              id: 'new-trials',
              label: 'New trials',
            },
            {
              type: 'doc',
              id: 'trials-renewal-cancelled',
              label: 'Trials renewal cancelled',
            },
            {
              type: 'doc',
              id: 'expired-churned-trials',
              label: 'Expired (churned) trials',
            },
            {
              type: 'doc',
              id: 'refund-events',
              label: 'Refund events',
            },
            {
              type: 'doc',
              id: 'refund-money',
              label: 'Refund money',
            },
            {
              type: 'doc',
              id: 'grace-period',
              label: 'Grace period',
            },
            {
              type: 'doc',
              id: 'billing-issue',
              label: 'Billing issue',
            },
          ],
        },
        {
        type: 'doc',
        id: 'ltv',
        label: 'Lifetime Value (LTV)',
        },
        {
        type: 'doc',
        id: 'analytics-cohorts',
        label: 'Cohort analysis',
        },
        {
        type: 'doc',
        id: 'analytics-funnels',
        label: 'Funnel analysis',
        },
        {
        type: 'doc',
        id: 'analytics-retention',
        label: 'Retention analysis',
        },
        {
        type: 'doc',
        id: 'analytics-conversion',
        label: 'Conversion analysis',
        },
        {
        type: 'doc',
        id: 'reports',
        label: 'Reports',
        },
      ],
    },
  ],
};

export default sidebars;
