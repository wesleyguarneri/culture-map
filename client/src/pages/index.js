import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import styles from '@styles/Home.module.scss';
import geoJsonData from 'public/countries.geojson';

const DEFAULT_CENTER = [38.907132, -77.036546]


export default function Home() {

  const onCountryClick = (event) => {
    const countryName = event.target.feature.properties.ADMIN; 
    console.log(`You clicked on: ${countryName}`);
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
            {({ TileLayer, GeoJSON }) => (
              <>
                <TileLayer
                  url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=bsDT2UzO0Fp8DBbkmOyZ"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

                <GeoJSON
                    data={geoJsonData}
                    style={{
                      color: '#ffffff',
                      weight: 2,
                    }}
                    onEachFeature={onEachFeature}
                />
                {/* <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker> */}
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  )
}
