# EarningsChart Section

## Purpose
Monthly earnings bar chart displayed on the TutorDashboard. Each bar represents monthly revenue with alternating brand colors.

## Data Model
```js
{
  title: string,
  data: [{ month: string, amount: number }],
  badge: string
}
```

## Component Instances
- **Text** — title, month labels, hover tooltip values
- **Surface** — container (variant: default)

## Interaction Patterns
- Hover over bar: show exact amount tooltip
- Bars use alternating colors (#FF532E, #D62A91)

## Responsive Behavior
- Full width on desktop
- Horizontal scroll on mobile if overflows
