import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuDropdown from './MenuDropdown';
import MenuFilter from './MenuFilter';
import MenuTitle from './MenuTitle';
import UrlMapping from '../../utils/url-to-title';
import * as globalActionCreators from '../../action-creators/global-actions';


/*************************************************************************************************
 * Mapped Title
 *************************************************************************************************/

const stripId = str => str.replace(/\/\d+.+/g, "");
const mapStateToPropsTitle = state => ({
  // TODO: make this strip off the id
  pageName: UrlMapping[stripId(state.routing.location.pathname)],
});

const ConnectedMenuTitle = connect(
  mapStateToPropsTitle,
  null,
)(MenuTitle);


/*************************************************************************************************
 * Mapped Menu
 *************************************************************************************************/
const mapStateToProps = state => {
  return ({
    currentUserId: state.users.get('currentUserId')
  })
}

const mapDispatchToPropsNav = dispatch => bindActionCreators({
  gotoMainMap: globalActionCreators.gotoHome,
  gotoProfile: globalActionCreators.gotoProfile,
  gotoFriends: globalActionCreators.gotoFriends,
  gotoRewards: globalActionCreators.gotoRewards,
  gotoActivities: globalActionCreators.gotoActivities,
  gotoLogout: globalActionCreators.gotoLogin,
}, dispatch);

const ConnectedMenuDropdown = connect(
  mapStateToProps,
  mapDispatchToPropsNav,
)(MenuDropdown);

/*************************************************************************************************
 * Main Connected Component
 *************************************************************************************************/

const styles = {
  root: {
    flexGrow: 1,
  },
};

function MainAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {props.showDropdown && <ConnectedMenuDropdown />}
          <ConnectedMenuTitle />
          {props.showFilter && <MenuFilter />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  showFilter: PropTypes.bool.isRequired,
  showDropdown: PropTypes.bool.isRequired,
};

const mapStateToPropsAppBar = state => ({
  showFilter: state.routing.location.pathname === "/home",
  showDropdown: state.routing.location.pathname !== "/signup",
});

const ConnectedAppBar = connect(
  mapStateToPropsAppBar,
  null,
)(MainAppBar);

export default withStyles(styles)(ConnectedAppBar);
