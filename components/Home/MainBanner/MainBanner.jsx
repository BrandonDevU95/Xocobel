import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';
import { getMainBannerApi } from '../../../api/sources';
import { size } from 'lodash';
const Catalogo = '/pdf/catalogo-navidad.pdf';

export default function MainBanner() {
   const [mainBanner, setMainBanner] = useState(undefined);

   useEffect(() => {
      (async () => {
         const response = await getMainBannerApi();
         if (size(response) > 0) {
            setMainBanner(response[0]);
         }
      })();
   }, []);

   if (!mainBanner) return null;

   return (
      <section className="main-banner">
         <div className="main-banner_container container-fluid p-0">
            <div className="main-banner_container-content">
               <img
                  src={BASE_PATH + mainBanner.mainBanner[0].url}
                  alt={mainBanner.name}
               />
               <div className="main-banner_container-content_btn">
                  <Button
                     as="a"
                     href={Catalogo}
                     target="_blank"
                     size="big"
                     primary
                  >
                     {mainBanner.name}
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
