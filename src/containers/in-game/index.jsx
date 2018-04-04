import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InGameScreen from './InGameScreen';
import { gotoPostGame } from '../../action-creators/global-actions';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  gotoPostGame
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(InGameScreen);
