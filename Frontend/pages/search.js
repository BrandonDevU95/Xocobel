import { size } from 'lodash';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import { searcgProductsApi } from '../api/products';

export default function search() {
   const [products, setProducts] = useState(null);
   const { query } = useRouter();

   useEffect(() => {
      document.getElementById('xoco-search').focus();
   }, []);

   useEffect(() => {
      (async () => {
         if (size(query.query) > 0) {
            const response = await searcgProductsApi(query.query);
            if (size(response) > 0) setProducts(response);
            else setProducts([]);
         } else {
            setProducts([]);
         }
      })();
   }, [query]);

   return (
      <BasicLayout className="search">
         <h1>Search</h1>
      </BasicLayout>
   );
}
