import React, { useContext } from 'react';
import { removeTask, toggleTask } from '../reducers/tasksReducer';
import { TasksDispatchContext } from '../contexts/tasksContext';

function Task({ task }) {
  const { id, title, isDone } = task;
  console.log(task.id);

  const tasksDispatch = useContext(TasksDispatchContext);

  return (<div className="task">
    <input 
      type="checkbox" 
      checked={isDone} 
      onChange={() => tasksDispatch(toggleTask(id))} 
    />
    <span>{title}</span>
    <button onClick={() => tasksDispatch(removeTask(id))}>X</button>
  </div>);
}

export default React.memo(Task);