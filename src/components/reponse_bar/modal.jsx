import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './modal.css';
import ImageComponent from '../ImageComponent/image';
import { assets } from '../../assets/assets';

function FormModal() {
  return (
    <div
      className="modal-container modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton> 
          <Modal.Title>Form Modal</Modal.Title> 
        </Modal.Header>

        <Modal.Body>
          <Form className="form-container">
            <Form.Group className="mb-3" controlId="formName">
              <div className="user-icon">
                <ImageComponent src={assets.user_icon} />
              </div>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" type="submit">Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default FormModal;
