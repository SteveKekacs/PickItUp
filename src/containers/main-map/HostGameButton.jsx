import React from 'react';
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
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { sportToFilter } from '../../utils/sports';

// TODO: Make the icons their own components
// use styles!!!!

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    maxWidth: "calc(50% - 13px)",
  },
});

class HostGameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sport: '',
      duration: "",
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return event => this.setState({ [name]: Number(event.target.value) });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
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
                fullWidth
              />
              <TextField
                fullWidth
                id="datetime-local"
                label="Set Start Time"
                type="datetime-local"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="sport-native-simple">Pick Sport</InputLabel>
                <Select
                  native
                  value={this.state.sport}
                  onChange={this.handleChange('sport')}
                  input={<Input id="sport-native-simple" />}
                >
                  <option value="" />
                  { Object.entries(sportToFilter).map(([sportName, sportSlug]) => (
                    <option key={sportSlug} value={sportSlug} onClick={this.handleChange('sport')}>
                      {sportName}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="sport-duration">Set Duration</InputLabel>
                <Select
                  native
                  value={this.state.duration}
                  onChange={this.handleChange('duration')}
                  input={<Input id="sport-duration" />}
                >
                  <option value="" onClick={this.handleChange('duration')}/>
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="raised" onClick={this.handleClose} color="default">
              Cancel
            </Button>
            <Button variant="raised" onClick={this.handleClose} color="primary" autoFocus>
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
};

export default withStyles(styles)(HostGameButton);
