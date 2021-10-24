import { Form, Button } from 'semantic-ui-react';

export default function AddressForm() {
   return (
      <Form className="address-form">
         <Form.Input
            name="title"
            type="text"
            label="Titulo de la direccion"
            placeholder="Titulo de la direccion"
         />
         <Form.Group widths="equal">
            <Form.Input
               name="name"
               type="text"
               label="Nombre completo"
               placeholder="Nombre completo"
            />
            <Form.Input
               name="address"
               type="text"
               label="Direccion"
               placeholder="Direccion"
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="city"
               type="text"
               label="Ciudad / Municipio"
               placeholder="Ciudad"
            />
            <Form.Input
               name="state"
               type="text"
               label="Estado"
               placeholder="Estado"
            />
         </Form.Group>
         <Form.Group widths="equal">
            <Form.Input
               name="postalCode"
               type="text"
               label="Codigo Postal"
               placeholder="Codigo Postal"
            />
            <Form.Input
               name="phone"
               type="text"
               label="Telefono"
               placeholder="Telefono"
            />
         </Form.Group>
         <div className="actions">
            <Button type="submit" className="submit">
               Crear direccion
            </Button>
         </div>
      </Form>
   );
}
