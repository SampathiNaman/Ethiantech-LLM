# HeroBanner Section

## Purpose
Full-width hero section for the Home page. Contains headline, subtitle, and search bar. Background is white with full-width spanning.

## Data Model
```js
{
  headline: string,
  subtitle: string,
  search: { placeholder: string, buttonLabel: string }
}
```

## Component Instances
- **Text** — headline (variant: display-lg), subtitle (variant: body-lg)
- **SearchBar** — composition for search input + button

## Interaction Patterns
- Search: on submit, filter courses by query, navigate to CourseList page
- Responsive typography: headline shrinks on mobile

## Responsive Behavior
- Desktop: centered layout, large headline (48-56px)
- Tablet: 32px headline, reduced padding
- Mobile: 24px headline, full-width search, stacked layout
