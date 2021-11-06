import React from 'react';
import { Container } from 'semantic-ui-react';
import Catalogs from '../components/Corporate/Catalogs';
import MainBanner from '../components/Corporate/MainBanner';
import ServiceInfo from '../components/Corporate/ServiceInfo';
import Contact from '../components/Home/Contact';
import BasicLayout from '../layouts/Basic';

export default function Corporate() {
   return (
      <BasicLayout className="corporate">
         <Container fluid className="corporate-container">
            <MainBanner />
            <Catalogs />
            <ServiceInfo />
            <Contact />
         </Container>
      </BasicLayout>
   );
}
