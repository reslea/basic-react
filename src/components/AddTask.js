import React, { useContext, useState } from 'react';
import { addTask } from '../reducers/tasksReducer';
import { TasksDispatchContext } from '../contexts/tasksContext';

function AddTask() {
  const [text, setText] = useState('');
  const tasksDispatch = useContext(TasksDispatchContext);

  function onAdd() {
    setText('');
    tasksDispatch(addTask(text));
  }
  
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onAdd}>Add</button>
    </>);
}

export default React.memo(AddTask);