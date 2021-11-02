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
   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: (formData) => {
         console.log(formData);
      },
   });

   return (
      <Container fluid className="contact">
         <Container fluid className="contact-container">
            <h2>Conatct Us</h2>
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
                        <Button basic type="submit">
                           Send
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
