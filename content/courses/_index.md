---
title: Courses
summary: My courses
type: landing

cascade:
  - target:
      path: '{/courses/*/**}'
    type: docs
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: courses
    content:
      title: Notes
      filters:
        folders:
          - courses
    design:
      view: masonry
      show_read_time: false
      show_date: false
      show_read_more: false
      columns: 3
---
