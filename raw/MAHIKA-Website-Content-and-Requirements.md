# MAHIKA Brand Introduction Website

## Content, Business Data & Asset Requirements

**Document status:** Planning draft --- editable\
**Brand:** MAHIKA\
**Tagline:** Made with Love. Chosen with Trust.\
**Official domain:** https://www.mahika.world\
**Website type:** Single-page brand introduction website\
**Frontend direction:** React.js\
**Visual direction:** Minimal, clean, premium, elegant\
**Important:** This document is the source of truth for content
planning. Any field marked `[TO BE PROVIDED]`, `[TO BE CONFIRMED]`, or
`[OPTIONAL]` must remain a placeholder until the brand owner supplies or
approves the information. Do not invent business facts, claims, contact
details, legal details, or brand history.

------------------------------------------------------------------------

# 1. Project Purpose and Scope

MAHIKA needs an official, single-page brand introduction website. The
purpose is to introduce the brand, communicate its values and purpose,
present the types of products it offers, establish trust, and provide
official business and contact information.

This is **not currently an e-commerce website**. Do not build
shopping-cart, checkout, payment, customer-account, order-management,
product-purchase, or direct online-order functionality.

The homepage is a single scrolling page. Its sections should tell the
MAHIKA brand story in a clear, visually engaging sequence. The
experience should feel polished and premium without becoming visually
crowded.

## Confirmed decisions

-   Brand name: MAHIKA.
-   Tagline: "Made with Love. Chosen with Trust."
-   Domain: `www.mahika.world`.
-   Website format: one-page / single-page scrolling brand website.
-   Frontend: React.js.
-   Visual direction: minimal, clean, premium.
-   Logo strategy: use the supplied logo variations appropriately
    (combination strategy).
-   Use the supplied final logo and brand colour reference as
    authoritative brand assets.
-   The homepage must not contain a "Shop With MAHIKA" section for now.
-   Marketplace redirect routes must exist separately from the homepage:
    -   `/meesho`
    -   `/flipkart`
    -   `/amazon`
-   Marketplace destination URLs must be managed through runtime
    configuration so that changing a destination does not require
    rebuilding the React application.
-   Relevant brand, lifestyle, and section images will be supplied by
    the brand owner and/or provided in the project assets. Use those
    supplied assets as the primary visual references.
-   Do not begin implementation until the content and required assets
    have been reviewed and the project owner has approved the
    implementation brief.

## Explicitly out of scope for the current release

-   E-commerce catalogue with purchasable product detail pages.
-   Cart, checkout, payment gateway, COD workflow, customer
    login/account.
-   Order tracking and order management.
-   A homepage "Shop With MAHIKA" / marketplace promotion section.
-   A multi-page product catalogue.
-   Invented testimonials, ratings, awards, certifications, customer
    counts, delivery promises, return promises, or quality guarantees.

------------------------------------------------------------------------

# 2. Information and Assets Required Before Final Content

Use this checklist to collect the missing material. Keep unavailable
fields as clearly labelled placeholders.

## 2.1 Brand identity assets

  -----------------------------------------------------------------------
  Item                                Status / required input
  ----------------------------------- -----------------------------------
  Final primary horizontal logo       \[TO BE PROVIDED / CONFIRM FILE\]

  Circular logo / emblem              \[TO BE PROVIDED / CONFIRM FILE\]

  Logo with tagline                   \[TO BE PROVIDED / CONFIRM FILE\]

  Final brand colour reference image  \[TO BE PROVIDED / CONFIRM FILE\]

  Approved colour values (HEX/RGB),   \[TO BE CONFIRMED FROM REFERENCE /
  if available                        OWNER\]

  Approved fonts / typography         \[TO BE CONFIRMED\]
  preference                          

  Logo clear-space / minimum-size     \[OPTIONAL --- TO BE CONFIRMED\]
  guidance                            

  Favicon / browser icon asset        \[TO BE PROVIDED OR DERIVED FROM
                                      APPROVED MONOGRAM WITH APPROVAL\]
  -----------------------------------------------------------------------

**Brand asset rules** - Do not redraw, distort, recolour, stretch, crop,
or alter the original logo artwork. - Do not recreate the logo using
text or a substitute font. - Preserve the logo's original proportions,
typography, symbol, and colours. - Analyse the supplied colour reference
rather than guessing brand colours. - Any sampled colour values are
provisional until approved. - Do not introduce unrelated colours,
excessive dark tones, neon colours, or high-saturation accents. - Use
the supplied logo versions according to their intended aspect ratio and
context. Do not force every version into every placement.

## 2.2 Business identity and legal information

  -----------------------------------------------------------------------
  Field                               Required content
  ----------------------------------- -----------------------------------
  Legal / registered business name    \[TO BE PROVIDED\]

  Public-facing brand name            MAHIKA (confirmed)

  GSTIN                               \[TO BE PROVIDED --- verify
                                      carefully before publishing\]

  Business constitution               \[OPTIONAL --- TO BE CONFIRMED\]
  (proprietorship / partnership /     
  company / other)                    

  Registered business address         \[TO BE PROVIDED --- confirm
                                      whether public display is
                                      approved\]

  Operating / correspondence address  \[TO BE PROVIDED, if different\]

  State and PIN code                  \[TO BE PROVIDED\]

  Business hours                      \[TO BE PROVIDED / OPTIONAL\]

  CIN / other registration number, if \[OPTIONAL --- TO BE PROVIDED\]
  applicable                          
  -----------------------------------------------------------------------

Do not infer the legal business name from the brand name. Do not publish
a GSTIN or address until the owner has supplied and checked it. Confirm
whether the registered address may be displayed publicly.

## 2.3 Contact and customer support information

  -----------------------------------------------------------------------
  Field                               Required content
  ----------------------------------- -----------------------------------
  Primary contact phone               \[TO BE PROVIDED\]

  WhatsApp number / link              \[TO BE PROVIDED / OPTIONAL\]

  Customer support email              \[TO BE PROVIDED\]

  General business email              \[TO BE PROVIDED / OPTIONAL\]

  Contact person / department label   \[TO BE CONFIRMED\]

  Preferred contact method            \[TO BE CONFIRMED\]

  Support availability / business     \[TO BE PROVIDED / OPTIONAL\]
  hours                               

  Social media links (Instagram,      \[TO BE PROVIDED / OPTIONAL\]
  Facebook, YouTube, etc.)            
  -----------------------------------------------------------------------

Only display channels that are active and approved. Do not invent email
addresses, telephone numbers, social profiles, or contact links.

## 2.4 Brand story and messaging

The following content needs to be supplied or approved by the brand
owner:

-   Why was MAHIKA created? \[TO BE PROVIDED\]
-   What does the name MAHIKA represent? \[TO BE PROVIDED / OPTIONAL\]
-   What customer need or experience does the brand want to address?
    \[TO BE PROVIDED\]
-   What does "Made with Love. Chosen with Trust." mean to the brand?
    \[TO BE PROVIDED\]
-   What principles guide product selection? \[TO BE PROVIDED\]
-   What does the brand mean by quality and customer satisfaction? \[TO
    BE PROVIDED\]
-   What makes MAHIKA distinctive? \[TO BE PROVIDED --- avoid
    unsupported superiority claims\]
-   Brand mission statement: \[TO BE APPROVED\]
-   Brand vision statement: \[TO BE APPROVED\]
-   Brand values: \[TO BE APPROVED\]
-   Preferred writing tone: \[PROPOSED: warm, clear, thoughtful,
    confident, trustworthy --- TO BE APPROVED\]

Do not create a fictional founder story, origin story, manufacturing
claim, sourcing claim, or emotional anecdote.

------------------------------------------------------------------------

# 3. Single-Page Homepage Structure and Content Requirements

The order below is the proposed content flow. It can be adjusted after
owner review. Each section should have a clear purpose and should not
repeat the same message unnecessarily.

## Section 01 --- Hero / Welcome

**Purpose:** Create the first impression and immediately communicate the
MAHIKA identity.

**Content fields** - Primary logo: \[USE APPROVED SUPPLIED LOGO\] -
Brand name: MAHIKA - Tagline: "Made with Love. Chosen with Trust." -
Main headline: \[TO BE WRITTEN AND APPROVED\] - Supporting introduction:
\[TO BE WRITTEN AND APPROVED\] - Primary CTA label: \[PROPOSED:
"Discover MAHIKA" --- TO BE APPROVED\] - CTA destination: \[PROPOSED:
scroll to About section\] - Hero image / visual: \[SUPPLIED IMAGE
REQUIRED\] - Optional secondary CTA: \[OPTIONAL --- TO BE CONFIRMED\]

**Content guidance** - The headline should be concise and memorable. -
The supporting copy should introduce MAHIKA as a brand without making
unverified claims. - Avoid product prices, purchase prompts, or
marketplace-shopping promotion. - Keep the composition minimal and allow
the logo and brand message to breathe.

**Do not include** - "Shop Now" or "Buy Now" unless separately
approved. - Unverified claims such as "India's No. 1", "best quality",
"100% handmade", or "premium materials". - Marketplace badges or a "Shop
With MAHIKA" block.

## Section 02 --- About MAHIKA

**Purpose:** Explain who MAHIKA is and what the brand represents.

**Content fields** - Section heading: \[TO BE APPROVED\] - Short brand
introduction: \[TO BE PROVIDED\] - Brand story / background: \[TO BE
PROVIDED\] - What MAHIKA does: \[TO BE PROVIDED\] - Brand personality:
\[TO BE APPROVED\] - Supporting image(s): \[SUPPLIED BRAND / LIFESTYLE
IMAGE(S)\] - Optional short highlighted statement: \[TO BE APPROVED\]

**Content guidance** - Use authentic, plain-English language. - Explain
the brand's identity and customer focus. - Keep the story factual and
aligned with the owner's actual business. - If the brand story is not
yet available, retain a placeholder rather than inventing one.

**Do not include** - Made-up founding dates, founder names, locations,
history, or business milestones. - Unsupported claims about
manufacturing, sourcing, sustainability, or social impact.

## Section 03 --- Our Vision & Motive

**Purpose:** Communicate why MAHIKA exists, what it aims to achieve, and
the principles behind its work.

**Content fields** - Section heading: \[TO BE APPROVED\] - Mission
statement: \[TO BE PROVIDED / APPROVED\] - Vision statement: \[TO BE
PROVIDED / APPROVED\] - Brand purpose / motive: \[TO BE PROVIDED\] -
Core values (each with a short explanation): \[TO BE PROVIDED\] -
Supporting visual / illustration: \[SUPPLIED IMAGE OR APPROVED BRAND
VISUAL\]

**Suggested value topics --- not confirmed claims** - Thoughtful product
selection. - Customer trust. - Care in the shopping experience. -
Consistency and responsibility. - Customer satisfaction.

The owner must approve which values genuinely represent MAHIKA.

**Do not include** - Generic corporate claims presented as established
facts. - Promises or guarantees the business cannot substantiate.

## Section 04 --- What We Offer

**Purpose:** Give visitors a concise understanding of the types of
products or lifestyle categories associated with MAHIKA.

**Important:** The categories below are working suggestions based on the
supplied brand context. They are not a final product catalogue. Confirm
each category before publishing.

  -----------------------------------------------------------------------
  Proposed category       Status                  Description
  ----------------------- ----------------------- -----------------------
  Fashion & Accessories   \[TO BE CONFIRMED\]     \[DESCRIPTION TO BE
                                                  PROVIDED\]

  Bags & Accessories      \[TO BE CONFIRMED\]     \[DESCRIPTION TO BE
                                                  PROVIDED\]

  Home Decor              \[TO BE CONFIRMED\]     \[DESCRIPTION TO BE
                                                  PROVIDED\]

  Gifts & Festive         \[TO BE CONFIRMED\]     \[DESCRIPTION TO BE
                                                  PROVIDED\]

  Candles & Lighting      \[TO BE CONFIRMED\]     \[DESCRIPTION TO BE
                                                  PROVIDED\]

  Lifestyle & Daily       \[TO BE CONFIRMED\]     \[DESCRIPTION TO BE
  Essentials                                      PROVIDED\]

  Other categories        \[TO BE PROVIDED\]      \[DESCRIPTION TO BE
                                                  PROVIDED\]
  -----------------------------------------------------------------------

**Visual requirements** - Use owner-supplied category images wherever
available. - Use a consistent image treatment and crop style. - Each
category should have a short title and a brief factual description. -
The section is an introduction to product range, not a shopping
catalogue.

**Do not include** - Product prices, stock status, SKU, add-to-cart
buttons, or checkout controls. - Categories that the owner has not
confirmed. - Generic stock imagery that misrepresents the actual product
range.

## Section 05 --- Why Choose MAHIKA

**Purpose:** Explain the customer commitments and principles that MAHIKA
is genuinely prepared to stand behind.

**Content fields** - Section heading: \[TO BE APPROVED\] - Commitment 1:
\[TO BE PROVIDED / APPROVED\] - Commitment 2: \[TO BE PROVIDED /
APPROVED\] - Commitment 3: \[TO BE PROVIDED / APPROVED\] - Commitment 4:
\[TO BE PROVIDED / APPROVED\] - Supporting icons / illustrations:
\[SUPPLIED OR APPROVED ASSETS\]

**Potential topics for owner approval** - Thoughtful product
selection. - Clear product information. - Customer-focused service. -
Careful order handling. - Commitment to customer satisfaction.

**Do not automatically claim** - Guaranteed delivery times. - Free
shipping. - Easy returns or refunds. - Certified quality. - 24/7
support. - Any service level that has not been confirmed and can be
honoured.

## Section 06 --- Contact & Business Information

**Purpose:** Make MAHIKA's official business identity and contact
channels easy to find.

**Content fields** - Section heading: \[TO BE APPROVED\] - Brand name:
MAHIKA - Legal business name: \[TO BE PROVIDED\] - GSTIN: \[TO BE
PROVIDED\] - Registered address: \[TO BE PROVIDED --- PUBLIC DISPLAY
APPROVAL REQUIRED\] - Business / correspondence address: \[TO BE
PROVIDED\] - Phone: \[TO BE PROVIDED\] - WhatsApp: \[TO BE PROVIDED /
OPTIONAL\] - Email: \[TO BE PROVIDED\] - Business hours: \[TO BE
PROVIDED / OPTIONAL\] - Map / location link: \[OPTIONAL --- TO BE
PROVIDED\] - Social links: \[TO BE PROVIDED / OPTIONAL\]

**Interaction requirements** - Phone number should use a `tel:` link. -
Email should use a `mailto:` link. - WhatsApp should use an approved
WhatsApp URL, if provided. - Address may link to a map only if the owner
supplies or approves the exact location. - Do not display a map by
guessing the business location.

**Privacy and accuracy** - Confirm that the owner approves publishing
the registered address. - Check GSTIN carefully before publication. - Do
not expose personal contact information unless explicitly approved for
public business use.

## Section 07 --- Footer

**Purpose:** Close the page with consistent brand identity and essential
information.

**Content fields** - Approved logo version: \[SELECT FROM SUPPLIED
LOGOS\] - Tagline: "Made with Love. Chosen with Trust." - Copyright
line: \[YEAR / FORMAT TO BE CONFIRMED\] - Official domain:
`www.mahika.world` - Footer navigation: \[APPROVED SECTION LINKS\] -
Privacy Policy URL / content: \[TO BE PROVIDED\] - Terms & Conditions
URL / content: \[TO BE PROVIDED\] - Disclaimer: \[OPTIONAL --- TO BE
PROVIDED\] - Social links: \[APPROVED LINKS ONLY\]

The footer may include a compact business identity line if approved. Do
not duplicate the entire Contact section unnecessarily.

------------------------------------------------------------------------

# 4. Navigation and Scrolling Behaviour

The website is a single-page experience.

**Proposed navigation items** - Home - About - Vision - What We Offer -
Why MAHIKA - Contact

These should scroll to the corresponding sections rather than navigate
to separate content pages.

**Interaction requirements** - Smooth scrolling to sections. - Active
navigation state based on the visible section. - Header behaviour on
scroll: \[DESIGN TO BE APPROVED\]. - Mobile navigation menu: \[DESIGN TO
BE APPROVED\]. - Respect reduced-motion preferences. - Avoid
scroll-jacking or animations that prevent normal user control.

The navigation should remain compact and should not compete with the
brand identity.

------------------------------------------------------------------------

# 5. Animation and Visual Experience

The website should feel like a refined, interactive brand story rather
than a generic template.

**Proposed motion** - Subtle hero entrance animation. - Scroll-triggered
fade-in / reveal for section content. - Gentle image and text
transitions. - Staggered entrance for small groups of content. - Subtle
parallax only where it does not harm performance or usability. - Refined
hover and focus states. - Smooth anchor navigation.

**Motion constraints** - Keep animation restrained and purposeful. - Do
not animate every element. - Do not use excessive zoom, bounce,
spinning, or distracting effects. - Do not delay access to content while
animations play. - Respect `prefers-reduced-motion`. - Ensure touch
devices remain easy to use. - Prioritise performance, readability, and
accessibility.

------------------------------------------------------------------------

# 6. Image and Asset Inventory

The brand owner will supply relevant images and reference files. Treat
the supplied assets as the primary source for visual direction.

  -----------------------------------------------------------------------
  Asset                   Required use            Status
  ----------------------- ----------------------- -----------------------
  Final horizontal logo   Header / selected brand \[SUPPLIED / VERIFY
                          placements              FINAL FILE\]

  Circular emblem logo    Favicon / selected      \[SUPPLIED / VERIFY
                          brand accents           FINAL FILE\]

  Logo with tagline       Brand story / footer    \[SUPPLIED / VERIFY
                          where appropriate       FINAL FILE\]

  Brand colour reference  Colour analysis and UI  \[SUPPLIED / VERIFY
                          styling                 FINAL FILE\]

  Brand lifestyle banner  Hero / visual           \[SUPPLIED / VERIFY
                          reference, subject to   FINAL FILE\]
                          approval                

  About / brand story     About section           \[TO BE PROVIDED\]
  image                                           

  Vision / values image   Vision section          \[TO BE PROVIDED /
                                                  OPTIONAL\]

  Category images         What We Offer section   \[TO BE PROVIDED FOR
                                                  APPROVED CATEGORIES\]

  Trust / service visual  Why Choose MAHIKA       \[TO BE PROVIDED /
  assets                                          OPTIONAL\]

  Favicon source          Browser tab icon        \[TO BE CONFIRMED\]
  -----------------------------------------------------------------------

**Asset handling rules** - Use the actual uploaded image files, not
recreated approximations. - Do not alter product designs, prints,
colours, or important visual details. - Do not apply artificial gloss,
excessive sharpening, or unrelated filters. - Preserve aspect ratio; use
appropriate `object-fit` behaviour. - Crop only where composition
remains faithful to the source. - If an image is missing, use a neutral
approved layout placeholder during development and list the missing
asset. Do not silently substitute unrelated stock images. - Maintain a
clear asset manifest with the filename, intended section, and any
crop/alt-text notes.

------------------------------------------------------------------------

# 7. Brand Visual System

**Confirmed direction:** Minimal, clean, premium.

**Source of truth:** The final MAHIKA logo and supplied colour reference
images.

Guidelines: - Derive UI colours from the supplied reference. Exact
colour values are \[TO BE CONFIRMED / SAMPLED AND APPROVED\]. - Use
light, calm backgrounds and restrained accents consistent with the
reference. - Use typography that complements the original logo without
imitating or modifying it. - Keep text contrast accessible. - Use
consistent spacing, border radii, image ratios, and icon style. - Use
subtle borders and shadows only where useful. - Avoid visual clutter,
excessive gradients, heavy dark backgrounds, neon colours, and unrelated
accent colours. - Do not assume that a colour sampled from a compressed
or illuminated image is the official brand HEX value until approved.

**Typography** - Primary website font: \[TO BE CONFIRMED\] - Secondary
font: \[OPTIONAL --- TO BE CONFIRMED\] - Heading style: \[TO BE
APPROVED\] - Body style: readable, clear, and accessible.

------------------------------------------------------------------------

# 8. Marketplace Redirects --- Separate from Homepage

The marketplace redirects are required technical routes, but there must
be no "Shop With MAHIKA" section on the homepage in the current release.

**Required routes** - `https://www.mahika.world/meesho` -
`https://www.mahika.world/flipkart` - `https://www.mahika.world/amazon`

**Confirmed Meesho destination** - `https://meesho.com/MAHIKAESHOP`

**Destinations still required** - Flipkart store URL: \[TO BE
PROVIDED\] - Amazon store URL: \[TO BE PROVIDED\]

## Runtime configuration requirement

Marketplace destination URLs must be editable in a server-side runtime
configuration file or equivalent deployment-managed configuration.
Updating a destination must not require rebuilding the React frontend.

Suggested logical configuration:

``` json
{
  "marketplaces": {
    "meesho": {
      "enabled": true,
      "url": "https://meesho.com/MAHIKAESHOP"
    },
    "flipkart": {
      "enabled": true,
      "url": "[FLIPKART_STORE_URL]"
    },
    "amazon": {
      "enabled": true,
      "url": "[AMAZON_STORE_URL]"
    }
  }
}
```

This is a logical example, not a requirement to expose the configuration
file publicly.

**Technical requirements** - Redirects must work when a customer opens
or scans the route directly. - Implement redirects on the server /
hosting layer, not only through React client-side routing. - Return an
HTTP 302 temporary redirect unless a different status is deliberately
approved. - Validate destination URLs against an explicit allowlist of
approved marketplace domains. - Accept only HTTPS destinations. - Do not
create an open redirect endpoint that accepts arbitrary user-supplied
destination URLs. - Handle disabled or missing destinations with a
branded, helpful fallback response. - Unknown paths should return a
proper 404 response. - Ensure the redirect handler and React application
can coexist on the same domain. - Document how to update the runtime
configuration and how changes take effect. - Do not claim the routes are
live until deployed and tested.

**QR code note** Existing QR artwork must not be recreated using AI. Use
genuine QR generation for any new QR code and scan-test the final image.
QR codes are not required as a homepage section.

------------------------------------------------------------------------

# 9. Technical, SEO, Accessibility and Performance Requirements

## Frontend

-   React.js.
-   Component-based structure.
-   Reusable section components.
-   Centralised content data where appropriate.
-   Maintainable CSS / styling approach.
-   Avoid unnecessary dependencies.
-   The exact build tooling and package versions are \[TO BE CONFIRMED
    AFTER PROJECT REVIEW\].

## Responsive design

-   Mobile-first implementation.
-   Support common mobile, tablet, laptop, and desktop widths.
-   Avoid horizontal overflow.
-   Ensure navigation and contact actions work on touch devices.
-   Optimise image sizes and loading behaviour.

## SEO

-   Page title: \[TO BE APPROVED\]
-   Meta description: \[TO BE APPROVED\]
-   Canonical URL: `https://www.mahika.world/`
-   Open Graph title / description / image: \[TO BE PROVIDED /
    APPROVED\]
-   Favicon: \[APPROVED BRAND ASSET\]
-   Semantic headings and meaningful image alt text.
-   Appropriate business structured data only when all details are
    verified.

## Accessibility

-   Semantic HTML.
-   Keyboard-accessible navigation and controls.
-   Visible focus indicators.
-   Sufficient text contrast.
-   Descriptive link labels.
-   Meaningful alt text for informative images.
-   Empty alt text for purely decorative images.
-   Reduced-motion support.

## Performance

-   Optimise images without visibly damaging quality.
-   Use modern image formats where suitable.
-   Lazy-load below-the-fold imagery.
-   Avoid large animation libraries if a lighter solution is adequate.
-   Prevent layout shifts by specifying image dimensions or aspect
    ratios.
-   Keep the initial page load fast.

## Analytics and privacy

-   Analytics requirement: \[TO BE CONFIRMED\].
-   Analytics provider / measurement ID: \[OPTIONAL --- TO BE
    PROVIDED\].
-   Cookie / consent requirements: \[TO BE REVIEWED BASED ON TOOLS
    USED\].
-   Do not add tracking scripts without owner approval.
-   Privacy Policy content must be supplied or reviewed before
    publication if personal data or tracking is collected.

------------------------------------------------------------------------

# 10. Final Content Approval Checklist

Do not mark the website content as final until the owner has reviewed
these items.

-   [ ] Final logo files identified.
-   [ ] Final colour reference identified and palette approved.
-   [ ] Hero headline approved.
-   [ ] Hero supporting text approved.
-   [ ] About MAHIKA copy approved.
-   [ ] Brand story facts confirmed.
-   [ ] Mission and vision approved.
-   [ ] Brand values approved.
-   [ ] Product categories confirmed.
-   [ ] Category descriptions approved.
-   [ ] Customer commitments verified.
-   [ ] Legal business name supplied.
-   [ ] GSTIN supplied and checked.
-   [ ] Public business address approved.
-   [ ] Phone and email supplied and checked.
-   [ ] Social media links verified.
-   [ ] Footer and copyright text approved.
-   [ ] Privacy / terms requirements reviewed.
-   [ ] Flipkart destination URL supplied.
-   [ ] Amazon destination URL supplied.
-   [ ] Redirect configuration and hosting approach reviewed.
-   [ ] Supplied images mapped to sections.
-   [ ] Responsive and accessibility review completed.

------------------------------------------------------------------------

# 11. Open Questions for the Brand Owner

Keep these questions open until answered. Do not make assumptions.

1.  What is the legal / registered business name?
2.  What is the GSTIN?
3.  Which business address may be published?
4.  What phone number and email should customers use?
5.  Is WhatsApp support available?
6.  What is the authentic story behind MAHIKA?
7.  What is the approved mission and vision?
8.  Which product categories should appear?
9.  Which customer commitments can MAHIKA confidently make?
10. Which social media profiles are official?
11. Which exact logo file is preferred for desktop and mobile?
12. Are official brand font files or font preferences available?
13. What are the final Flipkart and Amazon store URLs?
14. Where will the website be hosted, and what server/runtime is
    available for redirects?
15. Is analytics required?

------------------------------------------------------------------------

# 12. Publication and Change Control

-   This document is a working content and requirements specification.
-   A placeholder is not approved content.
-   A proposed category is not a confirmed category.
-   A design suggestion is not an approved design.
-   Any new section or feature must be discussed with the brand owner.
-   Keep the website single-page unless the owner explicitly approves a
    change.
-   Do not add a "Shop With MAHIKA" homepage section in the current
    release.
-   Do not start e-commerce functionality without a separate scope
    approval.
-   Keep this document updated as details are supplied and approved.

**End of document.**
