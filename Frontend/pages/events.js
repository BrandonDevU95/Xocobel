import React from 'react';
import Slider from 'react-slick';
import BasicLayout from '../layouts/Basic';
import Contact from '../components/Home/Contact';
import { Container, Grid, Image } from 'semantic-ui-react';

// TODO: Verificar que los nombres de componentes esten en mayuscylas
export default function Events() {
   const settings = {
      className: 'carousel-screen',
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: 1,
      swipeToSlide: true,
   };

   return (
      <BasicLayout className="events">
         <Container fluid className="events-container">
            <div className="events-container_info">
               <Grid>
                  <Grid.Column width={8}>
                     <Image
                        fluid
                        src="/events-banner.jpeg"
                        alt="Events Banner"
                     />
                  </Grid.Column>
                  <Grid.Column width={8}>
                     <div className="events-container_info-description">
                        <h2>Tu Evento con Xocobel</h2>
                        <p>
                           Amamos crear experiencias geniales y memorables,
                           mediante el diseño, personalización y montaje de
                           mesas de postres para cualquier tipo de evento u
                           ocasión. Poniendo a su disposición nuestro amplio
                           catalogo de deliciosos y originales productos,
                           montados y presentados sobre una gran variedad de
                           bases y arreglos. Además, un experto chocolatero
                           siempre estará a su disposición para el diseño de la
                           mesa de postres perfecta para su evento. ¡En Xocobel
                           queremos contribuir para hacer de tu evento algo
                           especial, único e irrepetible!
                        </p>
                     </div>
                  </Grid.Column>
               </Grid>
            </div>
            <Slider {...settings}>
               <div>
                  <Image
                     fluid
                     src="/events-slide-1.jpeg"
                     alt="Events Slide 1"
                  />
               </div>
               <div>
                  <Image
                     fluid
                     src="/events-slide-2.jpeg"
                     alt="Events Slide 2"
                  />
               </div>
               <div>
                  <Image
                     fluid
                     src="/events-slide-3.jpeg"
                     alt="Events Slide 3"
                  />
               </div>
               <div>
                  <Image
                     fluid
                     src="/events-slide-4.jpeg"
                     alt="Events Slide 4"
                  />
               </div>
            </Slider>
            <Contact />
         </Container>
      </BasicLayout>
   );
}
