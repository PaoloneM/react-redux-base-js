import React from 'react';
import {
    Button,
    Modal,

  } from "react-bootstrap";
export const Modals = ({setShow, show,currentProduct}) => {

    return (
        <Modal show={show} >
        <Modal.Header>{currentProduct.id} . {currentProduct.title}</Modal.Header>
        <Modal.Body>
          {currentProduct.description}
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={()=>{setShow(!show)} }>close</Button>
        </Modal.Footer>
      </Modal>
    )
}
