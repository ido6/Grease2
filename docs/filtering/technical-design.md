# Product Filtering Technical Design

## 1. System Overview
- **Goal**: Replace current client-only filtering with scalable API-driven facet system, supporting live updates and synchronized state across desktop/mobile.
- **Architecture**: Next.js App Router with hybrid server/client components; dedicated filters API endpoint orchestrating catalog service.

```
Client (React + Zustand)  ⇆  /api/products/search  ⇆  Catalog Service / DB
          ▲                                        │
  URL query params                                 │
          ▼                                        ▼
   LocalStorage cache                     Redis / Edge cache (optional)
```

## 2. API Contract (`GET /api/products/search`)

### Request Parameters (query string)
| Param | Type | Example | Notes |
| --- | --- | --- | --- |
| `category` | string | `shoes` | Required for dataset routing |
| `q` | string | `"סנדלים"` | Full-text search |
| `price_min` | number | `150` | Optional |
| `price_max` | number | `450` | Optional |
| `availability` | string[] | `in_stock,preorder` | Multi select |
| `color` | string[] | `black,white` | Multi select |
| `size` | string[] | `36,37` | Multi select |
| `brand` | string[] | `grease,atelier` | Optional facet |
| `rating_min` | number | `4` | Optional facet |
| `page` | number | `1` | Defaults to 1 |
| `page_size` | number | `24` | Max 60 |
| `sort` | enum | `relevance`, `price_asc`, `price_desc`, `newest` | |

### Response Schema (JSON)
```json
{
  "results": [
    {
      "id": 123,
      "title": "סנדל רצועות צהוב",
      "price": 349.9,
      "thumbnail": "/Photos/Gemini_Generated_Image_3hvxti3hvxti3hvx.png",
      "availability": "in_stock",
      "color": "yellow",
      "sizes": [36,37,38],
      "rating": 4.6
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 24,
    "totalResults": 240,
    "totalPages": 10
  },
  "facets": {
    "price": { "min": 90, "max": 890 },
    "availability": [ { "value": "in_stock", "count": 182 }, { "value": "preorder", "count": 58 } ],
    "color": [ { "value": "black", "count": 96 }, ... ],
    "size": [ { "value": "36", "count": 45 }, ... ],
    "brand": [ { "value": "Grease", "count": 67 } ],
    "rating": { "distribution": [ { "value": 5, "count": 76 }, ... ] }
  }
}
```

### Backend Considerations
- Utilize catalog search provider (e.g., Elasticsearch, Algolia) to compute facet counts efficiently.
- Apply caching at CDN/edge for GET requests with identical query strings (short TTL 30s).
- Normalize strings (lowercase, slug) for filter values; supply translation map to frontend.

## 3. Frontend State Management

### Store (Zustand Example)
```ts
type FilterState = {
  category: 'shoes' | 'bags';
  query: string;
  facets: Record<string, string[]>;
  range: { price: [number, number] };
  sort: 'relevance' | 'price_asc' | 'price_desc' | 'newest';
  pagination: { page: number; pageSize: number };
  loading: boolean;
  results: ProductSummary[];
  metadata: FacetMetadata;
  setFacet: (key: string, values: string[]) => void;
  setRange: (key: string, value: [number, number]) => void;
  setQuery: (q: string) => void;
  reset: () => void;
};
```

### Data Fetching
- Integrate with SWR/RTK Query to reuse responses & manage cache invalidation.
- Debounce state updates (250 ms) before triggering fetch, except for explicit `Apply` on mobile.
- Use AbortController to cancel stale requests when filters change rapidly.

### URL Synchronization
- Encode filter state into query params using stable key order (e.g., `color=black,white`).
- Utilize Next.js `useSearchParams` & `useRouter` to parse/replace state on mount.
- Support sharing/bookmarking filtered views; hydration pulls from URL → store → localStorage fallback.

### Persistence
- Save most recent filters per category in `localStorage` under `filters:<category>`.
- On mount: load from URL > localStorage > defaults.

## 4. UI Component Responsibilities

| Component | Role |
| --- | --- |
| `FilterSidebar` | Desktop accordion container; subscribes to store; dispatches updates |
| `FilterDrawer` | Mobile slide-over; mirrors sidebar controls; handles apply/reset |
| `FilterSummaryBar` | Displays active chip list, results count, sort dropdown |
| `FilterChip` | Individual removable facet indicator |
| `FacetCheckboxList` | Generic multi-select list w/ virtualization for >20 items |
| `FacetRangeSlider` | Dual-thumb slider; interacts with `range` state |
| `ResultsGrid` | Consumes `results` & `pagination`; triggers `loadMore` |

## 5. Performance Strategy
- Lazy-load secondary facets when accordion expands for first time.
- Implement skeleton placeholders for grid while fetching.
- Prefetch facet metadata for common categories at build time (ISR) to reduce initial latency.
- Use `React.useTransition` for optimistic UI updates on minor filter tweaks.

## 6. Error & Loading States
- Present inline error card with retry on API failure; preserve user selections.
- Show top-of-page toast when filter combination yields zero results, with quick link to clear recent filters.
- Display per-facet loading spinner when counts refresh after selection.

## 7. Accessibility & i18n Hooks
- All interactive controls rely on semantic HTML (`fieldset`, `legend`, `label`).
- Provide bilingual support: expose `facetLabelMap` for Hebrew/English toggling.
- Ensure screen reader announcements for updated result count (`aria-live`).

## 8. Implementation Phasing
1. **Backend endpoint** with stubbed data + facet metadata.
2. **Frontend store + URL sync** integrated on `shoes` page; feature flag for limited rollout.
3. **Desktop UI components**, followed by **mobile drawer**.
4. **Analytics instrumentation** for newly defined events.
5. **Progressive enhancement**: enable caching, skeleton states, and persistence.

## 9. Dependencies & Tools
- Zustand (state store) or Redux Toolkit (if global adoption preferred).
- SWR/RTK Query for data fetching and caching.
- Headless UI/ Radix for accessible accordion base (optional).
- Vercel Edge Middleware for URL normalization & caching hints.

## 10. Risks & Mitigations
- **Complex state sync**: Write utility to diff store vs. URL to avoid loops.
- **Large payloads**: Keep facet arrays trimmed to top N values + search for long tail.
- **API latency**: Use partial results streaming (where possible) or placeholder data while waiting.
- **Mobile performance**: Virtualize lists, limit re-renders using memoized selectors.

