import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Button, Container, Grid, Image, Form, Radio } from 'semantic-ui-react';
import BasicModal from '../../Modal/BasicModal';

export default function ServiceInfo() {
   const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         setLoading(true);
         console.log(formData);
         formik.resetForm();
         toast.success('Message sent successfully!');
         setLoading(false);
      },
   });

   return (
      <Container fluid className="service-info">
         <Container fluid className="service-info-container">
            <Grid>
               <Grid.Column width={8}>
                  <div className="service-info-container_info">
                     <h2>Nuestros Servicios</h2>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed exercitationem quaerat cupiditate amet non delectus
                        est suscipit reiciendis magni repellat incidunt, vel
                        inventore alias beatae, blanditiis eius dolore illo
                        corrupti. Beatae dicta ratione perspiciatis qui, odio
                        deserunt et praesentium quia?
                     </p>
                     <Button basic>Contactenos</Button>
                  </div>
               </Grid.Column>
               <Grid.Column width={8}>
                  <Image src="/service-info-1.jpeg" alt="service-info" />
               </Grid.Column>
            </Grid>
            <Grid>
               <Grid.Column width={8}>
                  <Image src="/service-info-2.jpeg" alt="service-info" />
               </Grid.Column>
               <Grid.Column width={8}>
                  <div className="service-info-container_info">
                     <h2>Solicite un presupuesto</h2>
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
               </Grid.Column>
            </Grid>
            <BasicModal
               show={showModal}
               setShow={setShowModal}
               title="Solocite Informacion"
               className="service-info-container_modal"
            >
               <FormModal formik={formik} loading={loading} />
            </BasicModal>
         </Container>
      </Container>
   );
}

function FormModal({ formik, loading }) {
   return (
      <Form onSubmit={formik.handleSubmit}>
         <Form.Group widths="equal">
            <Form.Input
               name="name"
               type="text"
               label="Name"
               placeholder="Full Name"
               onChange={formik.handleChange}
               value={formik.values.name}
               error={formik.errors.name}
            />
            <Form.Input
               name="email"
               type="text"
               label="Email"
               placeholder="example@xocobel.com.mx"
               onChange={formik.handleChange}
               value={formik.values.email}
               error={formik.errors.email}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="organization"
               type="text"
               label="Organization"
               placeholder="Organization Name"
               onChange={formik.handleChange}
               value={formik.values.organization}
               error={formik.errors.organization}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="phone"
               type="text"
               label="Phone"
               placeholder="(555) 555 5555"
               onChange={formik.handleChange}
               value={formik.values.phone}
               error={formik.errors.phone}
            />
            <Form.Input
               name="subject"
               type="text"
               label="Subject"
               placeholder="Chocolate"
               onChange={formik.handleChange}
               value={formik.values.subject}
               error={formik.errors.subject}
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="budget"
               type="text"
               label="Budget"
               placeholder="$1,500"
               onChange={formik.handleChange}
               value={formik.values.budget}
               error={formik.errors.budget}
            />
            <Form.Input
               name="people"
               type="text"
               label="People"
               placeholder="15 people"
               onChange={formik.handleChange}
               value={formik.values.people}
               error={formik.errors.people}
            />
            <Form.Input
               name="date"
               type="text"
               label="Date"
               placeholder="14/12/21"
               onChange={formik.handleChange}
               value={formik.values.date}
               error={formik.errors.date}
            />
         </Form.Group>
         <Form.TextArea
            name="message"
            type="text"
            label="Message"
            placeholder="Tell us more about..."
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
         />
         <div className="action">
            <Button basic type="submit" loading={loading}>
               Send
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
