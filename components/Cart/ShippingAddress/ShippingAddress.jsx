import Link from 'next/link';
import { map, size } from 'lodash';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { getAddressApi } from '../../../api/address';

export default function ShippingAddress({ setAddress }) {
   const { auth, logout } = useAuth();
   const [addresses, setAddresses] = useState(null);
   const [addressActive, setAddressActive] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getAddressApi(auth.idUser, logout);
         setAddresses(response || []);
      })();
   }, []);

   return (
      <div className="shipping-address">
         <div className="title">Direccion de envio</div>
         <div className="data">
            {size(addresses) === 0 ? (
               <h3>
                  No hay direcciones registradas,{' '}
                  <Link href="/account">
                     <a>Agregar direccion</a>
                  </Link>
               </h3>
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
                           addressActive={addressActive}
                           setAddressActive={setAddressActive}
                           setAddress={setAddress}
                        />
                     </Grid.Column>
                  ))}
               </Grid>
            )}
         </div>
      </div>
   );
}

function Address({ address, addressActive, setAddressActive, setAddress }) {
   const changeAddress = (address) => {
      setAddressActive(address._id);
      setAddress(address);
   };

   return (
      <div
         className={classNames('address', {
            active: addressActive === address._id,
         })}
         onClick={() => changeAddress(address)}
      >
         <p>{address.title}</p>
         <p>{address.name}</p>
         <p>{address.address}</p>
         <p>
            {address.state}, {address.city} {address.postalCode}
         </p>
         <p>{address.phone}</p>
      </div>
   );
}
