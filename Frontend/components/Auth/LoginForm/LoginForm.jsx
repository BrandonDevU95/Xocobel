import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { loginApi } from '../../../api/user';
import useAuth from '../../../hooks/useAuth';
import { Form, Button } from 'semantic-ui-react';

export default function LoginForm({ showRegisterForm, onCloseModal }) {
   const [loading, setLoading] = useState(false);
   const { login } = useAuth();

   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: async (FormData) => {
         setLoading(true);
         const response = await loginApi(FormData);
         if (response?.jwt) {
            toast.success('Bienvenido ' + response.user?.name);
            login(response.jwt);
            onCloseModal();
         } else {
            toast.error('Usuario o contraseña incorrectos');
         }
         setLoading(false);
      },
   });

   return (
      <Form className="login-form" onSubmit={formik.handleSubmit}>
         <Form.Input
            name="identifier"
            type="text"
            placeholder="Correo"
            onChange={formik.handleChange}
            error={formik.errors.identifier}
         />
         <Form.Input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            error={formik.errors.password}
         />
         <div className="actions">
            <Button type="button" basic onClick={showRegisterForm}>
               Registrarse
            </Button>
            <div className="">
               <Button type="submit" className="submit" loading={loading}>
                  Iniciar Sesión
               </Button>
               <Button type="button"> Has olvidado la contraseña?</Button>
            </div>
         </div>
      </Form>
   );
}

function initialValues() {
   return {
      identifier: '',
      password: '',
   };
}

function validationSchema() {
   return {
      identifier: Yup.string().email().required('El correo es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
   };
}
