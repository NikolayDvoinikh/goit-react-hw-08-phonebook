import css from './modal.module.css';
import { createPortal } from 'react-dom';
import { Box } from '@mui/material';
import { Close } from '@mui/icons-material';

export const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  return createPortal(
    <Box className={css.modal_backdrop}>
      <div className={css.modal_body}>
        <Close
          onClick={close}
          color="secondary"
          sx={{
            cursor: 'pointer',
            padding: '10px',
          }}
        />
        {children}
      </div>
    </Box>,
    modalRoot
  );
};

export default Modal;
