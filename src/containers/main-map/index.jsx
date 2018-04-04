import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import FakeMap from '../../images/HarvardScreenshot.png';
import SportIcon from './SportIcon';
import HostGameButton from './HostGameButton';
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
    <div style={{
      backgroundImage: `url(${FakeMap})`,
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "-430px",
    }}
    >
      <ConnectedSportIcon styling={{ top: "200px", right: "40px" }} />
      <ConnectedSportIcon styling={{ bottom: "60px", left: "60px" }} />
      <ConnectedSportIcon styling={{ bottom: "315px", left: "20px" }} />
      <ConnectedHostGame />
    </div>
  );
}

// MainMap.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles({})(MainMap);
