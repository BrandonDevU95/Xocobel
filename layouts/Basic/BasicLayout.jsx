import classNames from 'classnames';
import Header from '../../components/Header';
import Footer from '../../components/Home/Footer';
import { Container } from 'semantic-ui-react';

export default function Basic({ children, className }) {
   return (
      <Container
         fluid
         className={classNames('basic-layout', { [className]: className })}
      >
         <Header />
         {/* <Container fluid className="content">
            {children}
         </Container>
         <Footer /> */}
      </Container>
   );
}
