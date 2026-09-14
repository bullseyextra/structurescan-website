# Structure Scan Inc. website

A production rebuild of [structurescan.ca](https://www.structurescan.ca) for the owners to review **before** it replaces the live WordPress site.

This is not a theme clone. Layout, typography, information architecture, and UX are new. Company facts, services, people, equipment, certifications, and contact details are taken from the live site and rewritten for clarity (including typo fixes). Hours, pricing, response times, and reviews are not published because they are not published on the current site.

## Local preview

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## What’s included

- Next.js App Router, TypeScript, Tailwind CSS
- Pages: home, services (all five), about, team, certifications, contact, privacy
- Permanent redirects from old WordPress URLs (see `next.config.ts`)
- SVG logo recreated from the oval radar mark (not a pixelated download)
- Unique titles, Open Graph image, JSON-LD `LocalBusiness`, `sitemap.xml`, `robots.txt`
- Accessible contact form (opens email to `info@structurescan.ca`) plus optional links to the existing Jotform estimate / schedule / consultation forms
- Sticky click-to-call bar on small screens

## Deploy

The site is static-friendly (no WordPress, no CMS). Host on Vercel, Netlify, or any Node host that can run `next start`, or export behind your existing `www.structurescan.ca` domain when you are ready to cut over.

Point DNS at the new host only after this rebuild has been reviewed.
