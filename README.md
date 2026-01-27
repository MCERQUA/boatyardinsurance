# Surron Insurance Website

A professional Next.js website for Surron electric bike insurance by Contractor's Choice Agency.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Forms:** Netlify Forms integration
- **Blog:** MDX-based content system

## Features

- Professional insurance-focused design
- SEO optimized with meta tags, JSON-LD structured data, sitemap, and robots.txt
- Lead generation forms with Netlify Forms backend
- Responsive design for all devices
- MDX-based blog system for SEO content
- Comprehensive quote request form with all insurance-relevant fields

## Pages

- **Home** (`/`) - Hero, features, testimonials, CTAs
- **About** (`/about`) - Company info, why choose us
- **Coverage** (`/coverage`) - Insurance coverage types explained
- **Quote** (`/quote`) - Comprehensive lead capture form
- **Blog** (`/blog`) - MDX blog with categories
- **Contact** (`/contact`) - Contact form and info
- **Privacy Policy** (`/privacy`)
- **Terms of Service** (`/terms`)

## Contact Information

- **Company:** Contractor's Choice Agency
- **Founder:** Josh Cotner
- **Phone:** 844-967-5247
- **Email:** josh@contractorschoiceagency.com
- **Coverage:** Nationwide - Licensed in 50 States

### Office Locations

**Primary Office:**
12220 E Riggs Rd
Chandler, AZ 85249

**Secondary Office:**
4435 E Chandler BLVD Suite 200
Phoenix, AZ 85048

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment (Netlify)

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next` (or use `output: 'export'` in next.config.ts for static export)
4. Forms are automatically detected by Netlify

### Form Configuration

The site uses Netlify Forms with two forms:
- `surron-quote-request` - Comprehensive quote request form
- `surron-contact` - General contact form

Forms are detected via the `NetlifyFormDetection` component in the layout.

## Blog Content

Blog posts are stored in `/content/blog/` as MDX files with frontmatter:

```mdx
---
title: "Post Title"
description: "Post description for SEO"
date: "2024-01-15"
author: "Author Name"
category: "Category Name"
---

Post content here...
```

## Project Structure

```
surroninsurance/
├── content/
│   └── blog/              # MDX blog posts
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/
│   │   ├── blog/          # Blog components
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Header, Footer
│   │   └── ui/            # shadcn/ui components
│   └── lib/
│       ├── blog.ts        # Blog utilities
│       ├── site-config.ts # Site configuration
│       └── utils.ts       # Utility functions
└── public/                # Static assets
```

## Color Palette

Professional insurance colors:
- **Primary:** Deep blue (#1e3a5f)
- **Accent:** Emerald green (#16a34a)
- **Background:** White/Slate
- **Text:** Dark slate

No pink, purple, or childish elements per design requirements.

## License

Proprietary - Contractor's Choice Agency
