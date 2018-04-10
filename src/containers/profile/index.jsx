import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../action-creators/actions'


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
          <h1>John Stevens</h1>
          <p>This is where stats, a bio, etc will be listed</p>
        </Paper>
      </Grid>
  )}
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    userInfo: state.users.get('userInfo').toJS()
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
