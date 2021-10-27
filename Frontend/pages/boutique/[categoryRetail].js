import { size } from 'lodash';
import { useRouter } from 'next/router';
import { Loader, Grid } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import ListProducts from '../../components/ListProducts';
import BasicLayout from '../../layouts/Basic/BasicLayout';
import CategoryRetail from '../../components/categoryRetail';
import { getProductsByCategoryApi } from '../../api/products';
import { getCategoryRetailApi } from '../../api/category-retail';

const limitPerPage = 10;

export default function CategoryRetailWeb() {
   const { query } = useRouter();
   const [products, setProducts] = useState(null);
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
         if (query.categoryRetail) {
            const response = await getProductsByCategoryApi(
               query.categoryRetail,
               limitPerPage,
               0
            );
            setProducts(response);
         }
      })();
   }, [query]);

   return (
      <BasicLayout className="category-retail">
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
