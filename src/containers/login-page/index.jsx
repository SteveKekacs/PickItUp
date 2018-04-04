import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { gotoHome } from '../../action-creators/global-actions';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  signUp: gotoHome,
  login: gotoHome,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
