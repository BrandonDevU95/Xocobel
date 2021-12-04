import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
import Image from 'next/image';
import Search from './Search';
import LogoXoco from '../../../public/logo.png';

export default function TopBar() {
   return (
      <section className="top-bar">
         <div className="top-bar-container container">
            <div className="top-bar row">
               <div className="top-bar__left col-12 col-md-4 col-lg-6">
                  <Logo logo={LogoXoco} />
               </div>
               <div className="top-bar__right col-12 col-md-8 col-lg-6">
                  <Search />
                  <div className="list-icons">
                     <a
                        href="https://www.facebook.com/Xocobel-107604454840465"
                        target="_blank"
                     >
                        <Icon name="facebook" />
                     </a>
                     <a
                        href="https://www.instagram.com/xocobelmx/?hl=es-la"
                        target="_blank"
                     >
                        <Icon name="instagram" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

function Logo({ logo }) {
   return (
      <Link href="/">
         <a>
            <Image src={logo} alt="Xocobel" />
         </a>
      </Link>
   );
}
