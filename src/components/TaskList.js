import React, { useContext } from 'react';
import { TasksContext } from '../contexts/tasksContext';
import Task from './Task';

function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (    
  <ul>
    {tasks.map(t => (
    <li key={t.id}>
      <Task task={t} />
    </li>))}
  </ul>
  )
}

export default React.memo(TaskList);