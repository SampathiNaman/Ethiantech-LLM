# TopBar Section

## Purpose
Dashboard top header bar with greeting, notifications, and profile avatar. Used on all dashboard pages.

## Data Model
```js
{
  greeting: string,
  notifications: number,
  profile: { src: string, name: string }
}
```

## Component Instances
- **Text** — greeting (variant: heading-sm)
- **Avatar** — profile photo (size: 40)
- **Badge** — notification count (variant: primary)

## Interaction Patterns
- Notification icon click: open notification panel
- Profile click: dropdown menu (settings, logout)

## Responsive Behavior
- Fixed height (h-20), full width
- Mobile: condensed padding
