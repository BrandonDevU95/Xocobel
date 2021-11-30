import { Button, Container, Grid, Image } from 'semantic-ui-react';

export default function Catalogs() {
   return (
      <Container fluid className="catalogs">
         <Container fluid className="catalogs-container">
            <Grid columns="equal">
               <Grid.Column>
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-navideno.webp"
                        alt="catalogo-navideño"
                        fluid
                     />
                     <h3>Catálogo Navideño</h3>
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
               </Grid.Column>
               <Grid.Column>
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-empresas.webp"
                        alt="catalogo-empresas"
                        fluid
                     />
                     <h3>Regalos Corporativos</h3>
                     <Button
                        as="a"
                        href="/corporate#contact"
                        basic
                        type="button"
                     >
                        Contáctanos
                     </Button>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-personalizado.webp"
                        alt="catalogo-personalizado"
                        fluid
                     />
                     <h3>Proyectos Personalizados</h3>
                     <Button
                        as="a"
                        href="/corporate#contact"
                        basic
                        type="button"
                     >
                        Contáctanos
                     </Button>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}
