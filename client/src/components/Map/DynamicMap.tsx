import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.scss';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

const { MapContainer, TileLayer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      // delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
<MapContainer
  className={mapClassName}
  style={{ zIndex: 0, width, height }}
  center={[38.9072, -77.0369]}
  zoom={5} 
  scrollWheelZoom={true} 
>
  {/* <TileLayer
    url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=bsDT2UzO0Fp8DBbkmOyZ"
  /> */}
  <VectorTileLayer
        styleUrl="https://api.maptiler.com/maps/0195be4d-4012-75a6-b86c-5531b79afda5/style.json?key=bsDT2UzO0Fp8DBbkmOyZ"
      />
  {children(ReactLeaflet, Leaflet)}
</MapContainer>
  )
}
// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

export default Map;
