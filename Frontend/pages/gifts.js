import { size } from 'lodash';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getGiftsProductsApi } from '../api/products';
import { Container, Grid, Loader } from 'semantic-ui-react';
import Pagination from '../components/Pagination';
import ListProducts from '../components/ListProducts';
import RecommendedProducts from '../components/Home/RecommendedProducts';

// TODO: Cambiar esta variable desde strapi
const limitPerPage = 10;

export default function gifts() {
   const { query } = useRouter();
   const [gifts, setGifts] = useState(null);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      (async () => {
         const response = await getGiftsProductsApi(
            limitPerPage,
            getStartItem()
         );
         if (size(response) > 0) setGifts(response);
         else setGifts([]);
      })();
   }, [query]);

   if (!gifts) return null;

   return (
      <BasicLayout className="gifts">
         <Seo title="GIFTS | UN REGALO PARA ALGUIEN ESPECIAL" />
         <Container fluid className="gifts-container">
            <Grid>
               <Grid.Column stretched width={16}>
                  {!gifts && <Loader active>Cargando Productos</Loader>}
                  {gifts && size(gifts) === 0 && (
                     <div>
                        <h3>No hay productos</h3>
                     </div>
                  )}
                  {size(gifts) > 0 && <ListProducts products={gifts} />}
                  {size(gifts) > 0 && (
                     <Pagination
                        totalProducts={12}
                        page={query.page ? parseInt(query.page) : 1}
                        limitPerPage={limitPerPage}
                     />
                  )}
               </Grid.Column>
            </Grid>
            <RecommendedProducts />
         </Container>
      </BasicLayout>
   );
}
