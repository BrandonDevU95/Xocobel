import * as Yup from 'yup';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { Formik, Field, Form } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
   const captcha = useRef(null);
   const [reCaptcha, setReCaptcha] = useState(null);
   const [loading, setLoading] = useState(false);

   const onChange = () => {
      if (captcha.current.getValue()) {
         setReCaptcha(true);
      }
   };

   return (
      <Formik
         initialValues={initialValues()}
         validationSchema={Yup.object(validationSchema())}
         onSubmit={(formData, { resetForm }) => {
            setLoading(true);
            const form = document.getElementById('formContact');
            const data = new FormData(form);

            if (captcha.current.getValue()) {
               setReCaptcha(true);
            } else {
               setReCaptcha(false);
            }

            if (captcha.current.getValue()) {
               fetch('/email.php', {
                  method: 'POST',
                  body: data,
               });
               toast.success('Menaje enviado!');
               captcha.current.reset();
               resetForm();
            }

            setLoading(false);
         }}
      >
         {(formik) => (
            <section className="contact" id="contact">
               <div className="contact-container container">
                  <h2 className="display-5">Contáctanos</h2>
                  <div className="contact-container_row row">
                     <div className="contact-container_row-col d-none d-md-block d-lg-block col-md-6 col-lg-5 col-xxl-6">
                        <div className="contact-container_row-col-img"></div>
                     </div>
                     <div className="contact-container_row-col col-sm-12 col-md-6 col-lg-7 col-xxl-6">
                        <Form
                           className="contact-container_row-col_form"
                           id="formContact"
                        >
                           <div className="row">
                              <div className="col-lg-6 form-group p-1">
                                 <label htmlFor="name">Name</label>
                                 <Field
                                    name="name"
                                    id="name"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched.name &&
                                             formik.errors.name,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched.name &&
                                             !formik.errors.name,
                                       }
                                    )}
                                    type="text"
                                 />
                              </div>
                              <div className="col-lg-6 form-group p-1">
                                 <label htmlFor="email">Email Address</label>
                                 <Field
                                    name="email"
                                    id="email"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched.email &&
                                             formik.errors.email,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched.email &&
                                             !formik.errors.email,
                                       }
                                    )}
                                    type="email"
                                 />
                              </div>
                              <div className=" col-lg-6 form-group p-1">
                                 <label htmlFor="phone">Phone Number</label>
                                 <Field
                                    name="phone"
                                    id="phone"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched.phone &&
                                             formik.errors.phone,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched.phone &&
                                             !formik.errors.phone,
                                       }
                                    )}
                                    type="text"
                                 />
                              </div>
                              <div className="col-lg-6 form-group p-1">
                                 <label htmlFor="subject">Subject</label>
                                 <Field
                                    name="subject"
                                    id="subject"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched.subject &&
                                             formik.errors.subject,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched.subject &&
                                             !formik.errors.subject,
                                       }
                                    )}
                                    type="text"
                                 />
                              </div>
                              <div className="col-lg-12 form-group p-1">
                                 <label htmlFor="content">Content</label>
                                 <Field
                                    name="content"
                                    id="content"
                                    className={classNames(
                                       'form-control',
                                       {
                                          'is-invalid':
                                             formik.touched.content &&
                                             formik.errors.content,
                                       },
                                       {
                                          'is-valid':
                                             formik.touched.content &&
                                             !formik.errors.content,
                                       }
                                    )}
                                    as="textarea"
                                    rows={3}
                                 />
                                 {formik.touched.content &&
                                 formik.errors.content ? (
                                    <div className="invalid-feedback">
                                       {formik.errors.content}
                                    </div>
                                 ) : null}
                              </div>
                              <div className="col-12 col-lg-6 py-4 px-0">
                                 <ReCAPTCHA
                                    ref={captcha}
                                    sitekey="6LfMuTgcAAAAAPdXT-cFCeby2oFeeJxakbjAPQ_3"
                                    onChange={onChange}
                                 />
                                 {reCaptcha === false && (
                                    <p className="fs-5 m-0 ps-2 text-danger">
                                       Por favor acepte el Captcha
                                    </p>
                                 )}
                              </div>
                              <div className="col-12 col-lg-6 py-4">
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
      name: '',
      email: '',
      subject: '',
      content: '',
      phone: '',
   };
}

function validationSchema() {
   return {
      name: Yup.string().required(true),
      subject: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      phone: Yup.string().min(10).max(10).required(true),
      content: Yup.string()
         .min(20, 'El mensaje debe tener al menos 20 caracteres')
         .required(true),
   };
}
