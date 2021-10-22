import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Form, Button } from 'semantic-ui-react';

export default function LoginForm({ showRegisterForm }) {
   return (
      <Form className="login-form">
         <Form.Input name="identifier" type="text" placeholder="Correo" />
         <Form.Input name="password" type="password" placeholder="Contraseña" />
         <div className="actions">
            <Button type="button" basic onClick={showRegisterForm}>
               Registrarse
            </Button>
            <div className="">
               <Button type="submit" className="submit">
                  Iniciar Sesión
               </Button>
               <Button type="button"> Has olvidado la contraseña?</Button>
            </div>
         </div>
      </Form>
   );
}
