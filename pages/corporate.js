import Catalogs from '../components/Corporate/Catalogs';
import MainBanner from '../components/Corporate/MainBanner';
import ServiceInfo from '../components/Corporate/ServiceInfo';
import Contact from '../components/Home/Contact';
import BasicLayout from '../layouts/Basic';

export default function Corporate() {
   return (
      <BasicLayout className="corporate">
         <div className="corporate-container container-fluid p-0">
            <MainBanner />
            <Catalogs />
            <ServiceInfo />
            <Contact />
         </div>
      </BasicLayout>
   );
}
