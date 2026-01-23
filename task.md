# AI Generation Tasks & Prompts Log

This document tracks the prompts used to generate the application code via AI assistance.

## Phase 1: Project Initialization & Structure
**Prompt:**
> "Create a new React project using Vite. The app should be a Task Manager. Set up the basic project structure and clean up the default Vite template files."

## Phase 2: Core Logic Implementation
**Prompt:**
> "I need a functional To-Do list component. It should have:
> 1. An input field for new tasks.
> 2. An 'Add' button.
> 3. A list displaying the tasks.
> 4. A delete button for each task.
> Use `useState` to manage the array of tasks."

## Phase 3: Advanced Features (Persistence & Filtering)
**Prompt:**
> "Upgrade the existing To-Do app with the following features:
> 1. **LocalStorage:** Save tasks so they don't disappear on refresh. Use a `useEffect` hook.
> 2. **Filtering:** Add buttons to show 'All', 'Active', or 'Completed' tasks.
> 3. **Completion:** Allow clicking a task to toggle it as 'Done' (with strikethrough style)."

## Phase 4: Styling & UI
**Prompt:**
> "Style the application to look modern and centered on the screen.
> - Use a 'Kawaii' or soft color palette (pinks, yellows).
> - Center the main card on the screen.
> - Make it responsive for mobile devices.
> - Fix the layout so the input and button are aligned correctly."

## Phase 5: Testing (Bonus)
**Prompt:**
> "I want to implement Unit Tests with Vitest.
> Please provide the setup steps for `vite.config.js` and `setupTests.js`.
> Create a test file `App.test.jsx` that checks:
> 1. If the title renders.
> 2. If adding a task works.
> 3. If deleting a task works."