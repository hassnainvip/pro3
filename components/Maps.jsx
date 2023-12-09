import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapGL = () => {
  const [zoomMap, setZoomMap] = useState(false);

  const searchResults = [
    { lat: 24.8785525, long: 67.0726098, title: 'techriffic' },
    { lat: 24.8784333, long: 67.0725535, title: 'techriffic-near' },
    { lat: 24.8783668, long: 67.0727385, title: 'techriffic-near2' },
  ];

  const positionMarker = {
    lat: 24.8785525,
    long: 67.0726098,
    title: 'techriffic headquarter',
  };

  const [selectedLocation, setSelectedLocation] = useState({});

  const coord = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coord);
  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
  });

  return (
    <Map
      onClick={() => setZoomMap(true)}
      initialViewState={{
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        zoom: 15,
      }}
      scrollZoom={zoomMap}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/muhammadhammad848/clih52ks8000101o4b2ri5do5"
      mapboxAccessToken="pk.eyJ1IjoibXVoYW1tYWRoYW1tYWQ4NDgiLCJhIjoiY2xjOXkzdjd2MXVzZTNucDYxMDg5M3c4eSJ9.BBSkEnvqsR__JhGGvzid9Q"
      width="100%"
      height="100%"
    >
      <span>
        <Marker
          longitude={positionMarker.long}
          latitude={positionMarker.lat}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            role="img"
            onClick={() => setSelectedLocation(positionMarker)}
            className="text-2xl cursor-pointer animate-bounce"
            aria-label="push-pin"
          >
            📌
          </p>
        </Marker>
        {selectedLocation.long === positionMarker.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={false}
            longitude={positionMarker.long}
            latitude={positionMarker.lat}
          >
            <p className="rounded-lg">{positionMarker.title}</p>
          </Popup>
        ) : null}
      </span>
    </Map>
  );
};

export default MapGL;