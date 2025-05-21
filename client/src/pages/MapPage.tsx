import Container from "@components/Container";
import DetailPanel from "@components/Detail Panel";
import geoJsonData from 'public/countries.geojson';
import Map from '@components/Map';
import { useState, useEffect } from 'react';

const DEFAULT_CENTER = [38.907132, -77.036546]
const API_URL = "http://localhost:5000/api"

export async function getStaticProps() {
  return {
    props: {},
  };
}
import styles from '@styles/Home.module.scss';

export default function MapPage() {
     const [countryJson, setCountryJson] = useState(null);
      const [bookData, setBookData] = useState([]);
      const [isPanelOpen, setIsPanelOpen] = useState(true);
    
      const onCountryClick = async (event) => {
        const country = event.target.feature.properties.ISO_A2; 
        try {
          const response = await fetch(`${API_URL}/country/${country}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const data = await response.json();
          setCountryJson(data); 
          getBookDataByCountry(data.isoA3);
    
        } catch (error) {
          console.error(error)
        }
      };
    
      const getBookDataByCountry = async (isoA3) => {
        try {
          const response = await fetch(`${API_URL}/book/country/${isoA3}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },
          });
          if (!response.ok) {
            setBookData([]);
            throw new Error(`Response status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log('bookData',data)
          setBookData(data); 
    
        } catch (error) {
    
        }
      };
    
      const onEachFeature = (feature, layer) => {
        layer.on({
          click: onCountryClick,
        });
        setIsPanelOpen(true);
      };
    
      useEffect(() => {
        if (countryJson) {
          setIsPanelOpen(true);
        }
      }, [countryJson]);
    return (
      <Container>
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, GeoJSON }) => (
            <>

              <GeoJSON
                  data={geoJsonData}
                  style={{
                    color: 'transparent',
                    fillColor: "transparent",
                    weight: 2,
                  }}
                  onEachFeature={onEachFeature}
              />
            </>
          )}
        </Map>


        {isPanelOpen && countryJson && bookData && (
          <DetailPanel 
          countryData={countryJson} 
          bookData={bookData} 
          onClose={() => setIsPanelOpen(false)}
        />          )}
      </Container>
    )
}
