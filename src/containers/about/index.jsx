import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Basketball from '../../images/basketball.png';
import Typography from 'material-ui/Typography';
import Manav from '../../images/manav.jpg';
import Steve from '../../images/steve.png';
import Tyler from '../../images/tyler.png';
import logo from '../../images/PickItUp.png';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 75,
    height: 75,
  },
});

const AboutPage = (props) => (
  <Grid item xs={12}>
    <Grid container spacing={24}>
      <Grid 
        item xs={12} 
        alignItems='flex-start'
        justify='flex-start'
      >
        <Paper className={props.classes.paper}>
          <Typography variant="display2" gutterBottom>ABOUT US</Typography>
          <img src={logo} height="164" width="124" />
        </Paper>
      </Grid>
      <Grid item xs={4} >
        <Paper className={props.classes.paper}>
          <Grid container spacing={8}>
            <Grid item xs={12} className={props.classes.row}>
              <Avatar src={Steve} className={props.classes.bigAvatar}/>
            </Grid>
            <Grid item xs={12}>
              <h1>Steve Kecaks</h1>
              <p>
                Steve is a senior at Harvard concentrating in Computer Science. He likes getting schooled in 1-on-1 basketball by Manav and swimming in his free time.
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4} >
        <Paper className={props.classes.paper}>
          <Grid container spacing={8}>
            <Grid item xs={12} className={props.classes.row}>
              <Avatar src={Manav} className={props.classes.bigAvatar}/>
            </Grid>
            <Grid item xs={12}>
              <h1>Manav Khandelwal</h1>
              <p>
                Manav is a junior at Harvard concentrating in Statistics and Computer Science. He loves a nice game of 5-on-5 basketball, and hopes you can use PickItUp to find your own games!
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4} >
        <Paper className={props.classes.paper}>
          <Grid container spacing={8}>
            <Grid item xs={12} className={props.classes.row}>
              <Avatar src={Tyler} className={props.classes.bigAvatar}/>
            </Grid>
            <Grid item xs={12}>
              <h1>Tyler Rocca</h1>
              <p>
                Ty is a senior at Harvard concentrating in Computer Science. He is pretty cool and I think that his iPad is pretty cool too. He likes watching people break swimming records mostly.
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
);

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);
