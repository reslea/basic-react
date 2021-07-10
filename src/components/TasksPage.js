import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = { id: Date.now(), title: text, isDone: false };

    setTasks([...tasks, newTask]);
  };

  function toggleTask(id) {
    setTasks(tasks
      .map(task =>
        task.id === id 
          ? { ...task, isDone: !task.isDone }
          : task
    ));
  };

  return (
    <div>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
      <AddTask addTask={addTask}/>
    </div>
  )
}

export default React.memo(TasksPage);