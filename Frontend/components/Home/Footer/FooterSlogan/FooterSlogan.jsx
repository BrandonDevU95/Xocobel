import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default function FooterSlogan() {
   return (
      <div className="footer-slogan">
         <Container fluid className="footer-slogan-container">
            <p style={{ paddingRight: '1.5rem' }}>Todo el sabor europeo</p>
            <Image src="/corona.png" />
            <p style={{ paddingLeft: '1.5rem' }}>Desde 1987</p>
         </Container>
      </div>
   );
}
