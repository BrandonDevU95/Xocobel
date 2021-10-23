import { getMeApi } from '../api/user';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';

export default function account() {
   const router = useRouter();
   const { auth, logout } = useAuth();
   const [user, setUser] = useState(undefined);

   useEffect(() => {
      (async () => {
         const response = await getMeApi(logout);
         setUser(response || null);
      })();
   }, [auth]);

   if (user === undefined) return null;
   if (!auth && !user) {
      router.replace('/');
      return null;
   }

   return (
      <BasicLayout className="account">
         <Configuration />
      </BasicLayout>
   );
}

function Configuration() {
   return (
      <div className="account__configuration">
         <div className="title">Configuracion</div>
         <div className="data">Formularios</div>
      </div>
   );
}
