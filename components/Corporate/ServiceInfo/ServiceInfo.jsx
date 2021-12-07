import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Button, Form, Image } from 'semantic-ui-react';
import BasicModal from '../../Modal/BasicModal';

export default function ServiceInfo() {
   const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         setLoading(true);
         const form = document.getElementById('formCorp');
         const data = new FormData(form);
         fetch('/corporate.php', {
            method: 'POST',
            body: data,
         });
         formik.resetForm();
         toast.success('Mensaje enviado!');
         setShowModal(false);
         setLoading(false);
      },
   });

   return (
      <section className="service-info">
         <div className="service-info-container container">
            <div className="row">
               <div className="col-12  col-lg-6">
                  <div className="service-info-container_info">
                     <h2>Servicios Corporativos</h2>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed exercitationem quaerat cupiditate amet non delectus
                        est suscipit reiciendis magni repellat incidunt, vel
                        inventore alias beatae, blanditiis eius dolore illo
                        corrupti. Beatae dicta ratione perspiciatis qui, odio
                        deserunt et praesentium quia?
                     </p>
                     <Button as="a" href="/corporate#contact" basic>
                        Contáctanos
                     </Button>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                  <Image src="/service-info-1.jpeg" fluid alt="service-info" />
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-lg-6 order-2 order-sm-2 order-md-2 order-lg-1">
                  <Image src="/service-info-2.jpeg" fluid alt="service-info" />
               </div>
               <div className="col-12 col-lg-6 order-1 order-sm-1 order-md-1 order-lg-2">
                  <div className="service-info-container_info">
                     <h2>Solicite un Presupuesto</h2>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed exercitationem quaerat cupiditate amet non delectus
                        est suscipit reiciendis magni repellat incidunt, vel
                        inventore alias beatae, blanditiis eius dolore illo
                        corrupti. Beatae dicta ratione perspiciatis qui, odio
                        deserunt et praesentium quia?
                     </p>
                     <Button
                        basic
                        type="button"
                        onClick={() => setShowModal(true)}
                     >
                        Solicite un Presupuesto
                     </Button>
                  </div>
               </div>
            </div>
            <BasicModal
               show={showModal}
               setShow={setShowModal}
               size="lg"
               title="Solicite un Presupuesto"
               className="service-info-container_modal"
            >
               <FormModal formik={formik} loading={loading} />
            </BasicModal>
         </div>
      </section>
   );
}

function FormModal({ formik, loading }) {
   return (
      <Form onSubmit={formik.handleSubmit} id="formCorp">
         <Form.Group widths="equal">
            <Form.Input
               name="name"
               id="name"
               type="text"
               label="Nombre"
               placeholder="Nombre Completo"
               onChange={formik.handleChange}
               value={formik.values.name}
               error={formik.errors.name}
            />
            <Form.Input
               name="email"
               id="email"
               type="text"
               label="Correo"
               placeholder="ejemplo@xocobel.com.mx"
               onChange={formik.handleChange}
               value={formik.values.email}
               error={formik.errors.email}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="organization"
               id="organization"
               type="text"
               label="Organización"
               placeholder="Xocobel SA de CV"
               onChange={formik.handleChange}
               value={formik.values.organization}
               error={formik.errors.organization}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="phone"
               id="phone"
               type="text"
               label="Teléfono"
               placeholder="(56) 1234 5678"
               onChange={formik.handleChange}
               value={formik.values.phone}
               error={formik.errors.phone}
            />
            <Form.Input
               name="subject"
               id="subject"
               type="text"
               label="Tipo de Evento"
               placeholder="Aniversario de la Empresa"
               onChange={formik.handleChange}
               value={formik.values.subject}
               error={formik.errors.subject}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="budget"
               id="budget"
               type="text"
               label="Presupuesto"
               placeholder="$25,500"
               onChange={formik.handleChange}
               value={formik.values.budget}
               error={formik.errors.budget}
            />
            <Form.Input
               name="people"
               id="people"
               type="text"
               label="Personas Aprox"
               placeholder="15 personas"
               onChange={formik.handleChange}
               value={formik.values.people}
               error={formik.errors.people}
            />
            <Form.Input
               name="date"
               id="date"
               type="text"
               label="Fecha"
               placeholder="24/12/26"
               onChange={formik.handleChange}
               value={formik.values.date}
               error={formik.errors.date}
            />
         </Form.Group>
         <Form.TextArea
            name="message"
            id="message"
            type="text"
            label="Mensaje"
            placeholder="Cuentanos más acerca de tu evento..."
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
         />
         <div className="action">
            <Button basic type="submit" loading={loading}>
               Enviar
            </Button>
         </div>
      </Form>
   );
}

function initialValues() {
   return {
      name: '',
      email: '',
      organization: '',
      phone: '',
      budget: '',
      people: '',
      date: '',
      subject: '',
      message: '',
   };
}

function validationSchema() {
   return {
      name: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      organization: Yup.string().required(true),
      phone: Yup.string(),
      budget: Yup.string(),
      people: Yup.string(),
      date: Yup.string(),
      subject: Yup.string().required(true),
      message: Yup.string().min(20, 'Too short!').required(true),
   };
}
