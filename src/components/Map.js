import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {

    const libraries = ['places'];
    const center = {
        lat: 43.444815, // default latitude
        lng: 3.755999, // default longitude
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });
    
    if (loadError) {
        return <div>Error loading maps</div>;
    }
    
    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
          <GoogleMap
            zoom={10}
            center={center}
            id="map"
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      );
};