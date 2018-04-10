import ListPage from '../../components/ListPage';
import * as actions from '../../action-creators/actions'

// connecting to store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActivitiesList extends ListPage {
  componentDidMount() {
    this.props.getUserInfo(this.props.userId);
  }
}

function mapStateToProps(state) {
  return {
    userId: state.users.get('currentUserId'),
    items: state.users.getIn(['userInfo', 'pastActivities']).toJS(),
    itemType: "activity"
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
)(ActivitiesList);