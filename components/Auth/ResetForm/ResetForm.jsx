import { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { forgotPasswordApi } from '../../../api/user';

export default function ResetForm() {
   const { push } = useRouter();
   const [loading, setLoading] = useState(false);
   const [code, setCode] = useState(null);

   useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('code');
      setCode(token);
   }, []);

   return (
      <Formik
         initialValues={initialValues()}
         validationSchema={Yup.object(validationSchema())}
         onSubmit={async (formData, { resetForm }) => {
            setLoading(true);
            formData.code = code;
            if (formData.code) {
               const response = await forgotPasswordApi(formData);
               if (response.jwt) {
                  toast.success('Contraseña actualizada con éxito');
                  push('/');
               } else {
                  toast.error('Error al actualizar la contraseña');
                  push('/');
               }
            } else {
               toast.error('Codigo invalido');
               push('/');
            }
            resetForm();
            setLoading(false);
         }}
      >
         {(formik) => (
            <section className="contact" id="contact">
               <div className="contact-container container">
                  <h2 className="display-5">Recuperar Contraseña</h2>
                  <div className="contact-container_row row">
                     <div className="contact-container_row-col d-none d-md-block d-lg-block col-md-6 col-lg-5 col-xxl-6 px-5">
                        <div className="contact-container_row-col-img"></div>
                     </div>
                     <div className="contact-container_row-col col-sm-12 col-md-6 col-lg-7 col-xxl-6 px-5">
                        <Form className="contact-container_row-col_form">
                           <div className="row">
                              <div className="col-12 form-group py-3">
                                 <label htmlFor="email">Contraseña</label>
                                 <Field
                                    name="password"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched.password &&
                                             formik.errors.password,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched.password &&
                                             !formik.errors.password,
                                       }
                                    )}
                                    type="password"
                                 />
                                 {formik.touched.password &&
                                 formik.errors.password ? (
                                    <div className="invalid-feedback">
                                       {formik.errors.password}
                                    </div>
                                 ) : null}
                              </div>
                              <div className="col-12 form-group py-3">
                                 <label htmlFor="passwordConfirmation">
                                    Repetir Contraseña
                                 </label>
                                 <Field
                                    name="passwordConfirmation"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched
                                                .passwordConfirmation &&
                                             formik.errors.passwordConfirmation,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched
                                                .passwordConfirmation &&
                                             !formik.errors
                                                .passwordConfirmation,
                                       }
                                    )}
                                    type="password"
                                 />
                                 {formik.touched.passwordConfirmation &&
                                 formik.errors.passwordConfirmation ? (
                                    <div className="invalid-feedback">
                                       {formik.errors.passwordConfirmation}
                                    </div>
                                 ) : null}
                              </div>
                              <div className="form-group action">
                                 <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                 >
                                    {loading ? 'Enviando' : 'Enviar'}
                                 </button>
                              </div>
                           </div>
                        </Form>
                     </div>
                  </div>
               </div>
            </section>
         )}
      </Formik>
   );
}

function initialValues() {
   return {
      password: '',
      passwordConfirmation: '',
      code: '',
   };
}

function validationSchema() {
   return {
      password: Yup.string()
         .required(true)
         .min(8, 'La contraseña debe tener al menos 8 caracteres')
         .oneOf(
            [Yup.ref('passwordConfirmation')],
            'Las contraseñas no coinciden'
         ),
      passwordConfirmation: Yup.string()
         .required(true)
         .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
   };
}
