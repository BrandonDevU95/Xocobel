import Seo from '../components/Seo.jsx';
import MainBanner from '../components/Home/MainBanner';
import BasicLayout from '../layouts/Basic/BasicLayout';
import PopularProducts from '../components/Home/PopularProducts/PopularProducts.jsx';
import About from '../components/Home/About/About.jsx';

export default function Home() {
   return (
      <BasicLayout className="home">
         <Seo title="XOCOBEL | LO MEJOR DEL CHOCOLATE" />
         <MainBanner />
         <PopularProducts />
         <About />
      </BasicLayout>
   );
}
