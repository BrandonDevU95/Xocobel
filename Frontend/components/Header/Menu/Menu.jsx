import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';
import { useState } from 'react';
import Auth from '../../Auth';
import BasicModal from '../../Modal/BasicModal';
import Link from 'next/link';

export default function MenuWeb() {
   const [showModal, setShowModal] = useState(false);
   const [titleModal, setTitleModal] = useState('Iniciar Sesion');

   const onShowModal = () => setShowModal(true);
   const onCloseModal = () => setShowModal(false);

   return (
      <div className="menu">
         <Container>
            <Grid>
               <Grid.Column width={6} className="menu__left">
                  <MenuChocolate />
               </Grid.Column>
               <Grid.Column width={10} className="menu__right">
                  <MenuOptions onShowModal={onShowModal} />
               </Grid.Column>
            </Grid>
         </Container>
         <BasicModal
            show={showModal}
            setShow={setShowModal}
            title={titleModal}
            size="small"
         >
            <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
         </BasicModal>
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

function MenuOptions({ onShowModal }) {
   return (
      <Menu>
         <Menu.Item onClick={onShowModal}>
            <Icon name="user outline" />
            Mi cuenta
         </Menu.Item>
      </Menu>
   );
}
