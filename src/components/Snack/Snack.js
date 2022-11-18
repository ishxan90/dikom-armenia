import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SimpleSnackbar(props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setOpen(false);
  };

  return (
    <div>
        <Snackbar
        open={props.open}
        autoHideDuration={4000}
        onClose={handleClose}
        >
        <Alert sx={{ width: '100%' }} variant="filled" severity="success">
          <p>{props.t('сообщение отправлено')}</p>
        </Alert>    
      </Snackbar>
    </div>
  );
}