# Coding Agent Prompt --- Build the MAHIKA Brand Introduction Website

You are an experienced React.js frontend engineer and UI/UX
implementation specialist. Build the MAHIKA official brand introduction
website using the accompanying
`MAHIKA-Website-Content-and-Requirements.md` as the primary project
specification.

The requirements document is the source of truth for confirmed
decisions, content fields, placeholders, assets, scope boundaries, and
technical expectations. Read it completely before writing code.

------------------------------------------------------------------------

## 1. First: Inspect, Plan, and Report

Before implementation:

1.  Inspect the supplied Markdown requirements file.
2.  Inspect the existing repository and identify its current framework,
    package manager, scripts, build tool, routing setup, styling
    approach, and deployment configuration.
3.  Inspect all uploaded/provided image and brand asset files. Identify
    the actual filenames and formats.
4.  Map each supplied asset to its intended website section. Do not
    assume an image's role solely from its filename.
5.  Identify missing business data, missing images, unclear
    requirements, and deployment constraints.
6.  Provide a concise implementation plan and list of blockers.
7.  Do not invent missing business details or silently replace
    placeholders with made-up copy.
8.  If a decision is essential and cannot be safely inferred from the
    requirements, ask the project owner before proceeding.

If the repository is empty, propose a maintainable React.js setup and
explain the choice before creating it. If an existing project is
present, preserve its conventions unless there is a strong technical
reason to change them.

------------------------------------------------------------------------

## 2. Project Objective

Create a polished, premium, minimal, single-page brand introduction
website for **MAHIKA**.

Brand: - Name: MAHIKA - Tagline: "Made with Love. Chosen with Trust." -
Official domain: `https://www.mahika.world`

This is a brand identity and introduction website, not an online store.

The website should communicate: - Who MAHIKA is. - The brand's story and
identity. - Its purpose, vision, and values. - The categories or types
of products it offers, once confirmed. - Its genuine customer
commitments. - Official business and contact information, including
GSTIN when supplied.

The experience should feel like a carefully designed brand story
presented through a smooth, interactive scrolling page.

------------------------------------------------------------------------

## 3. Mandatory Scope Boundaries

### Build

-   One single-page React.js website.
-   Responsive layout for mobile, tablet, laptop, and desktop.
-   Minimal, clean, premium visual identity.
-   Section-based navigation and scrolling.
-   Subtle, polished scroll-triggered animation.
-   Brand story and business information sections.
-   Contact interactions using verified contact details.
-   Separate server-side marketplace redirect routes.
-   Runtime-configurable marketplace destinations.

### Do NOT build

-   Product shopping cart.
-   Checkout.
-   Payment gateway.
-   Customer accounts or login.
-   Order management or order tracking.
-   Product purchase workflow.
-   E-commerce catalogue functionality.
-   A homepage section named "Shop With MAHIKA".
-   Marketplace promotional buttons or a marketplace shopping section on
    the homepage unless separately approved.
-   Additional pages or features not specified in the requirements
    document.

The homepage must remain a single-page brand introduction website.

------------------------------------------------------------------------

## 4. Required Homepage Sections

Use the requirements Markdown file for the detailed content fields and
placeholders. The intended sequence is:

1.  **Hero / Welcome**
    -   Approved MAHIKA logo.
    -   Tagline.
    -   Brand headline and introduction, once approved.
    -   Supplied hero/lifestyle image.
    -   CTA such as "Discover MAHIKA" only if approved; it may scroll to
        the About section.
2.  **About MAHIKA**
    -   Brand introduction.
    -   Authentic brand story.
    -   What MAHIKA represents.
    -   Supplied supporting visual.
3.  **Our Vision & Motive**
    -   Approved mission.
    -   Approved vision.
    -   Brand purpose.
    -   Confirmed brand values.
4.  **What We Offer**
    -   Only owner-confirmed categories.
    -   Concise, factual descriptions.
    -   Relevant supplied category images.
    -   This is a brand/category introduction, not a product shopping
        grid.
5.  **Why Choose MAHIKA**
    -   Only genuine and approved customer commitments.
    -   Avoid unverified quality, delivery, return, refund,
        certification, or service claims.
6.  **Contact & Business Information**
    -   Approved legal business name.
    -   Verified GSTIN.
    -   Publicly approved business address.
    -   Approved phone, email, WhatsApp, business hours, and social
        links.
    -   Make phone, email, and WhatsApp links functional when valid
        values are supplied.
7.  **Footer**
    -   Appropriate approved logo version.
    -   Brand tagline.
    -   Official domain.
    -   Approved section navigation.
    -   Copyright.
    -   Privacy / Terms links only when content or URLs are supplied.

Do not add a "Shop With MAHIKA" section. Marketplace redirect routes are
independent of the homepage.

------------------------------------------------------------------------

## 5. Brand Identity and Supplied Assets

The project owner will provide relevant images and reference files
alongside the requirements Markdown file. Some logo and reference assets
may already be available in the uploaded project files.

Use the actual supplied assets as the primary visual references.

### Logo rules

-   Preserve original artwork, proportions, typography, symbol, and
    colours.
-   Do not redraw, recreate, stretch, distort, or recolour the logo.
-   Use the horizontal, circular, and tagline versions appropriately.
-   Use the correct logo file for each placement.
-   Do not create a text-based substitute for the official logo.
-   Do not generate a new logo.

### Colour rules

-   Derive the interface palette from the supplied final colour
    reference.
-   Do not invent unrelated colours.
-   Do not introduce neon, excessively dark, or overly saturated
    colours.
-   Treat sampled HEX values as provisional until approved if the owner
    has not supplied official colour codes.
-   Maintain consistent colours across buttons, backgrounds, typography,
    borders, icons, and interactive states.

### Image rules

-   Use supplied brand, lifestyle, and category images.
-   Do not use unrelated stock images as substitutes.
-   Do not create artificial product visuals or alter actual product
    designs.
-   Preserve image aspect ratios and use careful crops.
-   Optimise images for web without visibly degrading them.
-   Use meaningful alt text for informative images.
-   If a required image is missing, create a neutral placeholder and
    report the missing asset. Do not silently invent or fetch a
    replacement.
-   Maintain an asset map or manifest that records the filename and
    intended section.

The owner may supply additional section-specific images later. Build the
components so that images can be replaced easily without rewriting
layout code.

------------------------------------------------------------------------

## 6. Visual Design Direction

The approved direction is:

**Minimal, Clean & Premium.**

The website should: - Use generous whitespace. - Have a clear visual
hierarchy. - Use elegant, readable typography. - Use restrained accents
derived from the supplied brand reference. - Avoid unnecessary cards,
borders, shadows, gradients, and decorative clutter. - Keep the original
brand identity prominent. - Present images in a consistent and
considered way. - Feel premium without being visually heavy. - Maintain
a coherent visual language throughout the page.

Do not copy the Thank You Card design as the website design. The
supplied logo and colour references define the brand identity; the
website has its own minimal digital layout.

------------------------------------------------------------------------

## 7. Interactive Scrolling and Motion

Implement a refined scrolling experience.

Possible motion patterns: - Subtle hero entrance. - Section content
reveal on scroll. - Fade-in and gentle vertical movement. - Staggered
reveal for related content groups. - Subtle image transitions. - Smooth
anchor scrolling. - Active section indicator in the navigation. -
Restrained hover and focus transitions. - Optional subtle parallax only
if it remains performant and usable.

### Motion requirements

-   Motion must support the brand story, not distract from it.
-   Avoid excessive bounce, spin, zoom, or continuous movement.
-   Do not hide important content until an animation completes.
-   Do not use scroll-jacking.
-   Respect `prefers-reduced-motion`.
-   Ensure the website remains usable with keyboard, touch, and
    assistive technology.
-   Avoid large animation dependencies if CSS or a small utility can
    achieve the same result.
-   Test on lower-powered mobile devices.

------------------------------------------------------------------------

## 8. Navigation and Page Behaviour

The website is one page.

Navigation items should scroll to their sections, for example: - Home -
About - Vision - What We Offer - Why MAHIKA - Contact

Requirements: - Use semantic anchor links and meaningful section IDs. -
Smoothly scroll to sections where motion is enabled. - Keep the active
navigation state accurate. - Use a compact mobile navigation menu. -
Ensure keyboard operation and visible focus. - Account for a sticky
header when calculating scroll position. - Do not create separate routes
for these homepage sections.

Header scroll behaviour and final navigation appearance should follow
the approved design.

------------------------------------------------------------------------

## 9. Marketplace Redirect System --- Runtime Configuration

This is a mandatory technical requirement and is separate from the
homepage.

Required public routes: - `https://www.mahika.world/meesho` -
`https://www.mahika.world/flipkart` - `https://www.mahika.world/amazon`

Known Meesho destination: - `https://meesho.com/MAHIKAESHOP`

Flipkart destination: - `[TO BE PROVIDED]`

Amazon destination: - `[TO BE PROVIDED]`

### Critical requirement: No rebuild to change destinations

Use a server-side runtime configuration file or equivalent
deployment-managed configuration. The redirect handler must read the
current configuration at request time, or use a cache with a documented
refresh/invalidation strategy.

Changing a marketplace destination must not require rebuilding the React
frontend.

Example logical configuration:

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

This file must remain server-side. Do not expose private runtime
configuration as a public static asset.

### Redirect implementation

-   Redirects must work when opened directly in a browser or scanned
    from a QR code.
-   Implement on the server / hosting layer, not only with React
    client-side routing.
-   Use HTTP 302 by default.
-   Validate destination URLs.
-   Allow only HTTPS destinations from an explicit allowlist of approved
    marketplace domains.
-   Never accept an arbitrary destination URL from a query parameter or
    path.
-   Prevent open-redirect vulnerabilities.
-   For disabled or missing destinations, show a helpful branded
    fallback response or an approved not-available response.
-   Unknown routes must return a proper 404 response.
-   Ensure redirect routes do not get swallowed by the React SPA
    fallback.
-   Document how to change a destination, how quickly it takes effect,
    and how to test it.
-   Do not claim a redirect is live until it is deployed and tested.

### Hosting decision

Inspect the available hosting environment before choosing the
implementation. A Node.js redirect service is acceptable if supported.
If the hosting platform provides a secure server-side
routing/configuration mechanism, it may be used instead. The React
frontend must remain separate from the redirect configuration logic.

Do not choose a purely static-hosting implementation that requires a new
build every time a marketplace URL changes.

------------------------------------------------------------------------

## 10. React.js Implementation Quality

-   Use reusable, well-named components.
-   Keep content separate from layout where practical.
-   Keep business details and section copy in a maintainable
    data/configuration module.
-   Avoid duplicating repeated markup.
-   Use clear and maintainable CSS.
-   Avoid unnecessary dependencies.
-   Use semantic HTML.
-   Handle missing optional content gracefully.
-   Do not render empty labels, broken links, or placeholder text
    accidentally in production.
-   Keep secrets and server-only configuration out of the client bundle.
-   Add comments only where they clarify non-obvious behaviour.

The exact tooling, React version, package manager, and CSS solution
should be selected after inspecting the existing repository. Do not
unnecessarily replace an existing working stack.

------------------------------------------------------------------------

## 11. Responsive Design

Design mobile-first and verify at common viewport sizes.

Check: - Small mobile phones. - Large mobile phones. - Tablets. -
Laptops. - Large desktop screens.

Requirements: - No horizontal overflow. - Images scale and crop
appropriately. - Typography remains readable. - Header and navigation
work on touch screens. - Contact links are easy to tap. - Spacing is
consistent at every breakpoint. - Animation remains smooth on mobile. -
No content is hidden behind sticky navigation.

------------------------------------------------------------------------

## 12. SEO, Accessibility, and Performance

### SEO

-   Use a meaningful page title and meta description based on approved
    copy.
-   Canonical URL: `https://www.mahika.world/`
-   Add appropriate Open Graph metadata when approved social preview
    imagery is available.
-   Use semantic heading hierarchy.
-   Provide descriptive image alt text.
-   Add structured business data only after business details have been
    verified.
-   Do not publish invented legal or business information.

### Accessibility

-   Semantic landmarks.
-   Keyboard-accessible navigation.
-   Visible focus indicators.
-   Sufficient colour contrast.
-   Proper labels and link names.
-   Reduced-motion support.
-   Meaningful image alternative text.
-   Do not communicate essential information through colour alone.

### Performance

-   Optimise image assets.
-   Use modern image formats when appropriate.
-   Lazy-load below-the-fold images.
-   Specify image dimensions or aspect ratios to reduce layout shifts.
-   Avoid unnecessary JavaScript.
-   Avoid large blocking assets.
-   Test loading and animation performance on mobile.

### Analytics and privacy

-   Do not add analytics or tracking without approval.
-   If analytics is later approved, document the provider and required
    privacy/consent considerations.
-   Do not invent a Privacy Policy or Terms text. Use approved content
    or clearly report that it is outstanding.

------------------------------------------------------------------------

## 13. Content Integrity and Placeholder Handling

The requirements Markdown file deliberately contains missing-data
placeholders.

Examples: - `[TO BE PROVIDED]` - `[TO BE CONFIRMED]` - `[OPTIONAL]`

Rules: - Never invent GSTIN, legal business name, address, phone, email,
social links, mission, vision, brand history, or business claims. - Do
not publish literal placeholder strings in the live website. - During
development, use clearly marked local placeholders or hide optional
fields that have not been supplied. - Maintain a missing-content
checklist. - Use only approved category names and descriptions. - Do not
convert suggestions into confirmed brand claims. - Ask the owner where a
missing item materially affects design or implementation.

------------------------------------------------------------------------

## 14. Testing and Acceptance Criteria

Before completion, verify:

### Brand and visual

-   Correct supplied logo assets are used.
-   Logo artwork is not modified.
-   Colour usage follows the supplied reference.
-   Design is minimal, clean, and premium.
-   No unrelated stock imagery is used.
-   All supplied images are mapped correctly.

### Page structure

-   All seven approved sections are present in the intended order,
    subject to approved content.
-   No "Shop With MAHIKA" homepage section exists.
-   No e-commerce functionality has been added.
-   Navigation scrolls to the correct sections.
-   Footer links work when configured.

### Responsive and accessibility

-   Mobile, tablet, and desktop layouts work.
-   No horizontal overflow.
-   Keyboard navigation works.
-   Focus states are visible.
-   Reduced-motion preference is respected.
-   Text and images remain accessible and readable.

### Redirects

-   `/meesho`, `/flipkart`, and `/amazon` work directly.
-   Redirect destination is read from server-side runtime configuration.
-   Updating a destination takes effect without rebuilding the React
    app.
-   Only approved HTTPS marketplace destinations are accepted.
-   Disabled/missing destination handling works.
-   Unknown paths return 404.
-   Redirect routes are not intercepted by SPA fallback.
-   QR scan behaviour is tested after deployment.

### Build and deployment

-   Project builds successfully.
-   No console errors or broken assets.
-   No secrets or private configuration are exposed to the browser.
-   Deployment instructions are documented.
-   Runtime configuration update instructions are documented.

------------------------------------------------------------------------

## 15. Required Deliverables

Provide:

1.  Complete React.js source code.
2.  Reusable components for all homepage sections.
3.  Responsive styling.
4.  Scroll and interaction behaviour.
5.  Asset manifest showing which supplied file is used in each section.
6.  Server-side marketplace redirect implementation.
7.  Server-side runtime configuration example.
8.  Secure destination validation.
9.  `.env.example` only if environment variables are required; never
    include real secrets.
10. README with setup, development, build, deployment, and configuration
    instructions.
11. A missing-content and missing-assets checklist.
12. A test checklist and test results.
13. A short explanation of how to update Meesho, Flipkart, and Amazon
    destinations without rebuilding the frontend.

Do not state that the work is complete unless the implementation has
actually been built and tested.

------------------------------------------------------------------------

## 16. Final Instruction

Treat `MAHIKA-Website-Content-and-Requirements.md` and the
owner-supplied image/logo/colour reference files as the authoritative
inputs.

First inspect and report the existing project and available assets. Then
implement the approved scope carefully.

The result must be a refined, responsive, single-page MAHIKA brand
introduction website with a premium animated scrolling experience and
independently configurable marketplace redirects.

Do not add unapproved sections, content, colours, claims, or e-commerce
features. When information is missing, preserve the placeholder in the
planning document, report it clearly, and request the owner's input
rather than guessing.
