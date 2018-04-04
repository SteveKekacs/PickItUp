import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { sportToFilter } from '../../utils/sports';

// TODO make filter do something

const styles = {
  icons: {
    paddingRight: 5,
  },
};

class MenuFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.eltId = "menu-filter";
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.filterSports = this.filterSports.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  filterSports(sport) {
    return () => {
      this.handleClose();
      console.log(`Filter ${sport}`);
    };
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Filter"
          aria-owns={anchorEl ? this.eltId : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Icon>search</Icon>
        </IconButton>

        <Menu
          id={this.eltId}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.gotoMainMap}>
            <Icon className={classes.icons}>all_out</Icon>
            View All Sports
          </MenuItem>
          { Object.entries(sportToFilter).map(([sportName, sportSlug]) => (
            <MenuItem key={sportSlug} onClick={this.filterSports(sportSlug)}>
              {sportName}
            </MenuItem>
          ))}

        </Menu>

      </div>
    );
  }
}

MenuFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuFilter);
