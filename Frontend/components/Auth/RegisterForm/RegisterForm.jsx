import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'semantic-ui-react';

export default function RegisterForm({ showLoginForm }) {
   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         console.log(formData);
      },
   });

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
            <Button type="button" basic>
               Iniciar Sesion
            </Button>
            <Button type="submit" className="submit">
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
      name: Yup.string().required('El nombre es requerido'),
      lastname: Yup.string().required('Los apellidos son requeridos'),
      username: Yup.string().required('El nombre de usuario es requerido'),
      email: Yup.string().email().required('El correo es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
   };
}
