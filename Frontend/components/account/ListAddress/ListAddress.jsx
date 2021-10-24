import { map, size } from 'lodash';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { getAddressApi } from '../../../api/address';

export default function ListAddress({ reloadAddresses, setReloadAddresses }) {
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
            <h3>No hay direcciones</h3>
         ) : (
            <Grid>
               {map(addresses, (address) => (
                  <Grid.Column
                     key={address.id}
                     mobile={16}
                     tablet={8}
                     computer={4}
                  >
                     <Address address={address} />
                  </Grid.Column>
               ))}
            </Grid>
         )}
      </div>
   );
}

function Address({ address }) {
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
            <Button primary>Editar</Button>
            <Button>Eliminar</Button>
         </div>
      </div>
   );
}
