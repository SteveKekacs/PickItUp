import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InGameScreen from './InGameScreen';
import { gotoPostGame } from '../../action-creators/global-actions';
import { getCurrentActivity, getPlayers } from '../../selectors';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  gotoPostGame,
}, dispatch);

const mapStateToProps = state => ({
  ...getCurrentActivity(state),
  players: getPlayers(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InGameScreen);
