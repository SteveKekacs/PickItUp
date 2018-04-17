import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { getSelectedSports, getSelectedLevels } from '../../selectors';
import { levelsSlugs, sportsSlugs, filterToSport, filterToLevel } from '../../utils/constants';
import * as actions from '../../action-creators/actions';

const styles = {
  icons: {
    paddingRight: 5,
  },
  filter: {
    width: "calc(100% - 16px)",
    marginLeft: 8,
    marginRight: 8,
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
            Filter Sports and/or Skill Level
          </MenuItem>
          <FormControl className={this.props.classes.filter}>
            <InputLabel htmlFor="sport-filter">Sports (leave empty for all)</InputLabel>
            <Select
              multiple
              value={this.props.selectedSports}
              onChange={event => this.props.filterActivities(
                event.target.value,
                this.props.selectedLevels,
              )}
              input={<Input id="sport-filter" />}
              renderValue={selected => (
                  selected.length > 0 ?
                  selected.map(s => filterToSport[s]).join(', ')
                  : ""
              )}
            >
              {sportsSlugs.map(sportSlug => (
                <MenuItem key={sportSlug} value={sportSlug}>
                  <Checkbox checked={this.props.selectedSports.indexOf(sportSlug) > -1} />
                  <ListItemText primary={filterToSport[sportSlug]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={this.props.classes.filter}>
            <InputLabel htmlFor="level-filter">
              Skill Levels (leave empty for all)
            </InputLabel>
            <Select
              multiple
              value={this.props.selectedLevels}
              input={<Input id="level-filter" />}
              renderValue={selected => (
                  selected.length > 0 ?
                  selected.map(s => filterToLevel[s]).join(', ')
                  : ""
              )}
              onChange={event => this.props.filterActivities(
                this.props.selectedSports,
                event.target.value,
              )}
            >
              {levelsSlugs.map(slug => (
                <MenuItem key={slug} value={slug}>
                  <Checkbox checked={this.props.selectedLevels.indexOf(slug) > -1} />
                  <ListItemText primary={filterToLevel[slug]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </Menu>

      </div>
    );
  }
}

MenuFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedSports: PropTypes.array.isRequired,
  selectedLevels: PropTypes.array.isRequired,
  filterActivities: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedSports: getSelectedSports(state),
  selectedLevels: getSelectedLevels(state),
});

const mapDispatchToProps = dispatch => ({
  filterActivities: bindActionCreators(actions.filterActivities, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(MenuFilter));

