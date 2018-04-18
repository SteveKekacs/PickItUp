import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import { toTitleCase } from '../../utils/helpfulFunctions';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bottomButton: {
    position: "absolute",
    width: "100%",
    padding: theme.spacing.unit,
    bottom: 0,
    background: "white",
  },
  participants: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    marginBottom: "55px",
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const InGameScreen = (props) => {
  const spotsLeft = props.playersNeeded - props.playerIds.length;
  const { classes } = props;
  const participants = props.playerIds.map(player => (
    <Chip
      label="Basic Chip"
      className={classes.chip}
      avatar={<Avatar>SK</Avatar>}
      onClick={() => player}
    />
  ));
  return (
    <Grid item xs={12} >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <List
            component="nav"
          >
            <ListItem>
              <Typography variant="headline" align="center">
                {props.name}
              </Typography>
            </ListItem>
            <ListItem divider >
              <ListItemText
                primary="Host"
                secondary={`Steven "TODO" Kekacs`}
              />
            </ListItem>
            <ListItem divider >
              <ListItemText
                primary="Seeking"
                secondary={`${spotsLeft} players  (${props.playersNeeded} total)`}
              />
            </ListItem>
            <ListItem divider >
              <ListItemText
                primary="Game Time"
                secondary={`${props.startTime.calendar()} - ${props.endTime.format('h:mm A')}`}
              />
            </ListItem>
            <ListItem divider >
              <ListItemText
                primary="Difficulty"
                secondary={toTitleCase(props.level)}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Participants"
                secondary={<div className={classes.participants}>{participants}</div>}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.bottomButton}>
          <Button
            fullWidth
            onClick={() => props.gotoPostGame()}
            variant="raised"
            color="primary"
          >
            Finish Game
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

InGameScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoPostGame: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  playersNeeded: PropTypes.number.isRequired,
  playerIds: PropTypes.array.isRequired,
  startTime: PropTypes.object.isRequired,
  endTime: PropTypes.object.isRequired,
};

export default withStyles(styles)(InGameScreen);

