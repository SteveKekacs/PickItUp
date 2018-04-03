// eslint jsx-a11y/anchor-is-valid: 0
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

// TODO: make it so if this isn't rendered (on GHPages force a timeout so that
// it clicks the home link (HACK)
const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);
export default App;
