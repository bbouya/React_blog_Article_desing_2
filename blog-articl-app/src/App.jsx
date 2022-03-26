import React from 'react';
import './App.css';
//import {Route , Router} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Blog from './pages/Blog'
import Home from './pages/Home';

//import {BrowserRouter as Router, Route, Switch, IndexRoute, Link} from 'react-router-dom';
function App() {
  const Homes = () => <h1>ana ayoub</h1>
  const About = () => <h1>About Us test</h1>
  const Contact = () => <h2>Contact pages</h2>
  const AllContacts = () => <h2>ALL pages</h2>
  

  return (
    <div className='container'>
      <Switch>
        
        <Route path='/' exact component={Home}/>
        <Route path='/blog/:id' component = {Blog}/>

      </Switch>
    </div>
  );
}

export default App;
