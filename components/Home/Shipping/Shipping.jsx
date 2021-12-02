import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Shipping() {
   return (
      <section className="shipping d-none d-md-block d-lg-block">
         <div className="shipping-container container">
            <div className="shipping-container_row row">
               <div className="shipping-container_row-col col-12 col-md-4 col-lg-4">
                  <div className="shipping-container_row-col_data">
                     <div className="shipping-container_row-col_data-info">
                        <h3>Regalos</h3>
                        <h4>Personalizados</h4>
                     </div>
                     <Image src="/icons/gift-box.svg" />
                  </div>
               </div>
               <div className="shipping-container_row-col col-12 col-md-4 col-lg-4">
                  <div className="shipping-container_row-col_data">
                     <div className="shipping-container_row-col_data-info">
                        <h4>Envíos Fáciles y</h4>
                        <h3>Rápidos</h3>
                     </div>
                     <Image src="/icons/truck.svg" />
                  </div>
               </div>
               <div className="shipping-container_row-col col-12 col-md-4 col-lg-4">
                  <div className="shipping-container_row-col_data">
                     <div className="shipping-container_row-col_data-info">
                        <h3>Pagos</h3>
                        <h4>Seguros</h4>
                     </div>
                     <Image src="/icons/padlock.svg" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
