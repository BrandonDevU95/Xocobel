import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default function FooterSlogan() {
   return (
      <section className="footer-slogan">
         <div className="footer-slogan-container container">
            <p className="h1">Todo el sabor europeo</p>
            <Image src="/corona.png" />
            <p className="h1">Desde 1987</p>
         </div>
      </section>
   );
}
