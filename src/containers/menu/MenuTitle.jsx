import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  flex: {
    flex: 1,
  },
};

function MenuTitle(props) {
  const { classes } = props;
  return (
    <Typography variant="title" color="inherit" className={classes.flex}>
      Main Map
    </Typography>
  );
}

MenuTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuTitle);
