# StatsCardGrid Section

## Purpose
Dashboard statistics cards row showing key metrics (Total Enrolments, Total Courses, Total Earnings).

## Data Model
```js
{
  cards: [{ label: string, value: string|number, icon: 'enrollment'|'courses'|'earnings' }]
}
```

## Component Instances
- **Text** — label (variant: body-sm), value (variant: heading-lg)
- **Surface** — card container (variant: default)

## Interaction Patterns
- Pure presentational

## Responsive Behavior
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: single column
