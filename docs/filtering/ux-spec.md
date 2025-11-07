# Product Filter UX Specification

## 1. Experience Principles
- **Visible & approachable**: Filters should be immediately discoverable on desktop, one tap away on mobile.
- **Fast & forgiving**: Provide instant feedback, easy undo/clear capabilities, and explicit apply options when necessary.
- **Consistent**: Align visual language across breakpoints with shared components.

## 2. Desktop Layout Blueprint

```
┌────────────────────────────────────────────────────────────┐
│ Global Nav                                                 │
├────────────────────────────────────────────────────────────┤
│ Sticky Summary Bar: [Filters (4)] [Chips: Color:Black ✕]   │
│ [Clear all] [Sort ▼] [Results count]                       │
├───────────────┬────────────────────────────────────────────┤
│ Sidebar (sticky)                                           │
│ ┌───────────── Filter Accordion ─────────────┐             │
│ │ Price                                      │ ▼ collapsed │
│ │  • Slider w/ currency input                │             │
│ │ Availability                               │ ▲ expanded │
│ │  [x] In stock (123)                        │             │
│ │  [ ] Pre-order (42)                        │             │
│ │ Category                                   │ ▼          │
│ │ Color (searchable swatches)                │ ▼          │
│ │ Size (multi-select pills)                  │ ▼          │
│ │ ─────────────────────────────────────────  │             │
│ │ Secondary filters (toggle section)         │             │
│ └────────────────────────────────────────────┘             │
│ Sticky footer inside sidebar: [Clear facet]                │
├───────────────┴────────────────────────────────────────────┤
│ Product Grid (responsive cards)                            │
└────────────────────────────────────────────────────────────┘
```

### Desktop Interaction Notes
- Sidebar width ~320px; sticky within viewport minus footer offset.
- Accordions use chevron indicators; display item counts fetched from API.
- Checkbox/select controls update results immediately (debounced 250 ms).
- Range inputs (price) show live min/max values and allow typing exact numbers.
- `Clear facet` appears when selections exist within a section.

## 3. Mobile Layout Blueprint

```
┌──────────────────────────────────────────────┐
│ Global Nav                                   │
├──────────────────────────────────────────────┤
│ Sticky Controls: [Filters (3)] [Sort ▼] [Results] │
├──────────────────────────────────────────────┤
│ Product Grid (single column / 2-col responsive) │
└──────────────────────────────────────────────┘

Filter Drawer (Slide-over from right / full height)
┌──────────────────────────────────────────────┐
│ Header: "סינון"     [Clear all]    [Close ✕] │
├──────────────────────────────────────────────┤
│ Persistent summary chip row (horizontal scroll) │
├──────────────────────────────────────────────┤
│ Scrollable Content                            │
│  Accordion groups mirroring desktop           │
│  • Price slider                               │
│  • Availability checkboxes                    │
│  • Category tree (expandable)                 │
│  • Color swatches (multi select)              │
│  • Size pills                                 │
│  • Secondary filters (toggle)                 │
├──────────────────────────────────────────────┤
│ Bottom CTA bar (safe area aware)              │
│  [Show results • 128] (primary button)        │
│  [Reset] (ghost)                              │
└──────────────────────────────────────────────┘
```

### Mobile Interaction Notes
- Filters accessible via sticky button; badge shows active count.
- Drawer traps focus; swipe-to-close gesture optional but must coexist with explicit close button.
- `Show results` button triggers API call & closes drawer, showing toast/snackbar with active facets for confirmation.
- Selection state persists via localStorage keyed by category (e.g., `filters:shoes`).

## 4. Component Requirements

| Component | Desktop | Mobile |
| --- | --- | --- |
| FilterBadge | Displays active facet count; clickable to open drawer/sidebar | Same component, scaled to 44px hit target |
| Accordion | Render with ARIA semantics, keyboard toggling via Space/Enter | Full-width, collapsible; maintain scroll position |
| RangeSlider | Supports drag & numeric input | Converts to dual-thumb slider with haptic feedback (mobile) |
| MultiSelectList | Checkbox list w/ search field & “Select all” | Virtualized list inside drawer; search auto-focus |
| ColorSwatches | 24px circular swatches, tooltip on hover | 36px tappable chips with text label below |

## 5. Accessibility Checklist
- Keyboard:
  - Tab order: summary bar → sidebar accordion headings → controls → grid.
  - Arrow keys navigate within slider, swatches, and list items.
- Screen readers:
  - Use `aria-expanded`, `aria-controls` on accordion headers.
  - Announce result count changes via `aria-live="polite"` region.
  - Provide text alternatives for color swatches (e.g., `aria-label="צבע שחור"`).
- Focus management:
  - Trap focus within mobile drawer; return focus to trigger button on close.
  - Focus visible outline meets 3:1 contrast.
- Touch targets:
  - Minimum 44×44px interactive controls.
- Motion preferences:
  - Respect `prefers-reduced-motion`; disable slide animations when enabled.

## 6. Visual Guidelines
- Color palette: reuse existing Tailwind tokens (`bg-section-light`, `text-text-light`) with new accents for active chips.
- Elevation: use subtle shadow for drawer (`shadow-xl`) and summary bar (`shadow-sm`).
- Typography: headings `font-display`, body `font-body`; maintain 16px min font size.
- Icons: Material Symbols (outlined) with consistent 24px (desktop) / 28px (mobile) sizing.

## 7. Deliverables
- Low-fidelity wireframes (Figma sketch references) for both breakpoints.
- Component spec sheet aligning with design system tokens.
- Accessibility QA script covering keyboard/screen reader scenarios.

