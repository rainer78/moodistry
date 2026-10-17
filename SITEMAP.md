# Moodistry Website Sitemap

Current website inventory: 14 HTML pages.

```text
Moodistry (/)
├── Shop (/shop/)
│   ├── Connection Oil (/connection/)
│   ├── Focus Oil (/focus/)
│   ├── Six-Oil Gift Set (/gift-set/)
│   └── Sleep Experience Gift Set (/sleep-experience/)
├── Experiences (navigation group)
│   ├── Connection Digital Collection (/digital/connection/)
│   ├── Focus Digital Collection (/digital/focus/)
│   └── Explore Listening (/listen/)
│       ├── Connection Listening (/listen/connection/)
│       ├── Focus Listening (/listen/focus/)
│       └── Sleep Listening (/listen/sleep/)
├── Moody Stream Membership (/membership/)
└── My Moodistry (/my-moodistry/)
```

## Page directory

| Page | Path | Purpose |
|---|---|---|
| Homepage | `/` | Brand, six-oil collection, featured offers |
| Shop | `/shop/` | All physical products, gifts, and digital collections |
| Connection Oil | `/connection/` | Physical oil + five guided date-night meditations |
| Focus Oil | `/focus/` | Physical oil + five focus soundscapes |
| Six-Oil Gift Set | `/gift-set/` | Six oils + five original Sleep Stories |
| Sleep Experience Gift Set | `/sleep-experience/` | Six oils, Bluetooth mask, five Sleep Stories, three-month membership |
| Connection Digital Collection | `/digital/connection/` | Five guided date-night meditations |
| Focus Digital Collection | `/digital/focus/` | Five Focus soundscapes |
| Explore Listening | `/listen/` | Overview of digital experiences |
| Connection Listening | `/listen/connection/` | Meditation player / planned audio |
| Focus Listening | `/listen/focus/` | Soundscape player / planned audio |
| Sleep Listening | `/listen/sleep/` | Sleep Stories player / planned audio |
| Moody Stream | `/membership/` | Monthly membership offering |
| My Moodistry | `/my-moodistry/` | Personal collection library (requires backend) |

## Primary customer journeys

- **Physical:** Homepage → product page → PayPal checkout → fulfillment → purchased audio (once implemented).
- **Digital:** Homepage → digital collection page → PayPal checkout → verified access → listening collection (once implemented).
- **Membership:** Homepage → membership → recurring subscription → My Moodistry → listening library (once implemented).

## Implementation notes (internal)

- Shop and Experiences are navigation categories, not additional HTML pages.
- The `/shop/` route was proposed but has **not** been built.
- Payment-link pages are externally hosted on PayPal.
- Actual audio, secure entitlements, account login and subscription activation require implementation.
- `sitemap.xml.template` is a deployment template, not a live XML sitemap: replace `https://YOUR-DOMAIN.example` with the actual domain before publishing it as `sitemap.xml`.
