import React, { Component } from 'react';
import {
  Modal,
  Button
} from 'react-bootstrap';

import './contact.css';

export default class MyVerticallyCenteredModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="Contact-header">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="Contact-text">
            Hubungi kami melalui email ke <a style={{ color: '#F45087', textDecoration: 'underline' }} href="mailto:support@dishkon.co">support@dishkon.co</a> jika Anda memiliki pertanyaan tentang Dishkon atau apa yang kami lakukan!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}