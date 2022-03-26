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
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <About />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
