# DashboardSidebar Section

## Purpose
Left sidebar navigation for all dashboard pages (TutorDashboard, TutorCourses, AddCourse, StudentsEnrolled). Contains brand logo and nav items with active state indicator.

## Data Model
```js
{
  activeItem: string,
  items: [{ id: string, label: string, icon: string, href: string }],
  onNavigate: (href: string) => void
}
```

## Component Instances
- **Text** — nav item labels (variant: body-md)
- **Icon** — nav item icons

## Interaction Patterns
- Click nav item to navigate, highlight active item
- Active item shows pink accent bar on left

## Responsive Behavior
- Desktop: fixed left sidebar (w-64)
- Mobile: hidden, hamburger toggle
