import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  wrapper: {
    borderBottom: `1px solid ${theme.text.secondary}`
  }
})

const UserBaseInline = props => (
  <div className={props.classes.wrapper}>
    User
  </div>
)

const RewardBaseInline = props => (
  <div className={props.classes.wrapper}>
    Reward
  </div>
)

const ActivityBaseInline = props => (
  <div className={props.classes.wrapper}>
    Activity
  </div>
)

export const UserInline = withStyles(styles)(UserBaseInline);
export const RewardInline = withStyles(styles)(RewardBaseInline);
export const ActivityInline = withStyles(styles)(ActivityBaseInline);
