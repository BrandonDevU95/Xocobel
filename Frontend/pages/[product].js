import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProductByUrlApi } from '../api/products';
import BasicLayout from '../layouts/Basic/BasicLayout';
import HeaderProduct from '../components/Product/HeaderProduct';
import TabsProduct from '../components/Product/TabsProduct/TabsProduct';
import CarouselScreen from '../components/Product/CarouselScreen/CarouselScreen';

export default function Product() {
   const { query } = useRouter();
   const [product, setProduct] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getProductByUrlApi(query.product);
         setProduct(response);
      })();
   }, [query]);

   if (!product) return null;

   return (
      <BasicLayout className="product">
         <HeaderProduct product={product} />
         <CarouselScreen title={product.title} screenShots={product.galery} />
         <TabsProduct product={product} />
      </BasicLayout>
   );
}
