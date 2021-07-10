import React from 'react';

function Button({ action, text }) {
  console.log(`${text}Button render`);

  return <button onClick={action}>{text}</button>
}

export default React.memo(Button);