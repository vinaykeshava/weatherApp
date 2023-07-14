import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


export default function MapView({position}) {

    return (
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '500px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © OpenStreetMap contributors"
            />
            <Marker position={[51.505, -0.09]} />
        </MapContainer>
    )
}
