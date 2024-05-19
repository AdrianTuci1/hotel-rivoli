import React from 'react'
import './map.scss'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MyMap() {
  const position = [44.41718, 26.17410];

  return(
    <div className="map">
    <MapContainer center={position} zoom={14} zoomControl={false} scrollWheelZoom={false} style={{height:'660px', width:'1300px'}}>
      <TileLayer
        url= {import.meta.env.VITE_MAP_KEY}
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
    </div>
  )
};

export default MyMap;
