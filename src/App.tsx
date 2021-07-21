import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        {/* <Switch>
        <Route exact path="/" component={Home} />
         
        </Switch> */}
      </div>
    </Router>
  );
}
export default App;
