# LogoCloud Section

## Purpose
Trusted-by bar displaying partner/client logos and statistic counters. Builds credibility for new visitors.

## Data Model
```js
{
  title: string,
  logos: [{ src: string, alt: string }],
  stats: [{ value: string, label: string }]
}
```

## Component Instances
- **Text** — title, stat values (variant: heading-lg), stat labels (variant: body-sm)
- **Image** — client logos

## Interaction Patterns
- Pure presentational, no interactive elements
- Stats use accent colors (orange, green, blue, yellow per Figma)

## Responsive Behavior
- Desktop: logos in horizontal row, stats in 2x2 grid
- Tablet: logos wrap to 2 rows
- Mobile: single column, stats stacked
