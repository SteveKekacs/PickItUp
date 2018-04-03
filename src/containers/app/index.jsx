// eslint jsx-a11y/anchor-is-valid: 0
import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../login-page';
import About from '../about';

// TODO: make it so if this isn't rendered (on GHPages force a timeout so that
// it clicks the home link (HACK)
// <header>
//   <Link to="/">Login</Link>
//   <Link to="/about-us">About</Link>
// </header>
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);
export default App;
