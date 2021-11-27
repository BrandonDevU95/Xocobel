import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {
   Container,
   Grid,
   Image,
   Form,
   Button,
   TextArea,
} from 'semantic-ui-react';

export default function Contact() {
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
      <Container fluid className="contact">
         <Container fluid className="contact-container">
            <h2>Contactanos</h2>
            <Grid>
               <Grid.Column width={8}>
                  <Image fluid src="/contact.jpeg" />
               </Grid.Column>
               <Grid.Column width={8}>
                  <Form onSubmit={formik.handleSubmit}>
                     <Form.Group widths="equal">
                        <Form.Input
                           name="name"
                           type="text"
                           label="Nombre"
                           placeholder="Nombre Completo"
                           onChange={formik.handleChange}
                           value={formik.values.name}
                           error={formik.errors.name}
                        />
                        <Form.Input
                           name="email"
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
                           name="phone"
                           type="text"
                           label="Teléfono"
                           placeholder="(55) 1234 5678"
                           onChange={formik.handleChange}
                           value={formik.values.phone}
                           error={formik.errors.phone}
                        />
                        <Form.Input
                           name="subject"
                           type="text"
                           label="Asunto"
                           placeholder="Chocolate"
                           onChange={formik.handleChange}
                           value={formik.values.subject}
                           error={formik.errors.subject}
                        />
                     </Form.Group>
                     <Form.TextArea
                        name="message"
                        type="text"
                        label="Mensaje"
                        placeholder="Cuéntanos más sobre tus dudas..."
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
               </Grid.Column>
            </Grid>
         </Container>
      </Container>
   );
}

function initialValues() {
   return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
   };
}

function validationSchema() {
   return {
      name: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      phone: Yup.string(),
      subject: Yup.string().required(true),
      message: Yup.string().min(20, 'Too short!').required(true),
   };
}
