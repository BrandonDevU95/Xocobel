import React from 'react';
import { Container } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';

// TODO: Verificar que los nombres de componentes esten en mayuscylas
export default function Events() {
   return (
      <BasicLayout className="events">
         <Container fluid className="events-container">
            <h1>Events</h1>
         </Container>
      </BasicLayout>
   );
}
