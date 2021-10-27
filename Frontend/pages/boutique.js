import { size } from 'lodash';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { getProductsApi } from '../api/products';
import { Grid, Loader } from 'semantic-ui-react';
import ListProducts from '../components/ListProducts';
import CategoryRetail from '../components/categoryRetail';
import { getCategoryRetailApi } from '../api/category-retail';

export default function boutique() {
   const [products, setProducts] = useState(false);
   const [categoryRetail, setCategoryRetail] = useState([]);

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
