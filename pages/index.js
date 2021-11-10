import Seo from '../components/Seo.jsx';
import MainBanner from '../components/Home/MainBanner';
import BasicLayout from '../layouts/Basic/BasicLayout';
import PopularProducts from '../components/Home/PopularProducts/PopularProducts.jsx';
import About from '../components/Home/About/About.jsx';
import Ingredients from '../components/Home/Ingredients/Ingredients.jsx';
import Contact from '../components/Home/Contact/Contact.jsx';
import Shipping from '../components/Home/Shipping/Shipping.jsx';
import Footer from '../components/Home/Footer/Footer.jsx';
import IconicProducts from '../components/Home/IconicProducts/IconicProducts.jsx';

export default function Home() {
   return (
      <BasicLayout className="home">
         <Seo title="XOCOBEL | LO MEJOR DEL CHOCOLATE" />
         <MainBanner />
         <PopularProducts />
         <IconicProducts />
         <About />
         <Ingredients />
         <Contact />
         <Shipping />
      </BasicLayout>
   );
}
