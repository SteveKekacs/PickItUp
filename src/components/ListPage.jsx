import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';

import { UserInline, RewardInline, ActivityInline } from './Inlines'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.onClickPastGame = this.onClickPastGame.bind(this);
  }

  onClickPastGame(id) {
    this.props.setCurrentGame(id);
    this.props.gotoPostGame();
  }

  renderItems(Component) {
    if (this.props.itemType === 'user') {
      return (
        this.props.items.filter((item) => (
          (!this.state.searchTerm ||
            (item.first_name + " " + item.last_name).toLowerCase().search(this.state.searchTerm.toLowerCase()) >= 0)
        )).map((item) => (<UserInline data={item} />))
      );
    } else if (this.props.itemType === 'reward') {
      // TODO FILTERING
      return (
        this.props.items.filter((item) => (
          (!this.state.searchTerm ||
          (item.title + " " + item.description).toLowerCase().search(this.state.searchTerm.toLowerCase()) >= 0)
        )).map((item) => (<RewardInline data={item} />))
      )
    } else if (this.props.itemType === 'activity') {
      return (
        this.props.items.filter((item) => (
          (!this.state.searchTerm ||
            (item.name + " " + item.sport).toLowerCase().search(this.state.searchTerm.toLowerCase()) >= 0)
        )).map((item) => (
          <ActivityInline
            key={item.id}
            data={item}
            handleClick={() => this.onClickPastGame(item.id)}
          />))
      );
    }
    return null;
  }

  render() {
    let items = this.renderItems()
    if (this.props.items.length === 0) {
      items = (<div>No Results</div>);
    }

    return (
      <Grid item xs={12} >
        <Paper className={this.props.classes.paper}>
          <Input
            placeholder="Search..."
            value={this.state.searchTerm}
            id="search-input"
            style={{width: "90%"}}
            onChange={(event) => this.setState({searchTerm: event.target.value})}
          />
        </Paper>
        {items}
      </Grid>
    );
  }
};

ListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  itemType: PropTypes.string.isRequired
};

export default withStyles(styles)(ListPage);
