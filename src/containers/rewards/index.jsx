import ListPage from '../../components/ListPage';
import * as actions from '../../action-creators/actions'

// connecting to store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RewardsList extends ListPage {
  componentDidMount() {
    this.props.getUserInfo(this.props.userId);
  }
}

function mapStateToProps(state) {
  return {
    userId: state.users.get('currentUserId'),
    items: state.users.getIn(['userInfo', 'rewards']).toJS(),
    // items: state.rewards.toJS(),
    itemType: "reward"
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
)(RewardsList);
