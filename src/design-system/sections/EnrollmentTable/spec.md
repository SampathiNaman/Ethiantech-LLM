# EnrollmentTable Section

## Purpose
Detailed enrollment log data table showing student name, course, date, and status. Used on TutorDashboard.

## Data Model
```js
{
  title: string,
  columns: [{ key: string, label: string }],
  rows: [{ id: string|number, student: { name: string, avatar: string }, course: string, date: string, status: string }]
}
```

## Component Instances
- **Text** — column headers, cell values
- **Avatar** — student photo (size: 32)
- **Badge** — status indicator (variant: success)

## Interaction Patterns
- Row hover: background highlight
- Sortable columns (optional)

## Responsive Behavior
- Horizontal scroll on mobile
- Desktop: full table layout
