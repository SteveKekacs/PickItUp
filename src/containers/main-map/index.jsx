import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// import FakeMap from '../../images/HarvardScreenshot.png';
//
// import SportIcon from './SportIcon';
import HostGameButton from './HostGameButton';
import LeafletMap from './LeafletMap';
import { getActiveActivities, getUserId } from '../../selectors';
import { gotoCurrentGame } from '../../action-creators/global-actions';
import { hostGame } from '../../action-creators/actions';

/**************************************************************************************************
 * Connected Host Game
 *************************************************************************************************/

const mapDispatchToPropsHostGame = dispatch => bindActionCreators({
  gotoCurrentGame,
  hostGame,
}, dispatch);

const mapStateToPropsHostGame = state => ({
  userId: getUserId(state),
});

const ConnectedHostGame = connect(
  mapStateToPropsHostGame,
  mapDispatchToPropsHostGame,
)(HostGameButton);


/**************************************************************************************************
 * Connected Host Game
 *************************************************************************************************/

// // TODO make it go to id of game
// const mapDispatchToPropsSportIcon = dispatch => bindActionCreators({
//   gotoCurrentGame,
// }, dispatch);

// const ConnectedSportIcon = connect(
//   null,
//   mapDispatchToPropsSportIcon,
// )(SportIcon);

/**************************************************************************************************
 * Connected Map
 *************************************************************************************************/

const mapDispatchToPropsMap = dispatch => bindActionCreators({
  gotoGame: gotoCurrentGame,
}, dispatch);

const mapStateToPropsMap = state => ({
  activities: getActiveActivities(state),
});

const ConnectedLeafletMap = connect(
  mapStateToPropsMap,
  mapDispatchToPropsMap,
)(LeafletMap);

// Main component
function MainMap() {
  return (
    <Grid item xs={12} >
      <ConnectedLeafletMap />
      <ConnectedHostGame />
    </Grid>
  );
}

// MainMap.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles({})(MainMap);
