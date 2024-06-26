import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/action';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleEdit = () => {
    if (newTask.trim()) {
      dispatch(editTask(task.id, newTask));
      setIsEditing(false);
    }
  };
  const handleToggleCompletion = () => dispatch(toggleTaskCompletion(task.id));

  return (
    <div className={`task-item d-flex justify-content-between align-items-center mb-2 p-2 border rounded ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control me-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-success me-2" onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <div className="task-actions">
            <button className="btn btn-secondary me-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-warning me-2 completeBtn" onClick={handleToggleCompletion}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
