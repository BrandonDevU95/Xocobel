import { Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import BasicLayout from '../layouts/Basic';
import Contact from '../components/Home/Contact';
import Seo from '../components/Seo';

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
         <Seo title="EVENTOS | LOS MEJORES EVENTOS CON XOCOBEL" />
         <section className="pt-5">
            <div className="events-container container">
               <div className="events-container_row row">
                  <div className="events-container_row-col col-12 col-lg-6 order-2 order-lg-1">
                     <Image src="/events-banner.jpeg" alt="Events Banner" />
                  </div>
                  <div className="events-container_row-col col-12 col-lg-6 order-1 order-lg-2">
                     <div className="events-container_row-col-description">
                        <h2 className="h1 text-center">
                           Tu Evento con Xocobel
                        </h2>
                        <p className="h4">
                           Amamos crear experiencias geniales y memorables,
                           mediante el diseño, personalización y montaje de
                           mesas de postres para cualquier tipo de evento u
                           ocasión. Poniendo a su disposición nuestro amplio
                           catálogo de deliciosos y originales productos,
                           montados y presentados sobre una gran variedad de
                           bases y arreglos. Además, un experto chocolatero
                           siempre estará a su disposición para el diseño de la
                           mesa de postres perfecta para su evento. ¡En Xocobel
                           queremos contribuir para hacer de tu evento algo
                           especial, único e irrepetible!
                        </p>
                     </div>
                  </div>
               </div>
               <SliderEvents settings={settings} />
            </div>
            <Contact />
         </section>
      </BasicLayout>
   );
}

function SliderEvents({ settings }) {
   return (
      <Slider {...settings}>
         <div>
            <Image src="/events-slide-1.jpeg" alt="Events Slide 1" />
         </div>
         <div>
            <Image src="/events-slide-2.jpeg" alt="Events Slide 2" />
         </div>
         <div>
            <Image src="/events-slide-3.jpeg" alt="Events Slide 3" />
         </div>
         <div>
            <Image src="/events-slide-4.jpeg" alt="Events Slide 4" />
         </div>
      </Slider>
   );
}
