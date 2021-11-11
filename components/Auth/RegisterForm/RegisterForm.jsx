import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { registerApi } from '../../../api/user';
import { Form, Button } from 'semantic-ui-react';

export default function RegisterForm({ showLoginForm }) {
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: async (formData) => {
         setLoading(true);
         const response = await registerApi(formData);
         if (response?.jwt) {
            showLoginForm();
            toast.success('Usuario registrado');
         } else {
            toast.error('Error al registrar usuario');
         }
         setLoading(false);
      },
   });

   // TODO: Agregar un campo de validacion de contraseña

   return (
      <Form className="login-form" onSubmit={formik.handleSubmit}>
         <Form.Input
            name="name"
            type="text"
            placeholder="Nombre"
            onChange={formik.handleChange}
            error={formik.errors.name}
         />
         <Form.Input
            name="lastname"
            type="text"
            placeholder="Apellidos"
            onChange={formik.handleChange}
            error={formik.errors.lastname}
         />
         <Form.Input
            name="username"
            type="text"
            placeholder="Usuario"
            onChange={formik.handleChange}
            error={formik.errors.username}
         />
         <Form.Input
            name="email"
            type="text"
            placeholder="Correo"
            onChange={formik.handleChange}
            error={formik.errors.email}
         />
         <Form.Input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            error={formik.errors.password}
         />
         <div className="actions">
            <Button type="button" onClick={showLoginForm} basic>
               Iniciar Sesion
            </Button>
            <Button type="submit" className="submit" loading={loading}>
               Registrar
            </Button>
         </div>
      </Form>
   );
}

function initialValues() {
   return {
      name: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
   };
}

function validationSchema() {
   return {
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
      username: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
   };
}
