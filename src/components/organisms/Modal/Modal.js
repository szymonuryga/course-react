import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children} <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
