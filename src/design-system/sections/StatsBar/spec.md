# StatsBar Section

## Purpose
Horizontal statistics bar displaying key platform metrics. Used on Home page.

## Data Model
```js
{
  stats: [{ value: string, label: string, icon: string }]
}
```

## Component Instances
- **Text** — stat values (variant: display-sm), labels (variant: body-sm)
- **Surface** — container (variant: light)

## Interaction Patterns
- Pure presentational

## Responsive Behavior
- Desktop: horizontal row
- Tablet: 2x2 grid
- Mobile: single column
