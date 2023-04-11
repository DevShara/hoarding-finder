import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import './map.css'

const Map = ({ location, zoomLevel }) => (
    <div className="map w-3/4   ">

  
      <div className="google-map h-48  ">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAXVicIAv2GBB8ukAC6H70eZOLcxJkAlvQ' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;