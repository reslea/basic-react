import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TasksPage from './TasksPage';
import AppCounter from './AppCounter';

function App() {
  return (
  <>
    <Router>      
      <nav>
        <ul>
          <li><Link to='/'>Tasks</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={TasksPage} />
        <Route path='/counter' component={AppCounter} />
      </Switch>
    </Router>
  </>)
}

export default App;
