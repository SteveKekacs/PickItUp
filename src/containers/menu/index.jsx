import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuDropdown from './MenuDropdown';
import MenuFilter from './MenuFilter';
import MenuTitle from './MenuTitle';
import UrlMapping from '../../utils/url-to-title';


/*************************************************************************************************
 * Mapped Title
 *************************************************************************************************/
const mapStateToPropsTitle = state => ({
  page: UrlMapping[state.routing.location.pathname],
});

const ConnectedMenuTitle = connect(
  mapStateToPropsTitle,
  null,
)(MenuTitle);


/*************************************************************************************************
 * Main Connected Component
 *************************************************************************************************/

const styles = {
  root: {
    flexGrow: 1,
  },
};
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuDropdown />
          <ConnectedMenuTitle />
          <MenuFilter />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
