import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDpOLUfI798kV942EgT3laP4SSvwdRg1k8' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={{ disableDefaultUI: true, zoomControl: true }}
        margin={[50, 50, 50, 50]}
        onChange={() => console.log('ok')}
        onChildClick={() => console.log('ok')}
      />
    </div>
  )
}