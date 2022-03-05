import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { updatePasswordApi } from "../../../api/user";

export default function ChangePasswordForm({ user, logout }) {
   const [loading, setLoading] = useState(false);

   const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: async (formData) => {
         setLoading(true);
         const response = await updatePasswordApi(
            user.id,
            formData.password,
            logout
         );
         if (!response) {
            toast.error("Error al actualizar la contraseña");
         } else {
            logout();
            toast.success("Contraseña actualizada");
         }
         setLoading(false);
      },
   });

   return (
      <div className="change-password-form">
         <h4>Cambio de Contraseña</h4>
         <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
               <Form.Input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.errors.password}
               />
               <Form.Input
                  name="repeatPassword"
                  type="password"
                  placeholder="Confirmar Contraseña"
                  onChange={formik.handleChange}
                  value={formik.values.repeatPassword}
                  error={formik.errors.repeatPassword}
               />
            </Form.Group>
            <Button type="submit" className="submit" loading={loading}>
               Actualizar
            </Button>
         </Form>
      </div>
   );
}

function initialValues() {
   return {
      password: "",
      repeatPassword: "",
   };
}

function validationSchema() {
   return {
      password: Yup.string()
         .required(true)
         .oneOf([Yup.ref("repeatPassword")], "El password no coincide"),
      repeatPassword: Yup.string()
         .required(true)
         .oneOf([Yup.ref("password")], "El password no coincide"),
   };
}
