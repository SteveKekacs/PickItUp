import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icons: {
    paddingRight: theme.spacing.unit,
  },
});

class MenuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };

    this.eltId = "menu-dropdown";
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.gotoMainMap = this.handleClose(this.props.gotoMainMap);
    this.gotoProfile = this.handleClose(this.props.gotoProfile, this.props.currentUserId);
    this.gotoFriends = this.handleClose(this.props.gotoFriends);
    this.gotoRewards = this.handleClose(this.props.gotoRewards);
    this.gotoActivities = this.handleClose(this.props.gotoActivities);
    this.gotoLogout = this.handleClose(this.props.gotoLogout);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose(func, param) {
    return () => {
      this.setState({ anchorEl: null });
      if (func !== null) {
        if (param !== null) {
          func(param);
        } else {
          func();
        }
      }
    };
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
          aria-owns={anchorEl ? this.eltId : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id={this.eltId}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose(null)}
        >
          <MenuItem onClick={this.gotoMainMap}>
            <Icon className={classes.icons}>map</Icon>
            Main Map
          </MenuItem>
          <MenuItem onClick={this.gotoProfile}>
            <Icon className={classes.icons}>account_circle</Icon>
            Profile
          </MenuItem>
          <MenuItem onClick={this.gotoFriends}>
            <Icon className={classes.icons}>group</Icon>
            Friends
          </MenuItem>
          <MenuItem onClick={this.gotoRewards}>
            <Icon className={classes.icons}>card_giftcard</Icon>
            Rewards
          </MenuItem>
          <MenuItem onClick={this.gotoActivities}>
            <Icon className={classes.icons}>history</Icon>
            Activities
          </MenuItem>
          <MenuItem onClick={this.gotoLogout}>
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
  gotoMainMap: PropTypes.func.isRequired,
  gotoProfile: PropTypes.func.isRequired,
  gotoFriends: PropTypes.func.isRequired,
  gotoRewards: PropTypes.func.isRequired,
  gotoActivities: PropTypes.func.isRequired,
  gotoLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(MenuDropdown);
