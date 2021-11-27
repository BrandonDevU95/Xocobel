import { useEffect, useState } from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import { BASE_PATH } from '../../../utils/constants';
import { getMainBannerApi } from '../../../api/sources';
const Catalogo = '/pdf/catalogo-navidad.pdf';

export default function MainBanner() {
   const [mainBanner, setMainBanner] = useState(undefined);

   useEffect(() => {
      (async () => {
         const response = await getMainBannerApi();
         setMainBanner(response[0].mainBanner[0]);
      })();
   }, []);

   if (!mainBanner) return null;

   return (
      <section className="main-banner">
         <Container fluid className="main-banner_container">
            <div className="main-banner_container-content">
               <img src={BASE_PATH + mainBanner.url} alt={mainBanner.name} />
               <div className="main-banner_container-content_btn">
                  <Button
                     as="a"
                     href={Catalogo}
                     target="_blank"
                     size="big"
                     primary
                  >
                     Catalogo Navideño 2021
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
}
