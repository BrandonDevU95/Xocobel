import React from 'react';

export default function LoginForm({ showRegisterForm }) {
   return (
      <div>
         <h1>Estamos en el formulario de login</h1>
         <button onClick={showRegisterForm}>Register</button>
      </div>
   );
}
