import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Basketball from '../../images/basketball.png';

// TODO: Make the icons their own components
// use styles!!!!

const styles = {
  sportIcon: {
    height: "20px",
  },
};

class SportIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
      <span
        style={{
          position: "absolute",
          ...this.props.styling,
        }}
      >
        <img
          src={Basketball}
          alt="basketball"
          onClick={this.handleClickOpen}
          className={classes.sportIcon}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Join Steve's Game?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              There are currently 3 players and 2 more are needed.
              The game starts at 6:30pm and will go until 8:30pm.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="raised" onClick={this.handleClose} color="default">
              Cancel
            </Button>
            <Button variant="raised" onClick={this.handleClose} color="primary" autoFocus>
              Join Game
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

SportIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  styling: PropTypes.object.isRequired,
};

export default withStyles(styles)(SportIcon);
