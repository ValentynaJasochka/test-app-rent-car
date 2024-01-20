import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ model,
  type,
  description,
  year,
  rentalPrice,
  img,
  id, onClose}) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalImg>
        <img src={img} alt={description} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};
