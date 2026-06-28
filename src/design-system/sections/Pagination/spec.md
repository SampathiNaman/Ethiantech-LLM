# Pagination Section

## Purpose
Page number navigation for listing pages. Shows current page, total pages, and prev/next controls.

## Data Model
```js
{
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}
```

## Component Instances
- **Button** — prev/next, page number buttons (variant: ghost/outline)
- **Text** — current page indicator

## Interaction Patterns
- Click page number: switch to that page
- Prev/Next: decrement/increment with boundary check
- Disabled state on first/last page boundaries

## Responsive Behavior
- Desktop: full pagination with page numbers
- Mobile: prev/next only, or truncated display
