import { Button, Image } from 'semantic-ui-react';

export default function Catalogs() {
   return (
      <section className="catalogs">
         <div className="catalogs-container container">
            <div className="row">
               <div className="col-12 col-md-6 col-lg-4">
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-navideno.jpg"
                        alt="catalogo-navideño"
                        fluid
                     />
                     <h3 className="h4 pt-4">Catálogo Navideño</h3>
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
                     <Image
                        src="/catalogo-empresas.jpg"
                        alt="catalogo-empresas"
                        fluid
                     />
                     <h3 className="h4 pt-4">Regalos Corporativos</h3>
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
                     <Image
                        src="/catalogo-personalizado.jpg"
                        alt="catalogo-personalizado"
                        fluid
                     />
                     <h3 className="h4 pt-4">Proyectos Personalizados</h3>
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
