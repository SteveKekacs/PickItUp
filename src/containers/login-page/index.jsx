import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

const frameHeight = 343;
const frameWidth = 216;

const styles = theme => ({
  card: {
    minWidth: `${frameWidth}px`,
    minHeight: `${frameHeight}px`,
    top: `calc(50vh - ${frameHeight / 2}px)`,
    left: `calc(50% - ${frameWidth / 2}px)`,
    margin: '0 auto',
    position: 'absolute',
  },
  button: {
    margin: theme.spacing.unit,
  },
  media: {
    height: '250px',
    paddingTop: '25px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '210px 250px',
  },
});

function SimpleCard(props) {
  const { classes } = props;
  return (
    <div
      className="login-screen"
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: "#EEE",
      }}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="PickItUp.png"
          title="Logo"
        />
        <CardActions>
          <Button
            fullWidth
            onClick={() => props.login()}
            className={classes.button}
            variant="raised"
            color="primary"
          >
            Login
          </Button>
          <Button
            fullWidth
            onClick={() => props.signUp()}
            className={classes.button}
            variant="raised"
            color="default"
          >
            Sign Up
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(SimpleCard);

const mapDispatchToProps = dispatch => bindActionCreators({
  signUp: () => push('/sign-up'),
  login: () => push('/login'),
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(styledComponent);
