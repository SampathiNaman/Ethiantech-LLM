# CurriculumAccordion Section

## Purpose
Course curriculum section with expandable accordion items showing chapters and individual lessons with duration.

## Data Model
```js
{
  modules: [{
    id: string|number,
    title: string,
    lessons: [{ id: string|number, title: string, duration: string, completed: boolean }]
  }]
}
```

## Component Instances
- **Accordion** — composition for expandable items
- **Text** — module title, lesson title, duration
- **Badge** — completed indicator (variant: success)
- **Icon** — play/check icons

## Interaction Patterns
- Click module header to expand/collapse
- Click lesson to navigate to video
- Completed lessons show check icon

## Responsive Behavior
- Full width on all screen sizes
