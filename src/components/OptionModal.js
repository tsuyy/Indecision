import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">You shall eat</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button
      onClick={props.handleCloseModal}
      className="button"
    >
      okay
    </button>
  </Modal>
);

Modal.setAppElement('div');
export default OptionModal;
