import React from 'react';
import './App.css';
//import {Route} from 'react-router-dom';
import Blog from './pages/Blog'
import Home from './pages/Home';

import {BrowserRouter as Router, Route, Switch, IndexRoute, Link} from 'react-router-dom';
function App() {
  const Homes = () => <h1>ana ayoub</h1>
  const About = () => <h1>About Us test</h1>
  return (
    <Router>
    
        <Route path ="/about" component = {About} />
        <Route exact  path ="/" component = {Homes} />
    
  </Router>
  );
}

export default App;
