import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import SportIcon from './SportIcon';

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
    return [this, e];
  }

  render() {
    const mapURL = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        ref={(elt) => { this._map = elt; }}
        onLocationFound={this.onLocationFound}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url={mapURL}
        />
        {this.props.activities.map(activity => (
          <SportIcon
            key={activity.id}
            gotoGame={this.props.gotoGame}
            setCurrentGame={this.props.setCurrentGame}
            {...activity}
          />
        ))}
      </Map>
    );
  }
}

LeafletMap.propTypes = {
  activities: PropTypes.array.isRequired,
  gotoGame: PropTypes.func.isRequired,
  setCurrentGame: PropTypes.func.isRequired,
};

export default LeafletMap;
