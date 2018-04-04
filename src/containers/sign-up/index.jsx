import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpPage from './SignUpPage';
import { gotoHome } from '../../action-creators/global-actions';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  gotoMainMap: gotoHome,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignUpPage);
