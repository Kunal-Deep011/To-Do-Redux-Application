# To-Do-Application

# Project Overview :
    This project is a responsive To-Do application built using ReactJS with Redux for state management. Users can add, view, edit, mark as complete, and delete tasks. 
    The application supports light and dark themes, which can be toggled using a switch. Task data persists using local storage, ensuring tasks are retained across 
    page reloads.
    
# Component and Functionality Description :

 # 1) App Component `src/App.js` :
      1) Serves as the main component.
      2)Integrates the TaskInput, TaskList, and ThemeToggle components.
      3)Applies theme to the body based on Redux state.
      
 # 2) TaskInput Component `src/components/TaskInput.js` :
    1) Contains an input field and a button.
    2) Allows users to add new tasks to the list.
    
 # 3) TaskList Component `src/components/TaskList.js` :
    1) Displays the list of tasks.
    2) Maps over tasks from Redux state to render individual TaskItem components.
    
 # 4) TaskItem Component `src/components/TaskItem.js` :
    1) Represents a single task.
    2)Allows editing, marking as complete, and deleting the task.
    3) Uses CSS to handle long task sentences and keep buttons aligned.
    
 # 5) ThemeToggle Component `src/components/ThemeToggle.js` :
    1) Provides a switch to toggle between light and dark themes.
    2) Dispatches an action to update the theme in Redux state.
    
 # 6) Redux Setup :
    1) Actions `src/redux/actions.js`: Define action types and creators for adding, deleting, editing tasks, toggling task completion, and toggling themes.
    2) Reducers `src/redux/reducers.js` : Handle state changes based on dispatched actions.
    3) Store `src/redux/store.js` : Configures the Redux store with reducers and middleware.
    
 # 7) CSS `src/App.css` :
    1) Styles the application.
    2) Includes styles for light and dark themes, and ensures proper layout and overflow handling for tasks and buttons. 
    
# Conclusions :
     This To-Do application demonstrates the use of functional components, React hooks (useState, useEffect), and state management with Redux, ensuring a scalable and 
     maintainable codebase.
     
# Screenshots :
    Laptop-View :   
![laptop-visual](https://github.com/Kunal-Deep011/To-Do-Redux-Application/assets/117732649/a5f7a49f-3224-4d34-ae52-415376fe1f3e)

    Tablet-View :
![tab-visual](https://github.com/Kunal-Deep011/To-Do-Redux-Application/assets/117732649/473eb812-b886-4476-8cda-ea5c92fe6888)

    Mobile-View :
![mobile-visual](https://github.com/Kunal-Deep011/To-Do-Redux-Application/assets/117732649/4ec6638b-7af8-44f6-b01b-f518f9dddc7d)






