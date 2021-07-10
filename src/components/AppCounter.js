import React, { useState } from 'react';

import Button from './Button';

function AppCounter({ location }) {
  const searchValues = location.search?.split('=');
  const initialValue = searchValues.length > 0 
  ? parseInt(searchValues[1]) 
  : 0;

  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter(counter + 1);
  }
  
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <Button action={increment} text={'+'} />
      {counter}
      <Button action={decrement} text={'-'} />
    </div>
  );
}

export default AppCounter;
