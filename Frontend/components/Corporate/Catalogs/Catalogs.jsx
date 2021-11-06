import { Button, Container, Grid, Image } from 'semantic-ui-react';

export default function Catalogs() {
   return (
      <Container fluid className="catalogs">
         <Container fluid className="catalogs-container">
            <Grid columns="equal">
               <Grid.Column>
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-navideno.jpeg"
                        alt="catalogo-navideño"
                        fluid
                     />
                     <h3>Catálogo para la Navideño</h3>
                     <Button basic type="button">
                        Descarga el catalogo
                     </Button>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-empresas.jpeg"
                        alt="catalogo-empresas"
                        fluid
                     />
                     <h3>Catálogo para las Empresas</h3>
                     <Button basic type="button">
                        Descarga el catalogo
                     </Button>
                  </div>
               </Grid.Column>
               <Grid.Column>
                  <div className="catalogs-container_catalog">
                     <Image
                        src="/catalogo-personalizado.jpeg"
                        alt="catalogo-personalizado"
                        fluid
                     />
                     <h3>Proyectos Personalizados</h3>
                     <Button basic type="button">
                        Contactanos
                     </Button>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}
