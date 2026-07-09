---
trigger: always_on
---

CONCENTRIC CORNER RULE

When designing nested rounded rectangles, always make the child corner radius concentric with the parent.

Formula:
childRadius = max(0, parentRadius - innerPadding)

Equivalent:
parentRadius = childRadius + innerPadding

Never use the same radius for both parent and child when there is padding between them, because this makes the corners visually misaligned.

Example:
Parent card radius = 32px
Padding between parent and child = 16px
Child card radius = 16px

Use the same corner style/curve for parent and child, preferably continuous/squircle corners for Apple-like UI.