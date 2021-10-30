import Link from 'next/link';
import { map, size } from 'lodash';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Grid, Button } from 'semantic-ui-react';
import { getAddressApi } from '../../../api/address';

export default function ShippingAddress() {
   const { auth, logout } = useAuth();
   const [addresses, setAddresses] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getAddressApi(auth.idUser, logout);
         setAddresses(response || []);
      })();
   }, []);

   return (
      <div>
         <h1>ShippingAddress</h1>
      </div>
   );
}
