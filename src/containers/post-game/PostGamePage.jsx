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

const PostGamePage = props => (
  <Grid item xs={12} >
    <Paper className={props.classes.paper}>
      <h1>Post Game Page</h1>
      <p>
        This is where you see your calorie count,
        who you played with, how to split costs etc...
        Will be styled much better!
      </p>
      <p>You Burned 300 calories and played for 90 minutes</p>
      <p>You played with Jeff Smith, Simi Jones, and Blake Willson</p>
      <p>You earned 10% off food at SweetGreen! Nice :)</p>
      <Button
        fullWidth
        onClick={() => props.gotoMainMap()}
        variant="raised"
        color="primary"
      >
        Close Summary
      </Button>
    </Paper>
  </Grid>
);

PostGamePage.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoMainMap: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostGamePage);

