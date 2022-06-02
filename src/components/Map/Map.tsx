import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../../utils/fix-map-icon";
import "./Map.scss";

const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[50.2657152, 18.9945008]} zoom={20}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
        />
        <Marker position={[50.2657152, 18.9945008]}>
          <Popup>TEST</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { Map };