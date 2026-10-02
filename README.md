# LAPTOP MASTER - V2.8.4 (Hours, email, domain, more areas)

Static website for LAPTOP MASTER, Sholinganallur, Chennai. Hosted on GitHub + Cloudflare Pages.

## What V2.5.1 fixed
- script.js: removed pasted code-fence text that made the whole script fail (mobile menu, scrolling).
- index.html: removed stray code-fence text at the end of the page.
- _headers: rewritten in valid Cloudflare format (comments use #).
- Images: 73 MB -> under 1 MB. Only images used by the site are included. Real WebP files.
- Gallery: duplicate hero photo replaced with real storefront and signboard photos.
- Social share image (images/og-image.jpg) added for WhatsApp/Facebook previews.
- Review card template added (commented out in index.html) - fill with REAL reviews only.

## Editing rules
Never paste chat code blocks into files. Download the files instead.
Keep original large photos on your own computer, not in this repo.

## V2.5.2 updates
- Removed "No Fix - No Charge*"; now states Free Diagnosis + Free Estimate.
- Pickup & delivery wording: free within 10-15 km of Sholinganallur (site, FAQ and schema).
- Added "Is diagnosis free?" FAQ.
- "View Google Reviews" button now opens the Google business listing.
- Alternate personal number intentionally NOT published.

## V2.5.3 updates
- Reviews buttons now use the real Google Maps listing link.
- Added hasMap and sameAs (Google listing) to LocalBusiness schema.

## V2.6 updates
- Added 3 real Google review cards (text copied exactly from the Google listing, no dates or invented ratings).
- Added "Write a Review" button linking to the Google review page.

## V2.7 updates
- New service pages (each with own title, description, canonical, FAQ and structured data):
  - /laptop-repair-sholinganallur/
  - /laptop-motherboard-chip-level-repair/
  - /laptop-not-turning-on-no-display-repair/
  - /laptop-pickup-delivery-omr/
- Homepage: shorter title, new meta description, removed unused keywords tag, links to the new pages.
- sitemap.xml now lists all 5 pages.
- Not yet added: geo coordinates (need exact shop location from Google Maps).

## V2.8 updates
- Sub-page alignment fixed (text, steps and FAQ now share the same left edge).
- Original brand illustrations (images/illus-*.svg) replace the photo heroes: no copyright issues.
- Real shop/workbench photos kept only in the homepage Gallery.
- Branded social-share card (images/og-image.jpg).
- Map coordinates added to business data (from Plus Code V6QH+3X).
- _headers: temporary *.pages.dev addresses are blocked from Google (noindex).

## Before going live (after buying the domain)
1. Connect the domain in Cloudflare Pages > Custom domains.
2. Domain is laptopmasterchennai.com (already replaced everywhere in the files).
3. Add the website to Google Business Profile.
4. Add the site in Google Search Console and submit sitemap.xml.

## V2.8.1 updates
- Real photos and your own LAPTOP MASTER logo and designed banner now used across the site.
- Illustrations removed. Homepage gallery = 6 real workbench photos.
- Header shows the logo image. New share card built from real photo + logo.

## V2.8.2 updates
- Header logo size is now fixed inside the HTML, so it stays small even if the browser has an old style.css cached.
- style.css and script.js links carry a version (?v=2.8.2) and _headers no longer caches them for a day.

## V2.8.3 updates
- Homepage Service Areas: natural local wording ("laptop service center in Sholinganallur on OMR"), plus an area note with a WhatsApp "check my area" button and a link to the pickup page.
- New FAQ (page + FAQ schema): service near Perungudi, Thoraipakkam, Karapakkam, Navalur, Siruseri, Medavakkam and ECR.
- LocalBusiness schema: areaServed now uses Place/City objects; telephone formatted as +91-6382022463.
- "Service Areas" link added to the footer of all service pages.
- sitemap.xml lastmod updated; CSS/JS cache version is now ?v=2.8.3.

## V2.8.4 updates
- Working hours: Monday-Saturday 9 AM-9 PM, Sunday 11 AM-6 PM (page text, FAQ, meta descriptions and schema).
- Contact section: email added (info@laptopmasterchennai.com - create it in Cloudflare Email Routing), "LM" box replaced by the LAPTOP MASTER logo.
- More service areas: ECR side added (Neelankarai, Injambakkam, Palavakkam, Akkarai, Uthandi, Muttukadu, Kanathur) on homepage, pickup page and schema.
- Domain changed everywhere to https://laptopmasterchennai.com (canonicals, Open Graph, schema, sitemap, robots).
- CRM link: prepared as a commented-out "Staff login" link in the footer (not published). Protect the CRM with Cloudflare Access before enabling.
- CSS/JS cache version ?v=2.8.4.
