import { Button, Container, Grid, Image } from 'semantic-ui-react';
import Link from 'next/link';

export default function IconicProducts() {
   return (
      <section className="iconic-products">
         <Container fluid className="iconic-products_container">
            <Grid>
               <Grid.Column width={8}>
                  <div className="iconic-products_container-content">
                     <Image src="/Popular1.webp" fluid alt="Product 1" />
                     <div className="iconic-products_container-content-description">
                        <p>Chocolate</p>
                        <p>Con leche</p>
                     </div>
                     <div className="iconic-products_container-content-btnAction-right_1">
                        <Link
                           href={{
                              pathname: '/boutique',
                              query: { type: 'chocolate-con-leche' },
                           }}
                        >
                           <a>
                              <Button type="button" primary>
                                 MÁS
                              </Button>
                           </a>
                        </Link>
                     </div>
                  </div>
                  <div className="iconic-products_container-content">
                     <Image src="/Popular2.webp" fluid alt="Product 2" />
                     <div className="iconic-products_container-content-description">
                        <p>Chocolate</p>
                        <p>Blanco</p>
                     </div>
                     <div className="iconic-products_container-content-btnAction-left">
                        <Link
                           href={{
                              pathname: '/boutique',
                              query: { type: 'chocolate-blanco' },
                           }}
                        >
                           <a>
                              <Button type="button" primary>
                                 MÁS
                              </Button>
                           </a>
                        </Link>
                     </div>
                  </div>
               </Grid.Column>
               <Grid.Column width={8}>
                  <div className="iconic-products_container-content">
                     <Image src="/Popular3.webp" fluid alt="Product 3" />
                     <div className="iconic-products_container-content-description">
                        <p>Chocolate</p>
                        <p>Semiamargo</p>
                     </div>
                     <div className="iconic-products_container-content-btnAction-right_2">
                        <Link
                           href={{
                              pathname: '/boutique',
                              query: { type: 'chocolate-blanco' },
                           }}
                        >
                           <a>
                              <Button type="button" primary>
                                 DESCUBRE
                              </Button>
                           </a>
                        </Link>
                     </div>
                  </div>
               </Grid.Column>
            </Grid>
         </Container>
      </section>
   );
}
