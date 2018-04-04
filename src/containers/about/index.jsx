import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const AboutPage = (props) => ([
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>,
  <Grid item xs={6} >
    <Paper className={props.classes.paper}>
      <h1>About Us</h1>
      <p>Hello world!</p>
    </Paper>
  </Grid>
]
);

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);
