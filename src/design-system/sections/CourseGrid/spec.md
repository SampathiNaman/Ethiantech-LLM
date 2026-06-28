# CourseGrid Section

## Purpose
Grid of course cards. Used on Home page (4 cards) and Course List page (12 cards, 3 rows). Supports configurable columns.

## Data Model
```js
{
  title: string,
  courses: [{
    id: string|number,
    title: string,
    instructor: string,
    rating: number,
    reviews: number,
    price: number,
    originalPrice: number,
    thumbnail: string,
    badge: string
  }],
  columns: number // 2, 3, or 4
}
```

## Component Instances
- **Text** — section title (variant: heading-md)
- **CourseCard** — composition for each course

## Interaction Patterns
- Card click: navigate to Course Details page
- Hover: card elevation increase per Card spec

## Responsive Behavior
- Desktop (4-col): 4 cards per row
- Desktop (3-col): 3 cards per row  
- Tablet: 2 columns
- Mobile: 1 column, full-width cards
