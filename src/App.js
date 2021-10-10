import React from 'react';
import './assests/scss/custom.scss';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
