import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import FakeMap from '../../images/HarvardScreenshot.png'
import Basketball from '../../images/basketball.png'


function MainMap() {
  return (
    <div style={{
      backgroundImage: `url(${FakeMap})`,
      backgroundPosition: "center center",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "-430px",
    }}>
    <img
      src={Basketball}
      style={{
        height: "20px",
        position: "absolute",
        top: "200px",
        right: "40px",
      }}
    />
    <img
      src={Basketball}
      style={{
        height: "20px",
        position: "absolute",
        bottom: "16px",
        left: "60px",
      }}
    />
    <img
      src={Basketball}
      style={{
        height: "20px",
        position: "absolute",
        bottom: "315px",
        left: "20px",
      }}
    />
    </div>
  );
};

// MainMap.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles({})(MainMap);
