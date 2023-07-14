import React from 'react'
import propTypes from 'prop-types'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export default function MapView({position, style}) {

    return (
        <MapContainer center={position} zoom={1} style={style? style : { height: '500px', width: '500px', marginRight:'15px',marginBottom: '5px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © OpenStreetMap contributors"
            />
            <Marker position={position} />
        </MapContainer>
    )
}

MapView.prototype = {
    position:propTypes.arrayOf(Number).isRequired,
    style: propTypes.object,
}