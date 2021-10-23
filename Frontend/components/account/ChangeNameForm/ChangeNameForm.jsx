import { Form, Button } from 'semantic-ui-react';

export default function ChangeNameForm({ user }) {
   return (
      <div className="change-name-form">
         <h4>Cambio de Nombre</h4>
         <Form>
            <Form.Group widths="equal">
               <Form.Input name="name" placeholder="Nombre" />
               <Form.Input name="lastname" placeholder="Apellidos" />
            </Form.Group>
            <Button className="submit">Actualizar</Button>
         </Form>
      </div>
   );
}
