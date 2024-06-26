import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK_COMPLETION, TOGGLE_THEME } from './action';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  theme: "light", // default theme
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case EDIT_TASK:
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );
      localStorage.setItem('tasks', JSON.stringify(editedTasks));
      return {
        ...state,
        tasks: editedTasks,
      };
    case TOGGLE_TASK_COMPLETION:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
      case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default tasksReducer;
