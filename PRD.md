# Task Manager App — Product Requirements Document (PRD)

## 1. Overview
This document describes the product requirements for a "Task Manager" application built with **React** and **Vite**. The goal is to provide a clean, responsive interface for managing daily tasks with persistent storage.

## 2. Tech Stack
- **Framework:** React 18+
- **Build Tool:** Vite
- **Language:** JavaScript (ES6+)
- **Styling:** CSS Modules / Standard CSS (Responsive Design)
- **Testing:** Vitest & React Testing Library
- **Storage:** LocalStorage API

## 3. Functional Requirements
### Core Features
1.  **Add Task:** User can type a task and add it to the list via button or "Enter" key.
2.  **List Tasks:** Display all tasks dynamically.
3.  **Delete Task:** Remove a task permanently.
4.  **Mark as Done:** Toggle task completion status (visual strikethrough).
5.  **Filter Tasks:** Filter view by "All", "Active", and "Completed".
6.  **Task Counter:** Show remaining active tasks count.

### Non-Functional Requirements
1.  **Persistence:** Data must be saved to `localStorage` and restored on page refresh.
2.  **Responsiveness:** Layout must adapt to mobile and desktop screens.
3.  **Performance:** No unnecessary re-renders.

## 4. Success Metrics
- Users can add, edit, and delete tasks without errors.
- Data persists after closing and reopening the browser.
- All Unit Tests (Vitest) pass successfully.