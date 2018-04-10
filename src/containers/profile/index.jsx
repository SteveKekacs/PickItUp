import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../action-creators/actions';


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  subtext: {
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  profile_icon: {
    border: `2px solid ${theme.palette.text.secondary}`,
    borderRadius: '100%',
    width: '100px',
    height: '100px',
    fontSize: '100px'
  },
  icon: {
    fontSize: '34px'
  },
  icon_div: {
    textAlign: 'center',
  },
  icon_btn: {
    border: `2px solid ${theme.palette.text.secondary}`,
    width: '75px',
    height: '75px'
  },
  icon_text: {
    display: 'grid',
    marginTop: '10px'
  },
  icon_seperator: {
    display: 'inline-block',
    width: '25px'
  }
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId);
  }

  render() {
    return (
      <Grid item xs={12} >
        <Paper className={this.props.classes.paper}>
          <Icon className={this.props.classes.profile_icon}>account_circle</Icon>
          <h1>{this.props.userInfo.first_name} {this.props.userInfo.last_name}</h1>
          <h2>{this.props.userInfo.age}</h2>
          <p>{this.props.userInfo.bio}</p>
        </Paper>
        { this.props.userInfo.pastActivities && (
            <h2 className={this.props.classes.subtext}>
              {this.props.userInfo.pastActivities.length} Activities
            </h2>)
        }
        { parseInt(this.props.match.params.userId) !== this.props.currentUserId && 
          <div className={this.props.classes.icon_div}>
            <div style={{display: 'inline-block'}}>
              <IconButton className={this.props.classes.icon_btn}>
                <Icon className={this.props.classes.icon}>message</Icon>
              </IconButton>
              <span className={this.props.classes.icon_text}>Message</span>
            </div>
            <div className={this.props.classes.icon_seperator} />
            <div style={{display: 'inline-block'}}>
              <IconButton className={this.props.classes.icon_btn}>
                <Icon className={this.props.classes.icon}>add</Icon>
              </IconButton>
              <span className={this.props.classes.icon_text}>Add Friend</span>
            </div>
          </div>
        }
      </Grid>
  )}
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object,
  currentUserId: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    userInfo: state.users.get('userInfo').toJS(),
    currentUserId: state.users.get('currentUserId')
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: bindActionCreators(actions.getUserInfo, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile));
