import Link from 'next/link';
import Auth from '../../Auth';
import { useState, useEffect } from 'react';
import { getMeApi } from '../../../api/user';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import BasicModal from '../../Modal/BasicModal';
import { Menu, Icon, Label } from 'semantic-ui-react';

export default function MenuWeb() {
   const { auth, logout } = useAuth();
   const [user, setUser] = useState(undefined);
   const [showModal, setShowModal] = useState(false);
   const [titleModal, setTitleModal] = useState('Iniciar Sesión');

   useEffect(() => {
      (async () => {
         const response = await getMeApi(logout);
         setUser(response);
      })();
   }, [auth]);

   const onShowModal = () => setShowModal(true);
   const onCloseModal = () => setShowModal(false);

   return (
      <section className="menu">
         <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div className="container">
               <button
                  className="navbar-toggler ms-auto m-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarMenuNavigation"
                  aria-controls="navbarMenuNavigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarMenuNavigation"
               >
                  <div className="me-auto mb-2 mb-lg-0">
                     <MenuChocolate />
                  </div>
                  <div className="ms-auto mb-2 mb-lg-0">
                     {user !== undefined && (
                        <MenuOptions
                           onShowModal={onShowModal}
                           user={user}
                           logout={logout}
                        />
                     )}
                  </div>
               </div>
            </div>
         </nav>
         <BasicModal
            show={showModal}
            setShow={setShowModal}
            title={titleModal}
            size="small"
         >
            <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
         </BasicModal>
      </section>
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
         <Link href="/gifts">
            <Menu.Item as="a" name="gifts">
               Regalos
            </Menu.Item>
         </Link>
         <Link href="/events">
            <Menu.Item as="a" name="events">
               Eventos
            </Menu.Item>
         </Link>
         <Link href="/corporate">
            <Menu.Item as="a" name="corporate">
               Corporativos
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
                     Pedidos
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
                     Carrito
                  </Menu.Item>
               </Link>
               <Menu.Item className="m-0" onClick={logout}>
                  <Icon name="power off" />
               </Menu.Item>
            </>
         ) : (
            <Menu.Item onClick={onShowModal}>
               <Icon name="user outline" />
               Iniciar Sesión
            </Menu.Item>
         )}
      </Menu>
   );
}
