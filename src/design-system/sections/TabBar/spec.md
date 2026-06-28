# TabBar Section

## Purpose
Content section tabs for switching between Overview, Q&A, Notes, and Resources on the Course Video page.

## Data Model
```js
{
  tabs: [{ id: string, label: string }],
  activeTab: string,
  onTabChange: (tabId: string) => void
}
```

## Component Instances
- **Text** — tab labels (variant: body-sm, weight: medium)

## Interaction Patterns
- Click tab to switch active state
- Active tab has brand pink underline indicator

## Responsive Behavior
- Horizontal scroll on mobile if tabs overflow
