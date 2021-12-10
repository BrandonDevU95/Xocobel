import { Image } from 'semantic-ui-react';

export default function Ingredients() {
   return (
      <section className="ingredients">
         <div className="ingredients-container container">
            <div className="ingredients-container_row row">
               <div className="ingredients-container_row-col col-12 col-sm-4 col-md-4 col-lg-4">
                  <div className="ingredients-container_row-col-description">
                     <h2 className="h2">Ingredientes Naturales</h2>
                     <Image src="/icons/cocoa.svg" alt="Cocoa" />
                     <p>
                        Chocolate certificado SICAO <br /> por Barry Callebaut
                     </p>
                  </div>
               </div>
               <div className="ingredients-container_row-col col-12 col-sm-4 col-md-4 col-lg-4">
                  <div className="ingredients-container_row-col-description">
                     <h2 className="h2">Gourmet</h2>

                     <Image src="/icons/chef.svg" alt="Gourmet" />
                     <p>
                        Chocolatería y bombonería <br /> artesanal
                     </p>
                  </div>
               </div>
               <div className="ingredients-container_row-col col-12 col-sm-4 col-md-4 col-lg-4">
                  <div className="ingredients-container_row-col-description">
                     <h2 className="h2">Hecho En México</h2>

                     <Image
                        src="/icons/pyramid-of-the-magician.svg"
                        alt="Hecho En México"
                     />
                     <p>
                        Elaborado por expertos <br /> chocolateros mexicanos
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
