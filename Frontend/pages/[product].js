import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BasicLayout from '../layouts/Basic/BasicLayout';

export default function Product() {
   const { query } = useRouter();
   console.log(query.product);
   return (
      <BasicLayout className="product">
         <h1>Estamos en product</h1>
      </BasicLayout>
   );
}
