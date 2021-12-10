import Link from 'next/link';
import { map, size } from 'lodash';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
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
         <div className="title">Dirección de envío</div>
         <div className="data">
            {size(addresses) === 0 ? (
               <h3>
                  No hay direcciones registradas,{' '}
                  <Link href="/account">
                     <a>Agregar direccion</a>
                  </Link>
               </h3>
            ) : (
               <div className="row">
                  <p className="h3">Selecciona una dirección</p>
                  {map(addresses, (address) => (
                     <div
                        className="col-12 col-md-6 col-lg-3"
                        key={address._id}
                     >
                        <Address
                           address={address}
                           addressActive={addressActive}
                           setAddressActive={setAddressActive}
                           setAddress={setAddress}
                        />
                     </div>
                  ))}
               </div>
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
