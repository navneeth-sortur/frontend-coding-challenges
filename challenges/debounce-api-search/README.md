# Debounce API Request - Frontend Machine Coding Round

## Problem Statement

Build a search component with the following requirements:

- The component must include a text input field.
- As the user types, trigger an API request to:  
  `https://jsonplaceholder.typicode.com/users?name_like=<input>`
- Implement **debouncing** so that the API is not called on every keystroke.
- Show **loading**, **success**, and **error** states.
- If a new request is initiated, **cancel the previous request** to prevent stale results.
- Only the **latest** successful response should be displayed.
