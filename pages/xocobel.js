import Seo from '../components/Seo';
import { Image } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';

export default function Xocobel() {
   return (
      <BasicLayout className="xocobel">
         <Seo title="XOCOBEL | LÍDER EN LA INDUSTRIA CHOCOLATERA" />
         <section>
            <div className="xocobel-container-banner">
               <div className="xocobel-container-banner-info ">
                  <h3 className="display-3 text-white text-center">XOCOBEL</h3>
                  <p className="lead text-white text-center">
                     Somos una empresa con más de 30 años de experiencia en el
                     <br />
                     mercado. Nos dedicamos a la producción de chocolatería y
                     <br />
                     bombonería artesanal elaborada por expertos chocolateros
                     mexicanos.
                  </p>
               </div>
            </div>
            <div className="xocobel-container-band py-5">
               <h3 className="display-4 text-center">NUESTRA MISIÓN</h3>
               <p className="lead text-center">
                  Nuestra misión se basa en contribuir al desarrollo de la
                  <br />
                  industria nacional chocolatera a través de la producción
                  <br />
                  eficiente y responsable de chocolatería fina de la más alta
                  <br />
                  calidad, permitiéndonos llegar a diferentes categorías y
                  <br />
                  nuevos mercados, promoviendo la reinvención e innovación
                  <br />
                  continua, teniendo como principal objetivo ser una compañía
                  <br />
                  líder en la industria chocolatera a nivel internacional.
               </p>
            </div>
            <div className="xocobel-container-grid">
               <div className="row m-0">
                  <div className="col-12 col-md-6 col-lg-6 p-0">
                     <Image src="/xocobel-1.webp" alt="Xocobel 1" fluid />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
                     <div className="xocobel-container-grid-desc px-5">
                        <h3 className="h1">OBJETIVO CLARO</h3>
                        <p className="lead">
                           Nuestro objetivo es poder permanecer en el gusto del
                           mercado a través de la innovación continua, adoptando
                           nuevas tendencias culinarias que nos permitan
                           permanecer posicionados como una de las marcas
                           premium en el mercado.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="xocobel-container-grid">
               <div className="row m-0">
                  <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center order-2 order-md-1 order-lg-1">
                     <div className="xocobel-container-grid-desc px-5">
                        <h3 className="h1">GRAN VARIEDAD DE PRODUCTOS</h3>
                        <p className="lead">
                           Algunos de nuestros productos son: Chocolatines,
                           Trufas, Mazapanes, Ganaches, Galletas, Pralinés,
                           Grajeados, Jarabes, Barras Nutrimentales, Pasta de
                           frutas, entre otros.
                        </p>
                     </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 p-0 order-1 order-md-2 order-lg-2">
                     <Image src="/xocobel-2.webp" alt="Xocobel 2" fluid />
                  </div>
               </div>
            </div>
            <div className="xocobel-container-grid">
               <div className="row m-0">
                  <div className="col-12 col-md-6 col-lg-6 p-0">
                     <Image src="/xocobel-3.webp" alt="Xocobel 3" fluid />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center ">
                     <div className="xocobel-container-grid-desc px-5">
                        <h3 className="h1">LA MÁS ALTA CALIDAD</h3>
                        <p className="lead">
                           Equipo de última generación, con una capacidad de
                           producción en toneladas diarias. Personal altamente
                           calificado con los más altos estándares de calidad,
                           seguridad e higiene.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="xocobel-container-grid">
               <div className="row m-0">
                  <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center order-2 order-md-1 order-lg-1">
                     <div className="xocobel-container-grid-desc px-5">
                        <h3 className="h1">PROCESOS CERTIFICADOS</h3>
                        <p className="lead">
                           Certificación ante Global Foof Safety Initiative.
                           Líneas de producción altamente eficientes y
                           flexibles.
                        </p>
                     </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 p-0 order-1 order-md-2 order-lg-2">
                     <Image src="/xocobel-4.webp" alt="Xocobel 4" fluid />
                  </div>
               </div>
            </div>
            <div className="xocobel-container-band-foot py-5">
               <div className="xocobel-container-band-foot-data">
                  <h3 className="display-4 text-center">PROPÓSITO</h3>
                  <p className="lead text-center">
                     El éxito de Xocobel se ha basado en un crecimiento
                     <br />
                     sostenido año con año, mediante la oferta de productos de
                     <br />
                     únicos e innovadores. Todos los días, hacemos un esfuerzo
                     <br />
                     adicional para liderar el futuro de la <br /> chocolateria
                     fina en México y el mundo.
                  </p>
               </div>
            </div>
         </section>
      </BasicLayout>
   );
}
