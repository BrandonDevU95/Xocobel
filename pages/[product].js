import Seo from '../components/Seo';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { getProductByUrlApi } from '../api/products';
import BasicLayout from '../layouts/Basic/BasicLayout';

const DynamicHeaderProduct = dynamic(() =>
   import('../components/Product/HeaderProduct')
);
const DynamicRecommendedProducts = dynamic(() =>
   import('../components/Home/RecommendedProducts')
);

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
         <Seo
            title={product.title.toUpperCase()}
            description={product.description}
         />
         <Container fluid className="product-container">
            <DynamicHeaderProduct product={product} />
            <DynamicRecommendedProducts />
         </Container>
      </BasicLayout>
   );
}
