import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const SignUpPage = props => (
  <Grid item xs={12} >
    <Paper className={props.classes.paper}>
      <h1>Sign Up</h1>
      <p>
        [Outline] This is the page where you will sign up for the application.
      </p>
      <p>Below you will enter your basic info</p>
      <p>Name: [John Smith]</p>
      <p>Sports: [Basketball, Football]</p>
      <Button
        fullWidth
        onClick={() => props.gotoMainMap()}
        variant="raised"
        color="primary"
      >
        Finish Sign Up
      </Button>
    </Paper>
  </Grid>
);

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoMainMap: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignUpPage);
