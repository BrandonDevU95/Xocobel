import { size } from 'lodash';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getProductsApi } from '../api/products';
import { Grid, Loader } from 'semantic-ui-react';
import ListProducts from '../components/ListProducts';
import CategoryRetail from '../components/categoryRetail';
import {
   getCategoryRetailApi,
   getTotalProductsCategoryApi,
} from '../api/category-retail';

const limitPerPage = 10;

export default function boutique() {
   const { query } = useRouter();
   const [products, setProducts] = useState(false);
   const [totalProducts, setTotalProducts] = useState(null);
   const [categoryRetail, setCategoryRetail] = useState([]);

   const getStartItem = () => {
      const currentPages = parseInt(query.page);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
   };

   useEffect(() => {
      (async () => {
         const response = await getCategoryRetailApi();
         if (size(response) > 0) setCategoryRetail(response);
         else setCategoryRetail([]);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getProductsApi();
         if (size(response) > 0) setProducts(response);
         else setProducts([]);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const response = await getTotalProductsCategoryApi();
         setTotalProducts(response);
      })();
   }, []);

   console.log(getStartItem());

   return (
      <BasicLayout className="boutique">
         <Grid>
            <Grid.Column width={3}>
               <h3>Categorias</h3>
               <CategoryRetail categoryRetail={categoryRetail} />
            </Grid.Column>
            <Grid.Column stretched width={12}>
               {!products && <Loader active>Cargando Productos</Loader>}
               {products && size(products) === 0 && (
                  <div>
                     <h3>No hay productos</h3>
                  </div>
               )}
               {size(products) > 0 && <ListProducts products={products} />}
            </Grid.Column>
         </Grid>
      </BasicLayout>
   );
}
