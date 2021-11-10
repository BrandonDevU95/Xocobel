import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import { Form, Button } from 'semantic-ui-react';
import { createAddressApi, updateAddressApi } from '../../../api/address';

export default function AddressForm({
   setShowModal,
   setReloadAddresses,
   newAddress,
   address,
}) {
   const { auth, logout } = useAuth();
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(address),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         newAddress ? createAddress(formData) : updateAddress(formData);
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
         toast.success('Dirección creada con éxito');
         formik.resetForm();
         setReloadAddresses(true);
         setLoading(false);
         setShowModal(false);
      }
   };

   const updateAddress = async (formData) => {
      setLoading(true);
      const formDataTemp = {
         ...formData,
         user: auth.idUser,
      };
      const response = await updateAddressApi(
         address._id,
         formDataTemp,
         logout
      );
      if (!response) {
         toast.warning('Error al actualizar la dirección');
         setLoading(false);
      } else {
         toast.success('Dirección actualizada');
         formik.resetForm();
         setReloadAddresses(true);
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
               {newAddress ? 'Crear dirección' : 'Actualizar Direccion'}
            </Button>
         </div>
      </Form>
   );
}

function initialValues(address) {
   return {
      title: address?.title || '',
      name: address?.name || '',
      address: address?.address || '',
      city: address?.city || '',
      state: address?.state || '',
      postalCode: address?.postalCode || '',
      phone: address?.phone || '',
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