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

const PostGamePage = (props) => {
  const { classes } = props;
  const participants = props.players.map(player => (
    <Chip
      label={`${player.first_name} ${player.last_name}`}
      key={player.id}
      className={classes.chip}
      avatar={<Avatar>{(player.first_name[0] + player.last_name[0]).toUpperCase()}</Avatar>}
      onClick={() => player}
    />
  ));
  const creator = props.players.filter(player => player.id === props.creatorId)[0];
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
                secondary={`${creator.first_name} ${creator.last_name}`}
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
                primary="Calories Burned"
                secondary={420}
              />
            </ListItem>
            <ListItem divider >
              <ListItemText
                primary="Difficulty"
                secondary={toTitleCase(props.level)}
              />
            </ListItem>
            <ListItem style={{ paddingBottom: "0px" }}>
              <ListItemText primary="Participants" />
            </ListItem>
            <ListItem>
              <div className={classes.participants}>{participants}</div>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.bottomButton}>
          <Button
            fullWidth
            onClick={() => props.gotoMainMap()}
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

PostGamePage.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoMainMap: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  // playersNeeded: PropTypes.number.isRequired,
  // playerIds: PropTypes.array.isRequired,
  startTime: PropTypes.object.isRequired,
  endTime: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  creatorId: PropTypes.number.isRequired,
};

export default withStyles(styles)(PostGamePage);

