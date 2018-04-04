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

const Friends = props => (
  <Grid item xs={12} >
    <Paper className={props.classes.paper}>
      <h1>Searchable List Below</h1>
      <p>This is a list of your friends, below here you can click on them to view their profiles</p>
      <p> EXAMPLE FRIEND </p>
      <p> EXAMPLE FRIEND </p>
      <p> EXAMPLE FRIEND </p>
    </Paper>
  </Grid>
);

Friends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Friends);
