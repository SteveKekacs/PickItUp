import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { gotoHome, gotoSignUp } from '../../action-creators/global-actions';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  signUp: gotoSignUp,
  login: gotoHome,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
