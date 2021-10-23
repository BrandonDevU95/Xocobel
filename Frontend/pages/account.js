import { getMeApi } from '../api/user';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import ChangeNameForm from '../components/account/ChangeNameForm';

export default function account() {
   const router = useRouter();
   const { auth, logout, setReloadUser } = useAuth();
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
         <Configuration
            user={user}
            logout={logout}
            setReloadUser={setReloadUser}
         />
      </BasicLayout>
   );
}

function Configuration({ user, logout, setReloadUser }) {
   return (
      <div className="account__configuration">
         <div className="title">Configuracion</div>
         <div className="data">
            <ChangeNameForm
               user={user}
               logout={logout}
               setReloadUser={setReloadUser}
            />
         </div>
      </div>
   );
}
