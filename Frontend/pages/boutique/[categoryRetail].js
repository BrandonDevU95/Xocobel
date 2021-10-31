import { size } from 'lodash';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Loader, Grid } from 'semantic-ui-react';
import Pagination from '../../components/Pagination';
import ListProducts from '../../components/ListProducts';
import BasicLayout from '../../layouts/Basic/BasicLayout';
import CategoryRetail from '../../components/categoryRetail';
import { getCategoryRetailApi } from '../../api/category-retail';
import {
   getProductsByCategoryApi,
   getTotalProductsByCategoryApi,
} from '../../api/products';

const limitPerPage = 10;

export default function CategoryRetailWeb() {
   const { query } = useRouter();
   const [products, setProducts] = useState(null);
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
         if (query.categoryRetail) {
            const response = await getProductsByCategoryApi(
               query.categoryRetail,
               limitPerPage,
               getStartItem()
            );
            setProducts(response);
         }
      })();
   }, [query]);

   useEffect(() => {
      (async () => {
         const response = await getTotalProductsByCategoryApi(
            query.categoryRetail
         );
         setTotalProducts(response);
      })();
   }, [query]);

   return (
      <BasicLayout className="category-retail">
         <Seo
            title={
               'BOUTIQUE | ' +
               query.categoryRetail.split('-').join(' ').toUpperCase()
            }
         />
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
               {size(products) > 0 && totalProducts ? (
                  <Pagination
                     totalProducts={totalProducts}
                     page={query.page ? parseInt(query.page) : 1}
                     limitPerPage={limitPerPage}
                  />
               ) : null}
            </Grid.Column>
         </Grid>
      </BasicLayout>
   );
}
