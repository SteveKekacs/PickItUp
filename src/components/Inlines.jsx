import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { gotoProfile } from '../action-creators/global-actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const styles = theme => ({
  wrapper: {
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    padding: '10px',
    height: '50px'
  },
  content: {
    marginTop: '7px',
    display: 'inline-block'
  },
  iconBtn: {
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: '100%',
    width: '40px',
    height: '40px'
  },
  icon: {
    fontSize: '32px'
  },
  nameText: {
    fontSize: '20px',
    marginLeft: '10px'
  },
  mainText: {
    fontSize: '20px',
    position: 'relative',
    top: '-10px',
    left: '10px'
  },
  subText: {
    display: 'grid',
    fontSize: '16px',
    color: theme.palette.text.secondary,
    marginLeft: '50px',
    marginTop: '-16px'
  },
  actionIcons: {
    float: 'right',
    display: 'inline-block',
    marginTop: '5px'
  },
  msgIconBtn: {
    border: `2px solid blue`,
    borderRadius: '100%',
    width: '40px',
    height: '40px',
    marginRight: '5px'
  },
  msgIcon: {
    color: 'blue'
  },
  removeIconBtn: {
    border: `2px solid red`,
    borderRadius: '100%',
    width: '40px',
    height: '40px'

  },
  removeIcon: {
    color: 'red'
  },
  codeIconBtn: {
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: '100%',
    width: '40px',
    height: '40px'

  },
  codeIcon: {
    color: theme.palette.text.primary
  }
})

const UserBaseInline = props => (
  <div className={props.classes.wrapper}>
    <div className={props.classes.content}>
      <IconButton 
          className={props.classes.iconBtn}
          onClick={() => props.gotoProfile(props.data.id)}
        >
        <Icon className={props.classes.icon}>account_circle</Icon>
      </IconButton>
      <span className={props.classes.nameText}>{props.data.first_name} {props.data.last_name}</span>
    </div>
    <div className={props.classes.actionIcons}>
      <IconButton 
          className={props.classes.msgIconBtn}
        >
        <Icon className={props.classes.msgIcon}>message</Icon>
      </IconButton>
      <IconButton 
          className={props.classes.removeIconBtn}
        >
        <Icon className={props.classes.removeIcon}>clear</Icon>
      </IconButton>
    </div>
  </div>
)

const RewardBaseInline = props => (
  <div className={props.classes.wrapper}>
    <div className={props.classes.content}>
      <IconButton 
          className={props.classes.iconBtn}
        >
        <Icon className={props.classes.icon}>card_membership</Icon>
      </IconButton>
      <span className={props.classes.mainText}>{props.data.title}</span>
      <span className={props.classes.subText}>{props.data.description}</span>
      <IconButton 
          className={props.classes.codeIconBtn}
        >
        <Icon className={props.classes.codeIcon}>code</Icon>
      </IconButton>
    </div>
  </div>
)

const ActivityBaseInline = props => (
  <div className={props.classes.wrapper}>
    <div className={props.classes.content}>
      <IconButton 
          className={props.classes.iconBtn}
        >
        <Icon className={props.classes.icon}>group_work</Icon>
      </IconButton>
      <span className={props.classes.mainText}>{props.data.name}</span>
      <span className={props.classes.subText}>{props.data.playerIds.length} Players</span>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  gotoProfile: gotoProfile,
}, dispatch);

export const UserInline = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(UserBaseInline));
export const RewardInline = withStyles(styles)(RewardBaseInline);
export const ActivityInline = withStyles(styles)(ActivityBaseInline);
