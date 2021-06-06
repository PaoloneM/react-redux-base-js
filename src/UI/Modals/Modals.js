import React from 'react';
import {
    Button,
    Modal,

  } from "react-bootstrap";
export const Modals = ({setShow, show,currentProduct}) => {

    return (
        <Modal show={show} >
        <Modal.Header> Product ID {currentProduct.id}</Modal.Header>
        <Modal.Body>
          {currentProduct.title}
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={()=>{setShow(!show)} }>close</Button>
        </Modal.Footer>
      </Modal>
    )
}
