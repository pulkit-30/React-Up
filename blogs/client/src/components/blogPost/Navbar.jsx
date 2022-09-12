import React, { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/messages/MessageContext';

const Navbar = (props) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const Message = useContext(MessageContext);
  return (
    <div className='flex f-col m-t-10 m-b-10'>
      <Link
        className='link'
        to={'/edit/' + props.data._id}
        style={{ width: '100%', marginTop: '10px' }}
      >
        <Button style={{ width: '100%' }} variant='outlined' className='m-t-10'>
          <EditIcon /> Edit
        </Button>
      </Link>

      <Button
        variant='outlined'
        color='error'
        className='m-t-10'
        style={{ width: '100%', marginTop: '10px' }}
        onClick={() => {
          fetch(
            'http://localhost/api/blog/' + user.User._id + '/' + props.data._id,
            {
              method: 'DELETE',
              body: JSON.stringify(props.data),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
            .then((res) => res.json())
            .then((res) => {
              if (res.isError) throw new Error(res.error);
              else {
                navigate('/');
                Message.ThrowMessage('Post Deleted Successfully!');
              }
            })
            .catch((err) => Message.ThrowMessage(err.message));
        }}
      >
        <DeleteIcon /> Delete
      </Button>
    </div>
  );
};

export default Navbar;
