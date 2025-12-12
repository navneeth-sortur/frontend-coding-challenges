# Hover based timer - Frontend Machine Coding Round

## Problem

Build a hover-based timer component in React that changes how fast the timer increments depending on where the user places the mouse relative to two nested rectangles.

## Specification

### Layout

#### Outer Rectangle

- **Size**: 400px × 400px
- Acts as the main boundary and contains the inner rectangle.

#### Inner Rectangle

- **Size**: 200px × 200px
- Positioned somewhere inside the outer rectangle (can be centered or offset).

#### Timer Display

- A timer display (simple text) must be visible above the rectangles.

### Timer Behavior Rules

- **When the mouse is inside the inner rectangle**: The timer increments by 5 seconds every second.
- **When the mouse is inside the outer rectangle but outside the inner rectangle**: The timer increments by 1 second every second.
- **When the mouse is outside the outer rectangle**: The timer stops (no increment).

## Requirements

- Implement the solution using **React**.
- Do not use external libraries for mouse tracking or timers (use native browser events and `setInterval` / `clearInterval` or equivalent).
- Use event handlers such as `onMouseMove` and `onMouseLeave`, and React refs (`useRef`) or DOM APIs to determine element boundaries.

## Acceptance Criteria

- The UI displays the outer rectangle, the inner rectangle, and the timer.
- Timer increments by the correct amount depending on hover location.
- Timer stops when the cursor leaves the outer rectangle.
- Behavior is consistent when the mouse moves rapidly between zones.
