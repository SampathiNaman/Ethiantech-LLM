# Footer Section

## Purpose
Dark-themed footer with logo, navigation columns, newsletter signup, and copyright. Used on all pages.

## Data Model
```js
{
  logo: { src: string, alt: string },
  columns: [{ title: string, links: [{ label: string, href: string }] }],
  newsletter: { placeholder: string, buttonLabel: string },
  copyright: string
}
```

## Component Instances
- **Image** — footer logo
- **Text** — column titles (variant: body-md, weight: semibold), link labels (variant: body-sm)
- **Input** — newsletter email input
- **Button** — subscribe button (variant: primary, size: sm)

## Interaction Patterns
- Newsletter: email validation on submit
- Links: hover color transition to brand pink
- Copyright: static text centered at bottom

## Responsive Behavior
- Desktop: 4-column layout (logo + 3 link columns), newsletter on right
- Tablet: 2-column layout
- Mobile: single column, stacked
