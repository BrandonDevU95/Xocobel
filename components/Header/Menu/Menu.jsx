import Link from 'next/link';
import Auth from '../../Auth';
import { useState, useEffect } from 'react';
import { getMeApi } from '../../../api/user';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import BasicModal from '../../Modal/BasicModal';
import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';

export default function MenuWeb() {
   const { auth, logout } = useAuth();
   const [user, setUser] = useState(undefined);
   const [showModal, setShowModal] = useState(false);
   const [titleModal, setTitleModal] = useState('Iniciar Sesion');

   useEffect(() => {
      (async () => {
         const response = await getMeApi(logout);
         setUser(response);
      })();
   }, [auth]);

   const onShowModal = () => setShowModal(true);
   const onCloseModal = () => setShowModal(false);

   return (
      <div className="menu">
         <Container fluid className="menu-container">
            <Grid>
               <Grid.Column width={6} className="menu__left">
                  <MenuChocolate />
               </Grid.Column>
               <Grid.Column width={10} className="menu__right">
                  {user !== undefined && (
                     <MenuOptions
                        onShowModal={onShowModal}
                        user={user}
                        logout={logout}
                     />
                  )}
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
            <Menu.Item as="a" name="boutique">
               Boutique
            </Menu.Item>
         </Link>
         <Link href="/events">
            <Menu.Item as="a" name="events">
               Events
            </Menu.Item>
         </Link>
         <Link href="/gifts">
            <Menu.Item as="a" name="gifts">
               Gifts
            </Menu.Item>
         </Link>
         <Link href="/corporate">
            <Menu.Item as="a" name="corporate">
               Corporate
            </Menu.Item>
         </Link>
         <Link href="/xocobel">
            <Menu.Item as="a" name="xocobel">
               Xocobel
            </Menu.Item>
         </Link>
      </Menu>
   );
}

function MenuOptions({ onShowModal, user, logout }) {
   const { productsCart } = useCart();

   return (
      <Menu>
         {user ? (
            <>
               <Link href="/orders">
                  <Menu.Item as="a">
                     <Icon name="box" />
                     Orders
                  </Menu.Item>
               </Link>
               <Link href="/wishlist">
                  <Menu.Item as="a">
                     <Icon name="heart" />
                     Wishlist
                  </Menu.Item>
               </Link>
               <Link href="/account">
                  <Menu.Item as="a">
                     <Icon name="user" />
                     {user?.name} {user?.lastname}
                  </Menu.Item>
               </Link>
               <Link href="/cart">
                  <Menu.Item as="a">
                     <Icon name="cart" />
                     {productsCart > 0 && (
                        <Label color="red" floating circular>
                           {productsCart}
                        </Label>
                     )}
                     Shop
                  </Menu.Item>
               </Link>
               <Menu.Item className="m-0" onClick={logout}>
                  <Icon name="power off" />
               </Menu.Item>
            </>
         ) : (
            <Menu.Item onClick={onShowModal}>
               <Icon name="user outline" />
               Mi cuenta
            </Menu.Item>
         )}
      </Menu>
   );
}