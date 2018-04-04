import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostGamePage from './PostGamePage';
import { gotoHome } from '../../action-creators/global-actions';

// TODO make signup page
const mapDispatchToProps = dispatch => bindActionCreators({
  gotoMainMap: gotoHome,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(PostGamePage);
