import { Button } from 'semantic-ui-react';
import Image from 'next/image';
import CatalogNav from '../../../public/catalogo-navideno.jpeg';
import CatalogEmp from '../../../public/catalogo-empresas.jpeg';
import CatalogCus from '../../../public/catalogo-personalizado.jpeg';

export default function Catalogs() {
   return (
      <section className="catalogs">
         <div className="catalogs-container container">
            <div className="row">
               <div className="col-12 col-md-6 col-lg-4">
                  <div className="catalogs-container_catalog">
                     <Image src={CatalogNav} alt="catalogo-navideño" />
                     <h3 className="h4">Catálogo Navideño</h3>
                     <Button
                        as="a"
                        href="/pdf/catalogo-navidad.pdf"
                        target="_blank"
                        basic
                        type="button"
                     >
                        Descarga el Catálogo
                     </Button>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-lg-4">
                  <div className="catalogs-container_catalog">
                     <Image src={CatalogEmp} alt="catalogo-empresas" />
                     <h3 className="h4">Regalos Corporativos</h3>
                     <Button
                        as="a"
                        href="/corporate#contact"
                        basic
                        type="button"
                     >
                        Contáctanos
                     </Button>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-lg-4">
                  <div className="catalogs-container_catalog">
                     <Image src={CatalogCus} alt="catalogo-personalizado" />
                     <h3 className="h4">Proyectos Personalizados</h3>
                     <Button
                        as="a"
                        href="/corporate#contact"
                        basic
                        type="button"
                     >
                        Contáctanos
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
