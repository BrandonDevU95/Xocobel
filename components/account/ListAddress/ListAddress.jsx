import { map, size } from 'lodash';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Grid, Button, Menu, Icon } from 'semantic-ui-react';
import { getAddressApi, deleteAddressApi } from '../../../api/address';

export default function ListAddress({
   reloadAddresses,
   setReloadAddresses,
   openModal,
}) {
   const { auth, logout } = useAuth();
   const [addresses, setAddresses] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getAddressApi(auth.idUser, logout);
         setAddresses(response ? response : []);
         setReloadAddresses(false);
      })();
   }, [reloadAddresses]);

   if (!addresses) return null;

   return (
      <div className="list-address">
         {size(addresses) === 0 ? (
            <>
               <h3>No hay direcciones</h3>
               <Grid>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                     <div
                        className="add-address"
                        onClick={() => openModal('Agregar dirección')}
                     >
                        <Menu.Item as="a">
                           <Icon name="plus" />
                           <p>Agregar dirección</p>
                        </Menu.Item>
                     </div>
                  </Grid.Column>
               </Grid>
            </>
         ) : (
            <Grid>
               {map(addresses, (address) => (
                  <Grid.Column
                     key={address.id}
                     mobile={16}
                     tablet={8}
                     computer={4}
                  >
                     <Address
                        address={address}
                        logout={logout}
                        setReloadAddresses={setReloadAddresses}
                        openModal={openModal}
                     />
                  </Grid.Column>
               ))}
               <Grid.Column mobile={16} tablet={8} computer={4}>
                  <div
                     className="add-address"
                     onClick={() => openModal('Agregar dirección')}
                  >
                     <Menu.Item as="a">
                        <Icon name="plus" />
                        <p>Agregar dirección</p>
                     </Menu.Item>
                  </div>
               </Grid.Column>
            </Grid>
         )}
      </div>
   );
}

function Address({ address, logout, setReloadAddresses, openModal }) {
   const [loading, setLoading] = useState(false);

   const deleteAddress = async () => {
      setLoading(true);
      const response = await deleteAddressApi(address._id, logout);
      if (response) setReloadAddresses(true);
      setLoading(false);
   };

   return (
      <div className="address">
         <p>{address.title}</p>
         <p>{address.name}</p>
         <p>{address.address}</p>
         <p>
            {address.state}, {address.city} {address.postalCode}
         </p>
         <p>{address.phone}</p>
         <div className="actions">
            <Button
               primary
               onClick={() => openModal(`Editar ${address.title}`, address)}
            >
               Editar
            </Button>
            <Button onClick={deleteAddress} loading={loading}>
               Eliminar
            </Button>
         </div>
      </div>
   );
}
