import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostGamePage from './PostGamePage';
import { gotoHome } from '../../action-creators/global-actions';
import { getCurrentActivity, getPlayers } from '../../selectors';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  gotoMainMap: gotoHome,
}, dispatch);

const mapStateToProps = state => ({
  ...getCurrentActivity(state),
  players: getPlayers(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostGamePage);
