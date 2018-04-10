import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

// connecting to store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sportsList, levelsList } from '../../utils/constants';

import * as actions from '../../action-creators/actions'

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
              multiple
              value={this.props.selectedSports}
              onChange={(event) => this.props.filterActivities(event.target.value, this.props.selectedLevels)}
              input={<Input id="sport-filter" />}
              renderValue={selected => selected.join(', ')}
            >
              { sportsList.map((sport) => (
                  <MenuItem key={sport} value={sport}>
                    <Checkbox checked={this.props.selectedSports.indexOf(sport) > -1} />
                    <ListItemText primary={sport} />
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="level-filter">Skill Levels</InputLabel>
            <Select 
              multiple
              value={this.props.selectedLevels}
              onChange={(event) => this.props.filterActivities(this.props.selectedSports, event.target.value)}
              input={<Input id="level-filter" />}
              renderValue={selected => selected.join(', ')}
            >
              { levelsList.map((level) => (
                  <MenuItem key={level} value={level}>
                    <Checkbox checked={this.props.selectedLevels.indexOf(level) > -1} />
                    <ListItemText primary={level} />
                  </MenuItem>
                )
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
    selectedSports: state.activities.get('selectedSports').toJS(),
    selectedLevels: state.activities.get('selectedLevels').toJS()
  };
};

function mapDispatchToProps(dispatch) {
  return {
    filterActivities: bindActionCreators(actions.filterActivities, dispatch)
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MenuFilter));

