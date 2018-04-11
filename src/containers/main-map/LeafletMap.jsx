import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const defaultCoords = {
  lat: 42.374615,
  lng: -71.116341,
  zoom: 16,
};

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...defaultCoords };
    this.onLocationFound = this.onLocationFound.bind(this);
  }

  componentDidMount() {
    // TODO: make it so the 'did mount' actually does mount
    this._map.leafletElement.locate({
      setView: true,
      maxZoom: 16,
    });
  }

  onLocationFound(e) {
    // this.setState({
    //   lat: e.latitude,
    //   lng: e.longitude,
    // });
  }

  render() {
    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        ref={elt => this._map = elt}
        onLocationFound={this.onLocationFound}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.activities.map(activity => (
          <Marker
            icon={activity.icon}
            key={activity.id}
            position={activity.position}
          >
            <Popup>
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <h1>{activity.name}</h1>
                  <p>Difficulty</p>
                  <p>{activity.level}</p>
                  <p>Start: 6:40pm End: 8:30pm</p>
                  <p>There are 4 people neeeded (0 friends playing)</p>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="raised"
                    onClick={() => this.props.gotoGame(activity.id)}
                    color="primary"
                    autoFocus
                  >
                    Join Game
                  </Button>
                </Grid>
              </Grid>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}

LeafletMap.propTypes = {
  activities: PropTypes.array.isRequired,
  gotoGame: PropTypes.func.isRequired,
};

export default LeafletMap;
