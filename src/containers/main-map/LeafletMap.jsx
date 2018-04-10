import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

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
    this.setState({
      lat: e.latitude,
      lng: e.longitude,
    });
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
            onClick={() => console.log("fuck my shit up")}
            icon={activity.icon}
            key={activity.id}
            position={activity.position}
          >
            <Popup>
              <span> Here is text </span>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}

LeafletMap.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default LeafletMap;
