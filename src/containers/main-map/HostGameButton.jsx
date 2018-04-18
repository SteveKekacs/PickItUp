import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormControl } from 'material-ui/Form';
// import { sportToFilter, level } from '../../utils/constants';
import {
  sportToFilter,
  skillLevels,
} from '../../utils/constants';
import { generateId, makeRandomCoords } from '../../utils/helpfulFunctions';

// TODO: Make the icons their own components
// use styles!!!!

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
    zIndex: 600,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // formControl: {
  //   margin: theme.spacing.unit,
  //   width: "calc(50% - 16px)",
  // },
  formControlRight: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: `calc(50% - ${theme.spacing.unit}px)`,
  },
  formControlLeft: {
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: `calc(50% - ${theme.spacing.unit}px)`,
  },
});

class HostGameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sport: 'basketball',
      level: "beginner",
      publicGame: true,
      duration: "60",
      playersNeeded: 2,
      startTime: moment().format("YYYY-MM-DDTHH:mm"),
      name: "Your Game Name",
      // gameAddress: "",
      useMyLocation: true,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hostGame = this.hostGame.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  handleToggle(name) {
    return event => this.setState({ [name]: event.target.checked });
  }
  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  hostGame() {
    this.handleClose();
    const startTime = moment(this.state.start);
    const duration = parseInt(this.state.duration);
    const endTime = moment(this.state.start).add(duration, "m");
    const coords = makeRandomCoords();
    this.props.hostGame({
      id: generateId(),
      duration,
      startTime,
      endTime,
      name: this.state.name,
      sport: this.state.sport || 'basketball',
      level: this.state.level,
      creatorId: this.props.userId,
      playerIds: [this.props.userId],
      playersNeeded: this.state.playersNeeded,
      publicGame: this.state.publicGame,
      position: [coords.lat, coords.lng],
      ...coords,
    });
    this.props.gotoCurrentGame();
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Button
          onClick={this.handleClickOpen}
          variant="fab"
          color="secondary"
          className={classes.absolute}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          disableBackdropClick
          disableEscapeKeyDown
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            {"Host a Game"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill out the fields below to host a game
            </DialogContentText>
            <form className={classes.container}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Game Name"
                type="text"
                onChange={this.handleChange('name')}
                fullWidth
              />
              <TextField
                fullWidth
                id="startTime"
                label="Set Start Time"
                type="datetime-local"
                onChange={this.handleChange('startTime')}
                defaultValue={this.state.startTime}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl className={classes.formControlRight}>
                <InputLabel htmlFor="sport-duration">
                  Set Duration
                </InputLabel>
                <Select
                  native
                  value={this.state.duration}
                  onChange={this.handleChange('duration')}
                  input={<Input id="sport-duration" />}
                >
                  <option value="" onClick={this.handleChange('duration')} />
                  <option value="30" onClick={this.handleChange('duration')}>
                    30 minutes
                  </option>
                  <option value="45" onClick={this.handleChange('duration')}>
                    45 minutes
                  </option>
                  <option value="60" onClick={this.handleChange('duration')}>
                    1 hour
                  </option>
                  <option value="90" onClick={this.handleChange('duration')}>
                    1.5 hours
                  </option>
                  <option value="120" onClick={this.handleChange('duration')}>
                    2 hours
                  </option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControlLeft}>
                <InputLabel htmlFor="difficulty-switch">
                  Difficulty
                </InputLabel>
                <Select
                  native
                  value={this.state.level}
                  onChange={this.handleChange('level')}
                  input={<Input id="difficulty-switch" />}
                >
                  {Object.entries(skillLevels).map(([displayName, slug]) => (
                    <option
                      key={slug}
                      value={slug}
                      onClick={this.handleChange('level')}
                    >
                      {displayName}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControlRight}>
                <InputLabel htmlFor="sport">
                  Pick Sport
                </InputLabel>
                <Select
                  native
                  value={this.state.sport}
                  onChange={this.handleChange('sport')}
                  input={<Input id="sport-native-simple" />}
                >
                  <option value="" />
                  {Object.entries(sportToFilter)
                      .filter(([, sportSlug]) => sportSlug !== "all_sports")
                      .map(([sportName, sportSlug]) => (
                        <option
                          key={sportSlug}
                          value={sportSlug}
                          onClick={this.handleChange('sport')}
                        >
                          {sportName}
                        </option>
                      ))}
                </Select>
              </FormControl>
              <TextField
                className={classes.formControlLeft}
                id="number-players"
                label="Players"
                type="number"
                name="playersNeeded"
                onChange={this.handleChange('playersNeeded')}
                defaultValue={this.state.playersNeeded}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.publicGame}
                    onChange={this.handleToggle('publicGame')}
                    value="publicGame"
                  />
                }
                label="Make Game Public"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.useMyLocation}
                    onChange={this.handleToggle('useMyLocation')}
                    value="useMyLocation"
                  />
                }
                label="Start Game at My Current Location"
              />
              {!this.state.useMyLocation && (
                <TextField
                  fullWidth
                  id="gameAddress"
                  label="Set Game Address"
                  type="text"
                  onChange={this.handleChange('gameAddress')}
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="raised" onClick={this.handleClose} color="default">
              Cancel
            </Button>
            <Button variant="raised" onClick={this.hostGame} color="primary" autoFocus>
              Host Game
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

HostGameButton.propTypes = {
  classes: PropTypes.object.isRequired,
  gotoCurrentGame: PropTypes.func.isRequired,
  hostGame: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default withStyles(styles)(HostGameButton);
