import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
require('dotenv').config();

// export default function Map() {
//   const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.KEY }}
//         defaultCenter={coords}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={''}
//         onChange={''}
//         onChildClick={''}


//       />
//     </div>
//   )
// }