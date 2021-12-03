import React from 'react';
import Slider from 'react-slick';
import BasicLayout from '../layouts/Basic';
import Contact from '../components/Home/Contact';
import Image from 'next/image';
import Seo from '../components/Seo';
import EventsBanner from '../public/events-banner.webp';
import Slide1 from '../public/events-slide-1.webp';
import Slide2 from '../public/events-slide-2.webp';
import Slide3 from '../public/events-slide-3.webp';
import Slide4 from '../public/events-slide-4.webp';

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
                     <Image src={EventsBanner} alt="Events Banner" />
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
               <SliderEvents
                  settings={settings}
                  Slider1={Slide1}
                  Slider2={Slide2}
                  Slider3={Slide3}
                  Slider4={Slide4}
               />
            </div>
            <Contact />
         </section>
      </BasicLayout>
   );
}

function SliderEvents({ settings, Slider1, Slider2, Slider3, Slider4 }) {
   return (
      <Slider {...settings}>
         <div>
            <Image src={Slider1} alt="Events Slide 1" />
         </div>
         <div>
            <Image src={Slider2} alt="Events Slide 2" />
         </div>
         <div>
            <Image src={Slider3} alt="Events Slide 3" />
         </div>
         <div>
            <Image src={Slider4} alt="Events Slide 4" />
         </div>
      </Slider>
   );
}
