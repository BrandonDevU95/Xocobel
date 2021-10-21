import React from 'react';

export default function RegisterForm({ showLoginForm }) {
   return (
      <div>
         <h1>Estamos en register form</h1>
         <button onClick={showLoginForm}>Login</button>
      </div>
   );
}
