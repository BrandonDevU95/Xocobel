import Link from 'next/link';
import { Icon, Image } from 'semantic-ui-react';
import Search from './Search';

export default function TopBar() {
   return (
      <section className="top-bar">
         <div className="top-bar-container container">
            <div className="top-bar row">
               <div className="top-bar__left col-12 col-md-4 col-lg-6">
                  <Logo />
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

function Logo() {
   return (
      <Link href="/">
         <a>
            <Image src="/logo.png" alt="Xocobel" />
         </a>
      </Link>
   );
}
