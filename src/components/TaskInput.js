import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="task-input mb-3">
      <input
        type="text"
        className="form-control"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        placeholder="Enter new task"
      />
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
