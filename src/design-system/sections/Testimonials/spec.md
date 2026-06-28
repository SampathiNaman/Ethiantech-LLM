# Testimonials Section

## Purpose
Student/instructor testimonial cards with quotes. Builds social proof.

## Data Model
```js
{
  title: string,
  testimonials: [{
    id: string|number,
    quote: string,
    name: string,
    role: string,
    avatar: string,
    rating: number
  }]
}
```

## Component Instances
- **Text** — section title, quote, name, role
- **Card** — testimonial container
- **Avatar** — user photo
- **Rating** — star rating

## Interaction Patterns
- Cards are static, read-only

## Responsive Behavior
- Desktop: 2-3 cards in a row
- Tablet: 2 cards
- Mobile: single column
