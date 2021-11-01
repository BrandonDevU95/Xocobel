import Seo from '../components/Seo.jsx';
import MainBanner from '../components/Home/MainBanner';
import BasicLayout from '../layouts/Basic/BasicLayout';

export default function Home() {
   return (
      <BasicLayout className="home">
         <Seo title="XOCOBEL | LO MEJOR DEL CHOCOLATE" />
         <MainBanner />
      </BasicLayout>
   );
}
