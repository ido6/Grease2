## Baseline Audit Notes (November 2025)

### SEO Structure
- Global metadata only declared in `app/layout.tsx`; individual routes lack `generateMetadata`, canonical URLs, or localized alternates.
- No `robots.txt` or sitemap endpoints; search engines cannot discover structured routing.
- Open Graph configuration missing images and bilingual descriptions.
- No structured data (JSON-LD) for business or products.
- Image assets rendered via CSS `background-image` without `alt` text, harming accessibility and discoverability.

### Privacy & Tikun 13 Alignment
- Cookie consent banner exists but lacks explicit accessibility labelling and focus handling.
- No explicit `privacy policy` or `cookie disclosure` links in the global header area; footer coverage is acceptable but easy-to-access link near consent recommended.
- Consent logging relies on localStorage only; no server integration (note for manual follow-up).

### Accessibility (WCAG 2.1 AA)
- Navigation lacks landmark roles and skip links; mobile drawer and filter sheets do not trap focus.
- Buttons triggering overlays are missing `aria-expanded`/`aria-controls` and keyboard focus management.
- Hero and gallery sections rely on background images without textual alternatives.
- Need to confirm contrast for `#FFD700` on white/black backgrounds; borderline on white.

### Performance & Core Web Vitals
- Large hero background image served without optimization or lazy loading.
- Product gallery images do not use `next/image`; potential LCP/CLS risk on mobile.
- No preload hints for critical fonts or hero imagery.

### Localization & Content
- Site serves Hebrew content only; English metadata absent despite bilingual requirement.
- No `hreflang` declarations or `lang` alternates beyond root HTML attribute.

