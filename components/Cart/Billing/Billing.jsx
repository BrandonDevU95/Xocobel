import { Form, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';

export default function Billing({ bill, setBill, setBillData, address }) {
   const [loading, setLoading] = useState(false);
   const [showForm, setShowForm] = useState(false);
   const [disabled, setDisabled] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(address),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         if (disabled) {
            setDisabled(false);
            setBill(true);
         } else {
            setLoading(true);
            setDisabled(true);
            setBill(false);
            setBillData(formData);
            setLoading(false);
         }
      },
   });

   return (
      <div className="billing py-4">
         <div className="title">Facturación</div>
         <div className="data">
            <div className="row">
               <div className="col-12 col-md-8">
                  <p className="h3 pb-2">¿Necesitas facturar tu compra?</p>
                  <div className="form-check d-flex align-items-center">
                     <input
                        className="form-check-input me-2 my-1"
                        type="checkbox"
                        onChange={() => {
                           setShowForm(!showForm);
                           setBill(!bill);
                        }}
                        id="billCheck"
                     />
                     <label
                        className="form-check-label m-0"
                        htmlFor="billCheck"
                     >
                        Solicitar factura
                     </label>
                  </div>
                  {showForm && (
                     <div className="py-3">
                        <Form
                           className="address-form"
                           onSubmit={formik.handleSubmit}
                        >
                           <Form.Group widths="equal">
                              <Form.Input
                                 name="name"
                                 id="name"
                                 disabled={disabled}
                                 type="text"
                                 label="Nombre completo"
                                 placeholder="Nombre completo"
                                 onChange={formik.handleChange}
                                 value={formik.values.name}
                                 error={formik.errors.name}
                              />
                              <Form.Input
                                 name="address"
                                 id="address"
                                 disabled={disabled}
                                 type="text"
                                 label="Dirección"
                                 placeholder="Dirección"
                                 onChange={formik.handleChange}
                                 value={formik.values.address}
                                 error={formik.errors.address}
                              />
                           </Form.Group>
                           <Form.Group widths="equal">
                              <Form.Input
                                 name="city"
                                 id="city"
                                 disabled={disabled}
                                 type="text"
                                 label="Ciudad / Municipio"
                                 placeholder="Ciudad"
                                 onChange={formik.handleChange}
                                 value={formik.values.city}
                                 error={formik.errors.city}
                              />
                              <Form.Input
                                 name="state"
                                 id="state"
                                 disabled={disabled}
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
                                 id="postalCode"
                                 disabled={disabled}
                                 type="text"
                                 label="Código Postal"
                                 placeholder="Código Postal"
                                 onChange={formik.handleChange}
                                 value={formik.values.postalCode}
                                 error={formik.errors.postalCode}
                              />
                              <Form.Input
                                 name="phone"
                                 id="phone"
                                 disabled={disabled}
                                 type="text"
                                 label="Teléfono"
                                 placeholder="Teléfono"
                                 onChange={formik.handleChange}
                                 value={formik.values.phone}
                                 error={formik.errors.phone}
                              />
                           </Form.Group>
                           <Form.Group widths="equal">
                              <Form.Input
                                 name="email"
                                 id="email"
                                 disabled={disabled}
                                 type="email"
                                 label="Correo"
                                 placeholder="Correo electrónico"
                                 onChange={formik.handleChange}
                                 value={formik.values.email}
                                 error={formik.errors.email}
                              />
                              <Form.Input
                                 name="rfc"
                                 id="rfc"
                                 disabled={disabled}
                                 type="text"
                                 label="RFC"
                                 placeholder="RFC"
                                 onChange={formik.handleChange}
                                 value={formik.values.rfc.toUpperCase()}
                                 error={formik.errors.rfc}
                              />
                           </Form.Group>
                           <div className="actions">
                              <Button
                                 type="submit"
                                 className="submit"
                                 loading={loading}
                              >
                                 {disabled ? 'Editar' : 'Guardar'}
                              </Button>
                           </div>
                        </Form>
                     </div>
                  )}
               </div>
               <div className="col-12 col-md-4"></div>
            </div>
         </div>
      </div>
   );
}

function initialValues(address) {
   return {
      name: address?.name || '',
      address: address?.address || '',
      city: address?.city || '',
      state: address?.state || '',
      postalCode: address?.postalCode || '',
      phone: address?.phone || '',
      email: address?.users_permissions_user.email || '',
      rfc: '',
   };
}

function validationSchema() {
   return {
      name: Yup.string().required(true),
      address: Yup.string().required(true),
      city: Yup.string().required(true),
      state: Yup.string().required(true),
      postalCode: Yup.string().required(true),
      phone: Yup.string().required(true),
      email: Yup.string().email().required(true),
      rfc: Yup.string()
         .min(13, 'Ingrese RFC con homoclave')
         .max(13, 'Ingrese RFC con homoclave')
         .required(true),
   };
}
