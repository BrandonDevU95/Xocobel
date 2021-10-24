import { getMeApi } from '../api/user';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
import BasicLayout from '../layouts/Basic';
import { useState, useEffect } from 'react';
import ChangeNameForm from '../components/account/ChangeNameForm';
import ChangeEmailForm from '../components/account/ChangeEmailForm';
import ChangePasswordForm from '../components/account/ChangePasswordForm';

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
         <Addresses />
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
            <ChangeEmailForm
               user={user}
               logout={logout}
               setReloadUser={setReloadUser}
            />
            <ChangePasswordForm user={user} logout={logout} />
         </div>
      </div>
   );
}

function Addresses() {
   return (
      <div className="account__addresses">
         <div className="title">
            Direcciones
            <Icon name="plus" link />
         </div>
         <div className="data">
            <p>Lista de direcciones</p>
         </div>
      </div>
   );
}
