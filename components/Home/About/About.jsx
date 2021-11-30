import Link from 'next/link';
import { Button, Container, Grid, Image } from 'semantic-ui-react';

export default function About() {
   return (
      <section className="about">
         <Container fluid className="about-container">
            <Grid>
               <Grid.Column width={8} className="about-container-description">
                  <h2>Todo el sabor europeo desde 1987</h2>
                  <p>
                     Somos una empresa con más de 30 años de experiencia en el
                     mercado. Nos dedicamos a la producción de chocolatería y
                     bombonería artesanal elaborada por expertos chocolateros
                     mexicanos.
                  </p>
                  <Link href="/xocobel">
                     <Button basic>MÁS</Button>
                  </Link>
               </Grid.Column>
               <Grid.Column width={8}>
                  <Image src="/chocolate-about.webp" />
               </Grid.Column>
            </Grid>
         </Container>
      </section>
   );
}
