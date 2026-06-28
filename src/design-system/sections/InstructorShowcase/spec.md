# InstructorShowcase Section

## Purpose
Featured instructors grid displaying 3 instructor profile cards. Includes avatar, rating, name, role, and course count.

## Data Model
```js
{
  title: string,
  instructors: [{
    id: string|number,
    name: string,
    role: string,
    avatar: string,
    rating: number,
    courseCount: number,
    specialty: string
  }]
}
```

## Component Instances
- **Text** — section title, instructor name, role, specialty
- **Card** — container for each instructor (variant: default)
- **Avatar** — instructor profile photo (size: 56)
- **Rating** — instructor rating
- **Badge** — course count badge (variant: info)

## Interaction Patterns
- Card hover: elevation increase
- Card click: navigate to instructor profile

## Responsive Behavior
- Desktop: 3 cards in a row
- Tablet: 2 cards
- Mobile: single column, stacked
