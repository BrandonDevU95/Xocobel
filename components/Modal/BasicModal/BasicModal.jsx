import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Icon } from 'semantic-ui-react';

export default function BasicModal({
   show,
   setShow,
   title,
   children,
   ...rest
}) {
   const onClose = () => setShow(false);
   return (
      <Modal
         className="basic-modal"
         toggle={onClose}
         isOpen={show}
         onClose={onClose}
         {...rest}
      >
         <ModalHeader>
            <span>{title}</span> <Icon name="close" onClick={onClose} />
         </ModalHeader>
         <ModalBody>{children}</ModalBody>
      </Modal>
   );
}
