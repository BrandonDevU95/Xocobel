import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Form, Button } from 'semantic-ui-react';
import { updateEmailApi } from '../../../api/user';

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(user.name, user.lastname),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: async (formData) => {
         setLoading(true);
         const response = await updateEmailApi(user.id, formData.email, logout);
         if (!response || response.statusCode === 400) {
            toast.error('Error al actualizar el email');
         } else {
            setReloadUser(true);
            formik.resetForm();
            toast.success('Email actualizado correctamente');
         }
         setLoading(false);
      },
   });

   return (
      <div className="change-email-form">
         <h4>
            Cambio de Email <span>{user.email}</span>{' '}
         </h4>
         <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
               <Form.Input
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.errors.email}
               />
               <Form.Input
                  name="repeatEmail"
                  placeholder="Confirma Email"
                  onChange={formik.handleChange}
                  value={formik.values.repeatEmail}
                  error={formik.errors.repeatEmail}
               />
            </Form.Group>
            <Button type="submit" className="submit" loading={loading}>
               Actualizar
            </Button>
         </Form>
      </div>
   );
}

function initialValues() {
   return {
      email: '',
      repeatEmail: '',
   };
}

function validationSchema() {
   return {
      email: Yup.string()
         .email(true)
         .required(true)
         .oneOf([Yup.ref('repeatEmail')], 'Los emails no coinciden'),
      repeatEmail: Yup.string()
         .email(true)
         .required(true)
         .oneOf([Yup.ref('email')], 'Los emails no coinciden'),
   };
}
