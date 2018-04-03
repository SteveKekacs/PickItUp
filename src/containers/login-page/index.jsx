import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { gotoSignUp, gotoHome } from '../../action-creators/global-actions';

const mapDispatchToProps = dispatch => bindActionCreators({
  signUp: gotoSignUp,
  login: gotoHome,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
