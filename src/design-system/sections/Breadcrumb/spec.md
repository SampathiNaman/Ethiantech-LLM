# Breadcrumb Section

## Purpose
Navigation breadcrumb trail showing the current page path. Used on Course Details and Course Video pages.

## Data Model
```js
{
  items: [{ label: string, href: string | null }]
}
```

## Component Instances
- **Text** — each crumb label with separator "/"

## Interaction Patterns
- Clickable crumbs navigate to parent pages
- Last crumb (current page) is plain text, not a link

## Responsive Behavior
- Truncated on mobile with ellipsis for middle crumbs
