import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function TasksPage() {
  return (
    <div>
      <TaskList />
      <AddTask />
    </div>
  )
}

export default React.memo(TasksPage);