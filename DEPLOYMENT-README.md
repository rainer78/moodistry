# Moodistry site package

## Preview
Open `index.html` locally. The site includes all of the original uploaded Connection and Focus product pages, homepage, gift-set page, additional digital product pages, listening library, personal-library placeholder, membership page and premium sleep gift page.

## Payment links
Connection Oil: https://www.paypal.com/ncp/payment/PLB-SMAAPFEH4CSH
Focus Oil: https://www.paypal.com/ncp/payment/PLB-KNH4XSM2ELEM
Six-Oil Gift Set: https://www.paypal.com/ncp/payment/PLB-M2TVFY8YM5QH
Connection Digital: https://www.paypal.com/ncp/payment/PLB-24EW3GXM9UH5
Focus Digital: https://www.paypal.com/ncp/payment/PLB-F4W8YL8BZX66
Premium Sleep Experience Gift Set: https://www.paypal.com/ncp/payment/PLB-ZHWYC4TGFUXM

## NOT YET ACTIVE
- Paid audio content does not exist in this package. The visible track lists are previews with disabled playback, not fictitious samples.
- `/my-moodistry` is a placeholder, not an authenticated or entitled customer dashboard.
- `/membership` is informational; no PayPal subscription plan has been connected.
- Purchase links are live and currently may accept payment. Do not publish digital purchase calls to action until fulfillment and content readiness are confirmed.
- Verify PayPal shipping rates in checkout; account tool does not return shipping costs.

## Required secure implementation
Deploy a backend with user authentication, durable database, PayPal webhook signature verification, validated order-to-entitlement mapping, server-authorized signed audio URLs, subscription renewal/cancellation state handling, email verification and access delivery. Never unlock content solely from return URLs or query strings. Store PayPal credentials only server-side.

## Inventory
Estimated: 300 each of Connection singles, Focus singles, six-oil gift sets; premium masks approximately 50. Inventory must be enforced server-side when live.
