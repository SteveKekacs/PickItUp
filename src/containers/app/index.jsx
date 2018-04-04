// eslint jsx-a11y/anchor-is-valid: 0
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import LoginPage from '../login-page';
import AppMenu from '../menu';
import MainMap from '../main-map';
import About from '../about';

// TODO: make it so if this isn't rendered (on GHPages force a timeout so that
// it clicks the home link (HACK)
// <header>
//   <Link to="/">Login</Link>
//   <Link to="/about-us">About</Link>
// </header>

const topAppHeight = 56;

const propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  page: state.routing.location.pathname,
});

const styles = {
  root: {
    flexGrow: 1,
    overflow: "hidden",
    height: "100vh",
  },
  mainGrid: {
    marginTop: "1px",
    overflowY: "scroll",
    height: `calc(100vh - ${topAppHeight}px)`,
  },
};

function App(props) {
  const { classes } = props;
  return (
    <main>
      <div className={classes.root}>
        {props.page !== "/" && <AppMenu />}
        <Route exact path="/" component={LoginPage} />
        <Grid container spacing={8} className={classes.mainGrid}>
          <Route exact path="/home" component={MainMap} />
          <Route exact path="/profile" component={About} />
          <Route exact path="/friends" component={About} />
          <Route exact path="/rewards" component={About} />
          <Route exact path="/settings" component={About} />
          <Route exact path="/about-us" component={About} />
        </Grid>
      </div>
    </main>
  );
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

// Connection
export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(App));

