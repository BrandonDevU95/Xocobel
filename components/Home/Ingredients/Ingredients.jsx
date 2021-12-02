import Image from 'next/image';
import Cocoa from '../../../public/icons/cocoa.svg';
import Chef from '../../../public/icons/chef.svg';
import Pyramid from '../../../public/icons/pyramid-of-the-magician.svg';

export default function Ingredients() {
   return (
      <section className="ingredients">
         <div className="ingredients-container container">
            <div className="ingredients-container_row row">
               <div className="ingredients-container_row-col col-12 col-sm-4 col-md-4 col-lg-4">
                  <div className="ingredients-container_row-col-description">
                     <h2 className="h2">Ingredientes Naturales</h2>
                     <Image src={Cocoa} alt="Cocoa" />
                     <p>
                        Chocolate certificado SICAO <br /> por Barry Callebaut
                     </p>
                  </div>
               </div>
               <div className="ingredients-container_row-col col-12 col-sm-4 col-md-4 col-lg-4">
                  <div className="ingredients-container_row-col-description">
                     <h2 className="h2">Gourmet</h2>

                     <Image src={Chef} alt="Gourmet" />
                     <p>
                        Chocolatería y Bombonería <br /> artesanal
                     </p>
                  </div>
               </div>
               <div className="ingredients-container_row-col col-12 col-sm-4 col-md-4 col-lg-4">
                  <div className="ingredients-container_row-col-description">
                     <h2 className="h2">Hecho En México</h2>

                     <Image src={Pyramid} alt="Hecho En México" />
                     <p>
                        Elaborada por expertos <br /> chocolateros mexicanos
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
