import { useState, useEffect } from 'react';
import { Button, Container, Grid, Image, Loader } from 'semantic-ui-react';
import ListProducts from '../../ListProducts';
import { getPopularProductsApi } from '../../../api/products';
import { size } from 'lodash';

export default function PopularProducts() {
   const [popularProducts, setPopularProducts] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getPopularProductsApi();
         setPopularProducts(response);
      })();
   }, []);

   return (
      <Container fluid className="popular-products">
         <h1>Popular Products</h1>
         <div className="popular-products__list">
            {!popularProducts && <Loader active>Cargando Productos</Loader>}
            {popularProducts && size(popularProducts) === 0 && (
               <div className="popular-products__list-not-found">
                  <h3>Por el momento no hay productos populares disponibles</h3>
               </div>
            )}
            {size(popularProducts) > 0 && (
               <ListProducts products={popularProducts} />
            )}
         </div>
         <div className="popular-products__grid">
            <Grid>
               <Grid.Column width={8}>
                  <div className="popular-products__grid-content">
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
                  <div className="popular-products__grid-content">
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
                  <div className="popular-products__grid-content">
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
         </div>
      </Container>
   );
}
