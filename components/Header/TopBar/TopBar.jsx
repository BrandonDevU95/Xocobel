import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';

const DynamicSearch = dynamic(() => import('./Search'));

export default function TopBar() {
   return (
      <section className="top-bar">
         <div className="top-bar-container container">
            <Grid className="top-bar">
               <Grid.Column
                  mobile={16}
                  tablet={6}
                  computer={8}
                  className="top-bar__left"
               >
                  <Logo />
               </Grid.Column>
               <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={8}
                  className="top-bar__right"
               >
                  <DynamicSearch />
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
               </Grid.Column>
            </Grid>
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
