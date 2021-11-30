import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';

const DynamicSearch = dynamic(() => import('./Search'));

export default function TopBar() {
   return (
      <div className="top-bar">
         <Container fluid className="top-bar-container">
            <Grid className="top-bar">
               <Grid.Column width={8} className="top-bar__left">
                  <Logo />
               </Grid.Column>
               <Grid.Column width={8} className="top-bar__right">
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
         </Container>
      </div>
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
