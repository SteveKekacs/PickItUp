import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Marker, Popup } from 'react-leaflet';
import Grid from 'material-ui/Grid';
import { toTitleCase } from '../../utils/helpfulFunctions';
import { sportToIcon } from '../../utils/constants';

// TODO: Make the icons their own components
// use styles!!!!
const styles = {
  // details: {
  //   fontSize: "14px",
  // },
};

const SportIcon = (props) => {
  const spotsLeft = props.playersNeeded - props.playerIds.length;
  return (
    <Marker
      icon={sportToIcon[props.sport]}
      key={props.id}
      position={props.position}
    >
      <Popup>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <h2>{props.name} <i>({spotsLeft}/{props.playersNeeded})</i></h2>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <b>Seeking:</b> {spotsLeft} players <i>(0 friends playing)</i>
              </Grid>
              <Grid item xs={12}>
                <b>Difficulty:</b> {toTitleCase(props.level)}
              </Grid>
              <Grid item xs={12}>
                <b>Game Time:</b> {props.startTime.calendar()} - {props.endTime.format('h:mm A')}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="raised"
              onClick={() => props.gotoGame(props.id)}
              color="primary"
              autoFocus
            >
              Join Game
            </Button>
          </Grid>
        </Grid>
      </Popup>
    </Marker>
  );
};

SportIcon.propTypes = {
  // classes: PropTypes.object.isRequired,
  gotoGame: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  position: PropTypes.array.isRequired,
  playersNeeded: PropTypes.number.isRequired,
  playerIds: PropTypes.array.isRequired,
  startTime: PropTypes.object.isRequired,
  endTime: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportIcon);
