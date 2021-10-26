import Link from 'next/link';
import { size, map } from 'lodash';
import BasicLayout from '../layouts/Basic';
import { useEffect, useState } from 'react';
import { Menu, Loader } from 'semantic-ui-react';
import { getProductsApi } from '../api/products';
import ListProducts from '../components/ListProducts';
import { getCategoryRetailApi } from '../api/category-retail';

export default function boutique() {
   const [categoryRetail, setCategoryRetail] = useState([]);
   const [products, setProducts] = useState([]);

   //    console.log(categoryRetail);
   //    console.log(products);

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
         {!products && <Loader active>Cargando Productos</Loader>}
         {size(products) > 0 && <ListProducts products={products} />}
         {products && size(products) === 0 && (
            <div>
               <h3>No hay productos</h3>
            </div>
         )}
      </BasicLayout>
   );
}

function CategoryRetail({ categoryRetail }) {
   return (
      <div>
         {map(categoryRetail, (category) => (
            <Link href={`/boutique/${category.url}`} key={category._id}>
               <Menu.Item as="a" name={category.url}>
                  {category.title}
               </Menu.Item>
            </Link>
         ))}
      </div>
   );
}
