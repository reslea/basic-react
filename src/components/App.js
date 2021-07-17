import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TasksPage from './TasksPage';
import AppCounter from './AppCounter/AppCounter';
import { tasksReducer } from '../reducers/tasksReducer';
import { TasksContext, TasksDispatchContext } from '../contexts/tasksContext';
import OldCheckoutPage from './OldCheckoutPage';
import CheckoutPage from './CheckoutPage';

function App() {  
  const [tasksState, dispatch] = useReducer(tasksReducer, { tasks: [], toDoCount: 0 });
  return (
  <>
    <Router>
      <TasksDispatchContext.Provider value={dispatch}>
        <TasksContext.Provider value={tasksState}>
          <nav>
            <ul>
              <li><Link to='/'>Tasks</Link></li>
              <li><Link to='/counter'>Counter</Link></li>
              <li><Link to='/old-checkout'>Old Checkout</Link></li>
              <li><Link to='/checkout'>Checkout</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/' exact component={TasksPage} />
            <Route path='/counter' component={AppCounter} />
            <Route path='/old-checkout' component={OldCheckoutPage} />
            <Route path='/checkout' component={CheckoutPage} />
          </Switch>
        </TasksContext.Provider>
      </TasksDispatchContext.Provider>
    </Router>
  </>)
}

export default App;
