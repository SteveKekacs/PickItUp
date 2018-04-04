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

const Rewards = props => (
  <Grid item xs={12} >
    <Paper className={props.classes.paper}>
      <h1>Searchable Rewards</h1>
      <p>This is where you could search rewards</p>
      <p>Reward 20% here </p>
      <p>Reward 20% here </p>
      <p>Reward 20% here </p>
      <p>Reward 20% here </p>
    </Paper>
  </Grid>
);

Rewards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rewards);
