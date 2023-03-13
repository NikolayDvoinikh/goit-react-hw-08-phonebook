import css from './modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';

export const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children, contact }) => {
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
    <div className={css.modal_backdrop} onClick={onClose}>
      <div className={css.modal_body}>
        <button type="button" className={css.btnClose} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
