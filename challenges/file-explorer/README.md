# React File Explorer (VS Code-like)

A responsive, modern file explorer component built with React that mimics the VS Code file tree functionality.  
Supports folders/files, nested folders, add/rename/delete, inline editing, and local persistence.

## Features

- Tree view with nested folders and files
- Add folder or file (toolbar and folder-specific)
- Inline rename
- Delete nodes (folder deletion removes nested content)
<!-- - Persist state to `localStorage`
- Keyboard accessible basics and responsive layout
- Clean, modular code with unit-tested pure utilities -->

## Tech stack

- React (Vite)
- JavaScript (ES6+)
<!-- - Tailwind CSS (optional, configurable) -->
- react-icons
<!-- - Jest + React Testing Library (for unit & UI tests) -->

## Project structure

See `src/` for components, context, utils and tests. `treeUtils.js` contains pure functions for tree operations (add, rename, delete, toggle).

## Getting started

```bash
# create the project from template (recommended)
npm create vite@latest file-explorer --template react
cd file-explorer

# install deps
npm install react-icons
# if using Tailwind:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# install dev/test tools
npm install -D jest @testing-library/react @testing-library/jest-dom

# run
npm run dev
```

## Usage

- Top toolbar has `Add Folder` and `Add File`. Clicking shows an inline input.
- Click the pencil icon to rename.
- Click the trash icon to delete (folders require confirmation).

## Notes & future ideas

- Add file previews/open file editor pane
- Drag & drop to reorder / move nodes
- Backend sync & multi-user collaboration
- Rename duplicate name detection with smarter suggestions

## Contributing

PRs welcome. Please follow the project's ESLint/Prettier rules.

## License

MIT
