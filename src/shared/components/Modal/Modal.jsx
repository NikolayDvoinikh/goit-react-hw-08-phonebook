import css from './modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import { Close } from '@mui/icons-material';

export const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  const onClose = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    document.addEventListener('keydown', onClose);
    return () => {
      document.removeEventListener('keydown', onClose);
    };
  }, [onClose]);

  return createPortal(
    <Box className={css.modal_backdrop} onClick={onClose}>
      <div className={css.modal_body}>
        <Close
          onClick={onClose}
          color="secondary"
          sx={{
            cursor: 'pointer',
            padding: '30px',
          }}
        />

        {children}
      </div>
    </Box>,
    modalRoot
  );
};

export default Modal;
