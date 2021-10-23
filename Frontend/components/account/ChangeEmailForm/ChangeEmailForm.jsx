import { Form, Button } from 'semantic-ui-react';

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
   return (
      <div className="change-email-form">
         <h4>Cambio de Email</h4>
         <Form>
            <Form.Group widths="equal">
               <Form.Input name="email" placeholder="Email" />
               <Form.Input name="repeatEmail" placeholder="Confirma Email" />
            </Form.Group>
            <Button type="submit" className="submit">
               Actualizar
            </Button>
         </Form>
      </div>
   );
}
