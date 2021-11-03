import { Button, Container, Grid, Image } from 'semantic-ui-react';

export default function IconicProducts() {
   return (
      <Container fluid className="iconic-products__grid">
         <Grid>
            <Grid.Column width={8}>
               <div className="iconic-products__grid-content">
                  <Image src="/Popular1.jpeg" fluid alt="Product 1" />
                  <div className="description">
                     <p>Semi Esfera</p>
                     <p>de Chocolate</p>
                  </div>
                  <div className="btnAction-right_1">
                     <Button type="button" primary>
                        MORE
                     </Button>
                  </div>
               </div>
               <div className="iconic-products__grid-content">
                  <Image
                     src="/Popular2.jpeg"
                     fluid
                     alt="Product 2"
                     style={{ marginTop: '1rem' }}
                  />
                  <div className="description">
                     <p>Chocolate</p>
                     <p>Semiamargo</p>
                  </div>
                  <div className="btnAction-left">
                     <Button type="button" basic>
                        MORE
                     </Button>
                  </div>
               </div>
            </Grid.Column>
            <Grid.Column width={8}>
               <div className="iconic-products__grid-content">
                  <Image src="/Popular3.jpeg" fluid alt="Product 3" />
                  <div className="description">
                     <p>Our Iconic</p>
                     <p>Tequila Chocolate</p>
                  </div>
                  <div className="btnAction-right_2">
                     <Button type="button" primary>
                        SHOP NOW
                     </Button>
                  </div>
               </div>
            </Grid.Column>
         </Grid>
      </Container>
   );
}
