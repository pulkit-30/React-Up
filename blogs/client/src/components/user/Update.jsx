import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/user/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IconButton, Button, TextField } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MessageContext from '../../context/messages/MessageContext';

const Update = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [name, setname] = useState('');
  const [image, setImage] = useState(null);
  const Message = useContext(MessageContext);

  const params = useParams();
  useEffect(() => {
    fetch('http://localhost/api/auth/' + params.id)
      .then((res) => res.json())
      .then((res) => {
        if (res.isError) throw new Error(res.message);
        else {
          console.log(res.data.user);
          setname(res.data.user.name);
          setImage(res.data.user.image);
        }
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  const imageUpload = (image) => {
    const data = new FormData();
    var img = image;
    data.append('file', img);
    data.append('upload_preset', 'paathshaala');
    data.append('cloud_name', 'digf8dtoq');

    var config = {
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios('https://api.cloudinary.com/v1_1/digf8dtoq/image/upload', config)
      .then(function (response) {
        setImage(response.data['url']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='p-20'>
      <h2>Edit Your Profile</h2>
      {image && (
        <div>
          <img src={image} alt='postImage' layout='fill' />

          <IconButton
            size='small'
            onClick={() => setImage(null)}
            style={{
              position: 'absolute',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              top: '2px',
              right: '1px',
            }}
          >
            <CloseOutlinedIcon fontSize='small' />
          </IconButton>
        </div>
      )}
      <div
        style={{ width: '100%', paddingBlock: 10 }}
        className='flex f-space-btw'
      >
        <Button component='label'>
          <input
            hidden
            accept='image/*'
            type='file'
            onChange={(e) => imageUpload(e.target.files[0])}
            onClick={(e) => {
              e.target.value = null;
            }}
          />
          <AddPhotoAlternateOutlinedIcon
            style={{ color: 'var(--primary-color)' }}
          />
          &nbsp;Add cover Image
        </Button>
      </div>
      <br />
      <br />

      <label>Name</label>
      <br />

      <TextField
        fullWidth
        type='text'
        placeholder='Your name...'
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <Button
        variant='contained'
        sx={{
          margin: '20px',
        }}
        onClick={() => {
          const payload = {
            name,
            image,
          };
          fetch('http://localhost/api/auth/' + user.User._id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.isError) throw new Error(res.message);
              Message.ThrowMessage(res.message);
              navigate('/profile/' + user.User._id);
            })
            .catch((err) => {
              Message.ThrowMessage(err.message);
            });
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Update;
