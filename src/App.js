import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);


  return (
    <div className={`app container mt-5 ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className='header'>
         <div>TO-do-Application</div> 
      </div>
      <ThemeToggle />
      <h1 className="text-center">To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
