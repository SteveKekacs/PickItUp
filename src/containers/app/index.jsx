// eslint jsx-a11y/anchor-is-valid: 0
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../login-page';
import AppMenu from '../menu';
import About from '../about';

// TODO: make it so if this isn't rendered (on GHPages force a timeout so that
// it clicks the home link (HACK)
// <header>
//   <Link to="/">Login</Link>
//   <Link to="/about-us">About</Link>
// </header>

const propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  page: state.routing.location.pathname,
});

const App = props => (
  <div>
    <main>
      <Route exact path="/" component={LoginPage} />
      {props.page !== "/" && <AppMenu />}

    </main>
  </div>
);
App.propTypes = propTypes;
      // <Route exact path="/about-us" component={About} />
      // <Route exact path="/profile" component={Profile} />
      // <Route exact path="/home" component={MainMap} />

// Connection
export default connect(
  mapStateToProps,
  null,
)(App);

