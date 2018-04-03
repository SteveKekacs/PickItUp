import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
  changePage: PropTypes.func.isRequired,
};

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
);
Home.propTypes = propTypes;

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
