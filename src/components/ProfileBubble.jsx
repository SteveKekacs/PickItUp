import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import deepOrange from 'material-ui/colors/deepOrange';
import deepPurple from 'material-ui/colors/deepPurple';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function LetterAvatar(props) {
  const { classes } = props;
  return (
    <Avatar className={classes.avatar}>
      {props.children}
    </Avatar>
  );
}

LetterAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(LetterAvatar);
