import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';
import Link from 'next/link';

export default function MenuWeb() {
   return (
      <div className="menu">
         <Container>
            <Grid>
               <Grid.Column width={6} className="menu__left">
                  <MenuChocolate />
               </Grid.Column>
               <Grid.Column width={10} className="menu__right">
                  <MenuOptions />
               </Grid.Column>
            </Grid>
         </Container>
      </div>
   );
}

function MenuChocolate() {
   return (
      <Menu>
         <Link href="/boutique">
            <Menu.Item as="a">Boutique</Menu.Item>
         </Link>
         <Link href="/events">
            <Menu.Item as="a">Events</Menu.Item>
         </Link>
         <Link href="/gifts">
            <Menu.Item as="a">Gifts</Menu.Item>
         </Link>
         <Link href="/corporate">
            <Menu.Item as="a">Corporate</Menu.Item>
         </Link>
         <Link href="/xocobel">
            <Menu.Item as="a">Xocobel</Menu.Item>
         </Link>
      </Menu>
   );
}

function MenuOptions() {
   return (
      <Menu>
         <Menu.Item>
            <Icon name="user outline" />
            Mi cuenta
         </Menu.Item>
      </Menu>
   );
}
