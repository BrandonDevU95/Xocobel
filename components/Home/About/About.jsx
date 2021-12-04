import Link from 'next/link';
import { Button, Image } from 'semantic-ui-react';

export default function About() {
   return (
      <section className="about">
         <div className="about-container container">
            <div className="about-container_row row">
               <div className="about-container_row-col col-sm-12 col-md-6 col-lg-6 order-2 order-md-1">
                  <div className="about-container_row-col-description">
                     <h2 className="display-5">
                        Todo el sabor europeo desde 1987
                     </h2>
                     <p className="h4">
                        Somos una empresa con más de 30 años de experiencia en
                        el mercado. Nos dedicamos a la producción de
                        chocolatería y bombonería artesanal elaborada por
                        expertos chocolateros mexicanos.
                     </p>
                     <Link href="/xocobel">
                        <Button basic>MÁS</Button>
                     </Link>
                  </div>
               </div>
               <div className="about-container_row-col col-sm-12 col-md-6 col-lg-6 order-1 order-md-2">
                  <Image
                     src="/chocolate-about.jpg"
                     fluid
                     alt="Nuestro Chocolate"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
