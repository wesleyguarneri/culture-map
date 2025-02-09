import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import styles from '@styles/Home.module.scss';
import React from 'react';
import geoJsonData from 'public/countries.geojson';
import DetailPanel from '@components/Detail Panel';

const DEFAULT_CENTER = [38.907132, -77.036546]
const API_URL = "http://localhost:5000/api/country"


export default function Home() {

  const onCountryClick = async (event) => {
    const country = event.target.feature.properties.ISO_A2; 
    console.log(`You clicked on: ${country}`);
    try {
      const response = await fetch(API_URL+`/${country}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      });
      console.log('res',response)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
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
          <DetailPanel></DetailPanel>
        </Container>
      </Section>
    </Layout>
  )
}
