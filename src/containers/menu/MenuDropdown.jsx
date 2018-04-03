import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icons: {
    paddingRight: 5,
  },
};

class MenuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Icon className={classes.icons}>map</Icon>
            Main Map
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Icon className={classes.icons}>account_circle</Icon>
            Profile
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Icon className={classes.icons}>group</Icon>
            Friends
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Icon className={classes.icons}>card_giftcard</Icon>
            Rewards
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Icon className={classes.icons}>settings</Icon>
            Settings
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Icon className={classes.icons}>exit_to_app</Icon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

MenuDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDropdown);
