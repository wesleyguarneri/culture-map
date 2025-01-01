import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import styles from '@styles/Home.module.scss';
import { GeoJSON } from 'react-leaflet';

const DEFAULT_CENTER = [38.907132, -77.036546];

const geoJsonData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'United States of America'},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-125.001650, 24.949300],
            [-66.932640, 24.949300],
            [-66.932640, 49.590400],
            [-125.001650, 49.590400],
            [-125.001650, 24.949300]
          ]
        ]
      }
    },
  ],
};

export default function Home() {
  const onCountryClick = (event) => {
    const countryName = event.target.feature.properties.name;
    alert(`You clicked on: ${countryName}`);
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: onCountryClick,
    });
  };

  return (
    <Layout>
      <Head>

      </Head>

      <Section>
        <Container>
          <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=bsDT2UzO0Fp8DBbkmOyZ"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  );
}
