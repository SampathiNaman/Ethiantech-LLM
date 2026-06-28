# Navbar Section

## Purpose
Full-width public site header with logo, navigation links, and CTA button. Used on all public-facing pages (Home, Course List, Course Details, Course Video).

## Data Model
```js
{
  logo: { src: string, alt: string, href: string },
  links: [{ label: string, href: string, active: boolean }],
  cta: { label: string, href: string },
  profile: { avatar: string, name: string } | null
}
```

## Component Instances
- **Image** — logo display
- **Text** — nav link labels (variant: body-md)
- **Button** — CTA button (variant: primary, size: sm)
- **Avatar** — user profile when logged in (size: 32)

## Interaction Patterns
- Nav links: hover underline effect, active state with brand color
- CTA button: hover state per Button primitive spec
- Mobile: hamburger menu toggle (default: hidden, opens full-width menu)
- Sticky: fixed top on scroll

## Responsive Behavior
- Desktop: horizontal nav with links centered, logo left, CTA right
- Tablet (768-1024px): shrink link text, reduce padding
- Mobile (<768px): hamburger menu, full-screen overlay, stacked links
