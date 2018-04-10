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

const Profile = props => (
  <Grid item xs={12} >
    <Paper className={props.classes.paper}>
      <h1>John Stevens</h1>
      <p>This is where stats, a bio, etc will be listed</p>
    </Paper>
  </Grid>
);

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
