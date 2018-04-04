import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import FakeMap from '../../images/HarvardScreenshot.png';
import SportIcon from './SportIcon';
import HostGameButton from './HostGameButton';

// TODO: Make the icons their own components

function MainMap() {
  return (
    <div style={{
      backgroundImage: `url(${FakeMap})`,
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "-430px",
    }}
    >
      <SportIcon styling={{ top: "200px", right: "40px" }} />
      <SportIcon styling={{ bottom: "60px", left: "60px" }} />
      <SportIcon styling={{ bottom: "315px", left: "20px" }} />
      <HostGameButton />
    </div>
  );
}

// MainMap.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles({})(MainMap);
