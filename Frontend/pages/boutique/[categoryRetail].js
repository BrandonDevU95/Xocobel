import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BasicLayout from '../../layouts/Basic/BasicLayout';
import { getProductsByCategoryApi } from '../../api/products';

const limitPerPage = 10;

export default function CategoryRetail() {
   const { query } = useRouter();
   const [products, setProducts] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getProductsByCategoryApi(
            query.categoryRetail,
            limitPerPage,
            0
         );
         setProducts(response);
      })();
   }, [query]);

   return (
      <BasicLayout>
         <h1>Retail</h1>
      </BasicLayout>
   );
}
