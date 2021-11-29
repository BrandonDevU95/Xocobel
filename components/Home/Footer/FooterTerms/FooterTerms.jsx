import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

export default function FooterTerms() {
   return (
      <div className="footer-terms">
         <Container fluid className="footer-terms-container">
            <div className="footer-terms-container_content">
               <div className="footer-terms-container_content_left">
                  <Icon name="copyright outline" />
                  <p>Xocobel SA DE CV</p>
               </div>
               <div className="footer-terms-container_content_right">
                  {/* TODO: Hacer un modal con los términos y condiciones */}
                  <p>Términos y Condiciones</p>
               </div>
            </div>
         </Container>
      </div>
   );
}
