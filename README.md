# To-Do-Application

# Project Overview :

    This project is a responsive To-Do application built using ReactJS with Redux for state management. Users can add, view, edit, mark as complete, and delete tasks. 
    The application supports light and dark themes, which can be toggled using a switch. Task data persists using local storage, ensuring tasks are retained across page 
    reloads.

# Component and Functionality Description :

     # 1) App Component (`src/App.js`):
      1) Serves as the main component.
      2)Integrates the TaskInput, TaskList, and ThemeToggle components.
      3)Applies theme to the body based on Redux state.
      
    # 2) TaskInput Component (src/components/TaskInput.js):

Contains an input field and a button.
Allows users to add new tasks to the list.
TaskList Component (src/components/TaskList.js):

Displays the list of tasks.
Maps over tasks from Redux state to render individual TaskItem components.
TaskItem Component (src/components/TaskItem.js):

Represents a single task.
Allows editing, marking as complete, and deleting the task.
Uses CSS to handle long task sentences and keep buttons aligned.
ThemeToggle Component (src/components/ThemeToggle.js):

Provides a switch to toggle between light and dark themes.
Dispatches an action to update the theme in Redux state.
Redux Setup:

Actions (src/redux/actions.js): Define action types and creators for adding, deleting, editing tasks, toggling task completion, and toggling themes.
Reducers (src/redux/reducers.js): Handle state changes based on dispatched actions.
Store (src/redux/store.js): Configures the Redux store with reducers and middleware.
CSS (src/App.css):

Styles the application.
Includes styles for light and dark themes, and ensures proper layout and overflow handling for tasks and buttons.     



