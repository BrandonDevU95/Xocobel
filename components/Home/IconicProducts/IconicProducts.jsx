import { Button, Container, Grid, Image } from 'semantic-ui-react';

export default function IconicProducts() {
   return (
      <section className="iconic-products">
         <Container fluid className="iconic-products_container">
            <Grid>
               <Grid.Column width={8}>
                  <div className="iconic-products_container-content">
                     <Image src="/Popular1.jpeg" fluid alt="Product 1" />
                     <div className="iconic-products_container-content-description">
                        <p>Chocolate</p>
                        <p>Con leche</p>
                     </div>
                     <div className="iconic-products_container-content-btnAction-right_1">
                        <Button type="button" primary>
                           MÁS
                        </Button>
                     </div>
                  </div>
                  <div className="iconic-products_container-content">
                     <Image src="/Popular2.jpeg" fluid alt="Product 2" />
                     <div className="iconic-products_container-content-description">
                        <p>Chocolate</p>
                        <p>Blanco</p>
                     </div>
                     <div className="iconic-products_container-content-btnAction-left">
                        <Button type="button" primary>
                           MÁS
                        </Button>
                     </div>
                  </div>
               </Grid.Column>
               <Grid.Column width={8}>
                  <div className="iconic-products_container-content">
                     <Image src="/Popular3.jpeg" fluid alt="Product 3" />
                     <div className="iconic-products_container-content-description">
                        <p>Chocolate</p>
                        <p>Semiamargo</p>
                     </div>
                     <div className="iconic-products_container-content-btnAction-right_2">
                        <Button type="button" primary>
                           DESCUBRE
                        </Button>
                     </div>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </section>
   );
}
