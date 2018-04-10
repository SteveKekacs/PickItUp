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
            searchTerm: ""
        }
    }

    renderItemsBasedOnType() {
        if (this.props.itemType === 'user') {
            return this.renderItems(UserInline);
        } else if (this.props.itemType === 'reward') {
            return this.renderItems(RewardInline);
        } else if (this.props.itemType === 'activity') {
            return this.renderItems(ActivityInline);
        }
    }

    renderItems(Component) {
        return this.props.items.map((item) => (
            <Component data={item} />
        ));
    }

    render() {
        let items = this.renderItemsBasedOnType()

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
