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

const InGameScreen = props => (
  <Grid item xs={12} >
    <Paper className={props.classes.paper}>
      <h1>Basketball Game with Manav</h1>
      <p>
        This is where you see details about your game like the time, players, location, chat...
      </p>
      <p>Scheduled Start: 6:30pm</p>
      <p>Duration: 45 minutes</p>
      <p>Skill Level: Advanced</p>
      <p>Players: Ty Rocca, Jeff Smith, Simi Jones, and Blake Willson</p>
      <p>[Message the Administrator]</p>
      <Button
        fullWidth
        onClick={() => props.gotoPostGame()}
        variant="raised"
        color="primary"
      >
        Finish Game
      </Button>
    </Paper>
  </Grid>
);

InGameScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoPostGame: PropTypes.func.isRequired,
};

export default withStyles(styles)(InGameScreen);

