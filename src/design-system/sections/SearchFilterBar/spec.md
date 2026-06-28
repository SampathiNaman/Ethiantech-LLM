# SearchFilterBar Section

## Purpose
Search bar with filter controls for course listing pages. Combines search input, category/sort dropdowns, and result count.

## Data Model
```js
{
  placeholder: string,
  resultCount: number,
  sortOptions: [{ value: string, label: string }],
  onSearch: (query: string) => void,
  onSortChange: (value: string) => void
}
```

## Component Instances
- **Input** — search query input with icon
- **Button** — search submit (variant: primary)
- **Text** — result count (variant: body-sm)

## Interaction Patterns
- Typing updates search query in parent
- Sort dropdown changes ordering

## Responsive Behavior
- Desktop: horizontal layout
- Mobile: stacked, full width
