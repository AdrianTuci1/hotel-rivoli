import React from 'react'
import './map.scss'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function MyMap() {
  const position = [44.41718, 26.17410];

  const customIcon = new L.Icon({
    iconUrl: './bedfrmap.png',
    iconSize: new L.Point(60, 60),
    iconAnchor: new L.Point(25, 60),
  });

  return(
    <div className="map">
      <MapContainer center={position} zoom={14} zoomControl={false} dragging={false} scrollWheelZoom={false} style={{height:'2200px', width:'2200px', overflow: 'hidden'}}>
        <TileLayer
          url= {import.meta.env.VITE_MAP_KEY}
        />
        <Marker position={position} icon={customIcon}/>
      </MapContainer>
    </div>
  )
};

export default MyMap;
