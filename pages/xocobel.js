import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import Shipping from '../components/Home/Shipping';
import BasicLayout from '../layouts/Basic';

export default function xocobel() {
   return (
      <BasicLayout className="xocobel">
         <Container fluid className="xocobel-container">
            <div className="xocobel-container-banner">
               <div className="xocobel-container-banner-info">
                  <h2>XOCOBEL</h2>
                  <p>
                     Somos una empresa con más de 30 años de experiencia en el
                     <br />
                     mercado. Nos dedicamos a la producción de chocolatería y
                     <br />
                     bombonería artesanal elaborada por expertos chocolateros
                     mexicanos.
                  </p>
               </div>
            </div>
            <div className="xocobel-container-band">
               <h3>NUESTRA MISIÓN</h3>
               <p>
                  Nuestra misión se basa en contribuir al desarrollo de la
                  <br />
                  industria nacional chocolatera a través de la producción
                  <br />
                  eficiente y responsable de chocolatería fina de la más alta
                  <br />
                  calidad, permitiéndonos llegar a diferentes categorías y<br />
                  nuevos mercados, promoviendo la reinvención e innovación
                  <br />
                  continua, teniendo como principal objetivo ser una compañía
                  <br />
                  líder en la industria chocolatera a nivel internacional.
               </p>
            </div>
            <div className="xocobel-container-grid-1">
               <Grid>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-1.jpeg" alt="Xocobel 1" fluid />
                  </Grid.Column>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-1_column"
                  >
                     <div className="xocobel-container-grid-1_column-description">
                        <h3>OBJETIVO CLARO</h3>
                        <p>
                           Nuestro objetivo es poder permanecer en el gusto del
                           mercado a través de la innovación continua, adoptando
                           nuevas tendencias culinarias que nos permitan
                           permanecer posicionados como una de las marcas
                           premium en el mercado.
                        </p>
                     </div>
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-grid-2">
               <Grid>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-2_column"
                  >
                     <div className="xocobel-container-grid-2_column-description">
                        <h3>GRAN VARIEDAD DE PRODUCTOS</h3>
                        <p>
                           Algunos de nuestros productos son: Chocolatines,
                           Trufas, Mazapanes, Ganaches, Galletas, Pralinés,
                           Grajeados, Jarabes, Barras Nutrimentales, Pasta de
                           frutas, entre otros.
                        </p>
                     </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-2.jpeg" alt="Xocobel 2" fluid />
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-grid-1">
               <Grid>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-3.jpeg" alt="Xocobel 3" fluid />
                  </Grid.Column>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-1_column"
                  >
                     <div className="xocobel-container-grid-1_column-description">
                        <h3>LA MÁS ALTA CALIDAD</h3>
                        <p>
                           Equipo de última generación, con una capacidad de
                           producción en toneladas diarias. Personal altamente
                           calificado con los más altos estándares de calidad,
                           seguridad e higiene.
                        </p>
                     </div>
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-grid-2">
               <Grid>
                  <Grid.Column
                     width={8}
                     className="xocobel-container-grid-2_column"
                  >
                     <div className="xocobel-container-grid-2_column-description">
                        <h3>PROCESOS CERTIFICADOS</h3>
                        <p>
                           Certificación ante Global Foof Safety Initiative.
                           Líneas de producción altamente eficientes y
                           flexibles.
                        </p>
                     </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                     <Image src="/xocobel-4.jpeg" alt="Xocobel 4" fluid />
                  </Grid.Column>
               </Grid>
            </div>
            <div className="xocobel-container-band-foot">
               <div className="xocobel-container-band-foot-data">
                  <h3>PROPÓSITO</h3>
                  <p>
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
         </Container>
      </BasicLayout>
   );
}
