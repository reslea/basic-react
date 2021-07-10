import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [text, setText] = useState('');

  function onAdd() {
    setText('');
    addTask(text);
  }
  
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onAdd}>Add</button>
    </>);
}

export default React.memo(AddTask);