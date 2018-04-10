import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// import FakeMap from '../../images/HarvardScreenshot.png';
//
import SportIcon from './SportIcon';
import HostGameButton from './HostGameButton';
import LeafletMap from './LeafletMap';
import { gotoCurrentGame } from '../../action-creators/global-actions';

/**************************************************************************************************
 * Connected Host Game
 *************************************************************************************************/

const mapDispatchToPropsHostGame = dispatch => bindActionCreators({
  gotoCurrentGame,
}, dispatch);

const ConnectedHostGame = connect(
  null,
  mapDispatchToPropsHostGame,
)(HostGameButton);


/**************************************************************************************************
 * Connected Host Game
 *************************************************************************************************/

// TODO make it go to id of game
const mapDispatchToPropsSportIcon = dispatch => bindActionCreators({
  gotoCurrentGame,
}, dispatch);

const ConnectedSportIcon = connect(
  null,
  mapDispatchToPropsSportIcon,
)(SportIcon);


// Main component
function MainMap() {
  return (
    <Grid item xs={12} >
      <ConnectedSportIcon styling={{ top: "200px", right: "40px" }} />
      <LeafletMap>

      </LeafletMap>
      <ConnectedHostGame />
    </Grid>
  );
}

// MainMap.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles({})(MainMap);
