import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import { Form, Button } from 'semantic-ui-react';
import { createAddressApi } from '../../../api/address';
import { toast } from 'react-toastify';

export default function AddressForm({ setShowModal }) {
   const { auth, logout } = useAuth();
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         createAddress(formData);
      },
   });

   const createAddress = async (formData) => {
      setLoading(true);
      const formDataTemp = {
         ...formData,
         user: auth.idUser,
      };
      const response = await createAddressApi(formDataTemp, logout);
      if (!response) {
         toast.warning('Error al crear la dirección');
         setLoading(false);
      } else {
         formik.resetForm();
         toast.success('Dirección creada con éxito');
         setLoading(false);
         setShowModal(false);
      }
   };

   return (
      <Form className="address-form" onSubmit={formik.handleSubmit}>
         <Form.Input
            name="title"
            type="text"
            label="Titulo de la direccion"
            placeholder="Titulo de la direccion"
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.errors.title}
         />
         <Form.Group widths="equal">
            <Form.Input
               name="name"
               type="text"
               label="Nombre completo"
               placeholder="Nombre completo"
               onChange={formik.handleChange}
               value={formik.values.name}
               error={formik.errors.name}
            />
            <Form.Input
               name="address"
               type="text"
               label="Direccion"
               placeholder="Direccion"
               onChange={formik.handleChange}
               value={formik.values.address}
               error={formik.errors.address}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="city"
               type="text"
               label="Ciudad / Municipio"
               placeholder="Ciudad"
               onChange={formik.handleChange}
               value={formik.values.city}
               error={formik.errors.city}
            />
            <Form.Input
               name="state"
               type="text"
               label="Estado"
               placeholder="Estado"
               onChange={formik.handleChange}
               value={formik.values.state}
               error={formik.errors.state}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="postalCode"
               type="text"
               label="Codigo Postal"
               placeholder="Codigo Postal"
               onChange={formik.handleChange}
               value={formik.values.postalCode}
               error={formik.errors.postalCode}
            />
            <Form.Input
               name="phone"
               type="text"
               label="Telefono"
               placeholder="Telefono"
               onChange={formik.handleChange}
               value={formik.values.phone}
               error={formik.errors.phone}
            />
         </Form.Group>
         <div className="actions">
            <Button type="submit" className="submit" loading={loading}>
               Crear direccion
            </Button>
         </div>
      </Form>
   );
}

function initialValues() {
   return {
      title: '',
      name: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      phone: '',
   };
}

function validationSchema() {
   return {
      title: Yup.string().required(true),
      name: Yup.string().required(true),
      address: Yup.string().required(true),
      city: Yup.string().required(true),
      state: Yup.string().required(true),
      postalCode: Yup.string().required(true),
      phone: Yup.string().required(true),
   };
}
