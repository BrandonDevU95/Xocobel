import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Shipping() {
   return (
      <Container fluid className="shipping">
         <Container fluid className="shipping-container">
            <Grid columns="equal">
               <Grid.Column>
                  <div className="shipping-container_data">
                     <div className="shipping-container_data-info">
                        <h3>Regalos</h3>
                        <h4>Personalizados</h4>
                     </div>
                     <Image src="/icons/gift-box.svg" />
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="shipping-container_data">
                     <div className="shipping-container_data-info">
                        <h4>Envíos Fáciles &</h4>
                        <h3>Rápidos</h3>
                     </div>
                     <Image src="/icons/truck.svg" />
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="shipping-container_data">
                     <div className="shipping-container_data-info">
                        <h3>Pagos</h3>
                        <h4>Seguros</h4>
                     </div>
                     <Image src="/icons/padlock.svg" />
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}
