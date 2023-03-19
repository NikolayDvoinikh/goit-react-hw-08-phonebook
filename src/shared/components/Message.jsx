import { Alert, Snackbar } from '@mui/material';

function Message({ children, isOpen, handleClose }) {
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '320px',
          height: '50px',
          backgroundColor: 'rgb(235 163 163)',
        }}
        severity="error"
      >
        {children}
      </Alert>
    </Snackbar>
  );
}

export default Message;
