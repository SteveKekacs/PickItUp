import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const styles = {};

function MenuFilter() {
  return (
    <IconButton color="inherit" aria-label="Filter">
      <Icon>search</Icon>
    </IconButton>
  );
}

export default withStyles(styles)(MenuFilter);
