# Task Manager

A simple task manager application that allows users to add, complete, and delete tasks. The application uses `localStorage` to persist tasks across browser sessions.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persist tasks in `localStorage`

## Usage

1. **Add a Task**: Type a task into the input field and click the "Add Task" button.
2. **Mark as Completed**: Click the checkbox next to a task to mark it as completed. The task will have a strike-through effect.
3. **Delete a Task**: Click the trash icon next to a task to delete it.

## Code Overview

The main JavaScript file is `index.js`, which contains the logic for adding, completing, and deleting tasks, as well as persisting them in `localStorage`.

### Adding a Task

When a task is added, it is saved in `localStorage` and displayed in the task list.

### Completing a Task

When a task is marked as completed, its state is updated in `localStorage`, and a `done` class is added to apply a strike-through effect.

### Deleting a Task

When a task is deleted, it is removed from `localStorage` and the task list.

### Event Listeners
The application uses the following event listeners:
- `DOMContentLoaded` to load tasks from `localStorage` when the page loads.
- `submit` to handle the task form submission.
- `click` to handle task deletion.
- `change` to handle task completion.

