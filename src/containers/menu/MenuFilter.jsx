import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select'
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

// connecting to store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sportToFilter, skillLevels } from '../../utils/constants';

import * as FilterActions from '../../action-creators/filter-actions'
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
      anchorEl: null
    };

    this.eltId = "menu-filter";
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
          color="inherit"
          aria-label="Filter"
          aria-owns={anchorEl ? this.eltId : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Icon>filter_list</Icon>
        </IconButton>

        <Menu
          id={this.eltId}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

          <MenuItem onClick={this.gotoMainMap}>
            <Icon className={classes.icons}>filter_list</Icon>
            Filter Activities
          </MenuItem>
          
          <FormControl>
            <InputLabel htmlFor="sport-filter">Sports</InputLabel>
            <Select 
              native
              value={this.props.selectedSports}
              multiple={true} 
              onChange={(event) => this.props.filterActivities(event.target.value, this.props.selectedLevels)}
              inputProps={{
                id: "sport-filter"
              }}
            >
              { Object.entries(sportToFilter).map((sportInfo) => {
                return (<option value={ sportInfo[1] }>{ sportInfo[0] }</option>);
              }
              )}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="level-filter">Skill Level</InputLabel>
            <Select 
              native
              value={this.props.selectedLevels}
              multiple={true} 
              onChange={(event) => this.props.filterActivities(this.props.selectedSports, event.target.value)}
              inputProps={{
                id: "level-filter"
              }}
            >
              { Object.entries(skillLevels).map((levelInfo) => {
                return (<option value={ levelInfo[1] }>{ levelInfo[0] }</option>);
              }
              )}
            </Select>
          </FormControl>

        </Menu>

      </div>
    );
  };
};

MenuFilter.propTypes = {
  classes: PropTypes.object.isRequired,  
  selectedSports: PropTypes.array.isRequired,
  selectedLevels: PropTypes.array.isRequired,
  filterActivities: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    selectedSports: state.selectedSports,
    selectedLevels: state.selectedLevels
  };
};

function mapDispatchToProps(dispatch) {
  return {
    filterActivities: bindActionCreators(FilterActions.filterActivities, dispatch)
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MenuFilter));

