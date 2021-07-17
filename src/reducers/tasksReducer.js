export function tasksReducer(prevState, { action, payload }) {
  switch (action) {
    case 'addTask':
      const newTask = { id: Date.now(), title: payload.text, isDone: false };
      const tasks = [...prevState.tasks, newTask];
      return {
        tasks,
        toDoCount: countToDo(tasks),
      };

    case 'toggleTask': {
      const tasks = prevState.tasks
        .map(task =>
          task.id === payload.id
            ? { ...task, isDone: !task.isDone }
            : task
      );
      
      return {
        tasks,
        toDoCount: countToDo(tasks),
      };
    }

    case 'deleteTask': {
      const tasks = prevState.tasks.filter(t => t.id !== payload.id);
      
      return {
        tasks,
        toDoCount: countToDo(tasks),
      };
    }
    default:
      return prevState;
  }
}

export const addTask = (text) => ({ 
  action: 'addTask', 
  payload: { text },
});

export const toggleTask = (id) => ({ 
  action: 'toggleTask', 
  payload: { id },
});

export const removeTask = (id) => ({ 
  action: 'deleteTask',
  payload: { id }
});

function countToDo(tasks) {
  return tasks.filter(t => !t.isDone).length;
}