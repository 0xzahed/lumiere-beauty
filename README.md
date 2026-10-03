# LUMIÈRE — Premium Skincare & Beauty E-commerce

Premium D2C skincare boutique built with Next.js 14 (App Router), TypeScript, Tailwind, Lucide icons.

## Run

```bash
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

## Routes

- `/` — Homepage (hero, categories, best sellers, concerns, routine builder, ingredients, featured, reviews, gallery, journal, bundle)
- `/shop` — Filters (category/brand/price/concern), sort, responsive 2/3/4 grid
- `/products/[slug]` — Gallery, rating, benefits, tabs, sticky mobile add-to-bag, related
- `/cart` — Qty, coupon (try `GLOW10`, `FLAT200`), summary
- `/checkout` — Info, address, Inside/Outside Dhaka, COD/bKash/Nagad/Card
- `/blog`, `/blog/[slug]` — Beauty journal
- `/login`, `/register`, `/forgot-password`
- `/account` — Overview, orders, orders/[id] (timeline), wishlist, reviews, skin-profile, routine, addresses, coupons, notifications, settings
- `/admin` — Dashboard (revenue/orders charts CSS-only), products (+ new), inventory, orders (search + advance status), customers/[id], reviews (approve/reject/feature), coupons (create/toggle), routine engine, journal, content, analytics, marketing, settings

## Design

- Cocoa `#352824`, Ivory `#FFFDF8`, Blush `#F4E4E3`, Nude `#E8D5CB`, Sage `#DDE5DA`, Gold `#C7A77B`
- Cormorant Garamond (serif) + Jost (sans)
- 32 products, 15 customers, 23 orders, 35 reviews, 8 articles, BDT pricing

## State

Client store (`lib/store.tsx`) with localStorage: cart, wishlist, toasts, search, quick-view, cart drawer. All interactions work without backend.
