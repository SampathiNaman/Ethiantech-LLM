# NewsletterSignup Section

## Purpose
Email newsletter signup section with heading, description, email input, and subscribe button.

## Data Model
```js
{
  title: string,
  description: string,
  placeholder: string,
  buttonLabel: string,
  bgVariant: 'light' | 'dark'
}
```

## Component Instances
- **Text** — title, description
- **Input** — email input
- **Button** — subscribe (variant: primary)

## Interaction Patterns
- Email validation on submit
- Success state with thank-you message

## Responsive Behavior
- Desktop: centered inline form
- Mobile: stacked input + button, full width
