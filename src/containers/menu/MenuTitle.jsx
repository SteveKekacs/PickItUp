import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  flex: {
    flex: 1,
    "text-align": "center"
  },
};

function MenuTitle(props) {
  const { classes } = props;
  return (
    <Typography variant="title" color="inherit" className={classes.flex}>
      {props.pageName}
    </Typography>
  );
}

MenuTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  pageName: PropTypes.string.isRequired,
};

export default withStyles(styles)(MenuTitle);
