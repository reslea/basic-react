import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTask }) {
  return (    
  <ul>
    {tasks.map(t => (
    <li key={t.id}>
      <Task task={t} toggle={toggleTask} />
    </li>))}
  </ul>
  )
}

export default React.memo(TaskList);