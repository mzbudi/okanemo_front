import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalWrongPassword = (props) => {
  const [show, setShow] = useState(props.open);

  useEffect(() => {
    setShow(props.open);
  }, [props.open]);

  const handleClose = () => {
    props.closeModal();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.msg}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWrongPassword;
