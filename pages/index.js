import Seo from '../components/Seo.jsx';
import dynamic from 'next/dynamic';
import MainBanner from '../components/Home/MainBanner';
import BasicLayout from '../layouts/Basic/BasicLayout';
import About from '../components/Home/About/About.jsx';
import Ingredients from '../components/Home/Ingredients/Ingredients.jsx';
import Contact from '../components/Home/Contact/Contact.jsx';
import Shipping from '../components/Home/Shipping/Shipping.jsx';
import IconicProducts from '../components/Home/IconicProducts/IconicProducts.jsx';

const DynamicPopularProducts = dynamic(() =>
   import('../components/Home/PopularProducts/PopularProducts.jsx')
);

export default function Home() {
   return (
      <BasicLayout className="home">
         <Seo title="XOCOBEL | LO MEJOR DEL CHOCOLATE" />
         <MainBanner />
         <DynamicPopularProducts />
         <IconicProducts />
         <About />
         <Ingredients />
         <Contact />
         <Shipping />
      </BasicLayout>
   );
}
