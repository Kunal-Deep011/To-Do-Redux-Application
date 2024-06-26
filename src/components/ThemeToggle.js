import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/action';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
