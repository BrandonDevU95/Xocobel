import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Form, Button } from 'semantic-ui-react';
import { updateNameApi } from '../../../api/user';

export default function ChangeNameForm({ user, logout }) {
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(user.name, user.lastname),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: async (formData) => {
         setLoading(true);
         const response = await updateNameApi(user.id, formData, logout);
         if (!response) {
            toast.error('Error al actualizar el nombre');
         } else {
            toast.success('Nombre actualizado');
         }
         setLoading(false);
      },
   });

   return (
      <div className="change-name-form">
         <h4>Cambio de Nombre</h4>
         <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
               <Form.Input
                  name="name"
                  placeholder="Nombre"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.errors.name}
               />
               <Form.Input
                  name="lastname"
                  placeholder="Apellidos"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  error={formik.errors.lastname}
               />
            </Form.Group>
            <Button type="submit" className="submit" loading={loading}>
               Actualizar
            </Button>
         </Form>
      </div>
   );
}

function initialValues(name, lastname) {
   return {
      name: name || '',
      lastname: lastname || '',
   };
}

function validationSchema() {
   return {
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
   };
}
