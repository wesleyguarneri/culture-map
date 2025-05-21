import Layout from '@components/Layout';
import Section from '@components/Section';
import React from 'react';
import MapPage from './MapPage';

export default function Home() {

  return (
    <Layout>
      <Section>
        <MapPage></MapPage>
      </Section>
    </Layout>
  )
}
