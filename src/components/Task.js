import React from 'react';

function Task({ task, toggle }) {
  const { id, title, isDone } = task;
  console.log(task.id);

  return (<div className="task">
    <input type="checkbox" checked={isDone} onChange={() => toggle(id)} />
    <span>{title}</span>
  </div>);
}

export default React.memo(Task);