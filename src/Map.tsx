import React from 'react'
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet';

const FullScreenMap = React.memo(function FullScreenMap(props) {

  const getClassname = () => {
    const location = useLocation();
    switch(location.pathname) {
    case '/contact':
      return 'visible';
    default:
      return 'hidden';
    }
  }


  const southWest = L.latLng(17.476, -126.386);
  const northEast = L.latLng(51.289, -44.472);
  const bounds = L.latLngBounds(southWest, northEast);

  return (
    <div id='mapdiv' className={`full-screen-map ${getClassname()}`}>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossOrigin=""/>
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""></script>
      {/* https://docs.mapbox.com/studio-manual/overview/publish-your-style/#mapboxjs-and-leaflet */}
      <MapContainer
        attributionControl={false}
        center={[41.796242, -87.580913]}
        zoom={11}
        minZoom={5}
        zoomSnap={1}
        zoomControl={false}
        maxBounds={bounds}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/devopsrockstars/ckhobopaz1o8519lupxgprhji/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2b3Bzcm9ja3N0YXJzIiwiYSI6InpUN3Buak0ifQ.a9f4FaZbPCK6GNJc8ImH7w"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap2</a> contributors'
        />
      </MapContainer>
    </div>
  )
});

export default FullScreenMap