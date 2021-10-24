import { useState, useEffect } from 'react';
import { getAddressApi } from '../../../api/address';
import useAuth from '../../../hooks/useAuth';

export default function ListAddress() {
   const { auth, logout } = useAuth();
   const [addresses, setAddresses] = useState(null);

   useEffect(() => {
      (async () => {
         const response = await getAddressApi(auth.idUser, logout);
         setAddresses(response ? response : []);
      })();
   }, []);

   return (
      <div>
         <h1>List Address</h1>
      </div>
   );
}
