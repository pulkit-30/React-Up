import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/messages/MessageContext';

export default function Navbar() {
  const User = React.useContext(UserContext);
  const navigate = useNavigate();
  const Message = React.useContext(MessageContext);
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <Button
            variant='outlined'
            {...bindTrigger(popupState)}
            sx={{
              margin: '20px',
            }}
          >
            <SettingsIcon />
            &nbsp;Setting
          </Button>
          <Menu {...bindMenu(popupState)}>
            <div className='flex f-col f-start'>
              <Link
                className='link p-10'
                to={'/profile/edit/' + User.User._id}
                onClick={popupState.close}
              >
                Edit
              </Link>
              <Link
                to='#'
                onClick={() => {
                  popupState.close();
                  fetch('http://localhost/api/auth/' + User.User._id, {
                    method: 'DELETE',
                    body: JSON.stringify(User.User),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                    .then((res) => res.json())
                    .then((res) => {
                      console.log(res);
                      if (res.isError) throw new Error(res.error);
                      else {
                        navigate('/');
                        Message.ThrowMessage(res.message);
                        User.LogOut();
                      }
                    })
                    .catch((err) => Message.ThrowMessage(err.message));
                }}
                className='link p-10'
              >
                Delete Account
              </Link>
            </div>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
