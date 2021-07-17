import React, { useCallback, useReducer } from 'react';

import Button from '../Button';

import './AppCounter.css';
import { counterReducer } from '../../reducers/counterReducer';

function AppCounter({ location }) {
  // const searchValues = location.search?.split('=');
  // const initialValue = searchValues.length > 0 
  // ? parseInt(searchValues[1]) 
  // : 0;

  const [counter, dispatch] = useReducer(counterReducer, 15);

  const increment = useCallback(() => 
    dispatch({ actionType: 'increment' }),
    [dispatch]);

  const decrement = useCallback(() => 
    dispatch({ actionType: 'decrement' }),
    [dispatch]);

  return (
    <div className="App">
      <Button action={increment} text={'+'} />
      {counter}
      <Button action={decrement} text={'-'} />
    </div>
  );
}

export default AppCounter;
