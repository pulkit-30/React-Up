import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MessageContext from '../../context/messages/MessageContext';

export default function ResponsiveDialog() {
  const Message = useContext(MessageContext);

  const handleClose = () => {
    Message.ClearMessage();
  };

  return (
    <div>
      <Dialog
        open={Message.isMessage}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          id='responsive-dialog-title'
          style={{ color: 'black', width: '500px' }}
        >
          Message
        </DialogTitle>
        <DialogContent
          style={{
            minHeight: '100px',
          }}
        >
          <DialogContentText>{Message.Message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
