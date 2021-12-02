import Image from 'next/image';
import Gift from '../../../public/icons/gift-box.svg';
import Truck from '../../../public/icons/truck.svg';
import Padlock from '../../../public/icons/padlock.svg';

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
                     <Image src={Gift} alt="Regalos" />
                  </div>
               </div>
               <div className="shipping-container_row-col col-12 col-md-4 col-lg-4">
                  <div className="shipping-container_row-col_data">
                     <div className="shipping-container_row-col_data-info">
                        <h4>Envíos Fáciles y</h4>
                        <h3>Rápidos</h3>
                     </div>
                     <Image src={Truck} alt="Envíos" />
                  </div>
               </div>
               <div className="shipping-container_row-col col-12 col-md-4 col-lg-4">
                  <div className="shipping-container_row-col_data">
                     <div className="shipping-container_row-col_data-info">
                        <h3>Pagos</h3>
                        <h4>Seguros</h4>
                     </div>
                     <Image src={Padlock} alt="Seguridad" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
