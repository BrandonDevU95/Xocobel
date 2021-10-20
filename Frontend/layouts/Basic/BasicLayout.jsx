import { Container } from 'semantic-ui-react';

export default function Basic({ children }) {
   return (
      <Container className="basic-layout">
         <Container className="content">{children}</Container>
         <h1>Basic Layout</h1>
      </Container>
   );
}
