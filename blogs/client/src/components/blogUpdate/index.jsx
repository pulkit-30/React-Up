import React, { useContext, useEffect, useState } from 'react';
import { IconButton, Button, TextField } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MessageContext from '../../context/messages/MessageContext';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

const Compose = () => {
  const [blogData, updateBlogData] = useState(null);
  const user = useContext(UserContext);
  const [markdown, updateMarkdown] = useState('');
  const Message = useContext(MessageContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const params = useParams();

  useEffect(() => {
    const subscribe = () => {
      fetch('http://localhost/api/blog?id=' + params.id)
        .then((res) => res.json())
        .then((res) => {
          if (res.isError) throw new Error('Something went wrong!');
          else {
            updateBlogData(res.data);
            setTitle(res.data.title);
            setImgUrl(res.data.coverImage);
            updateMarkdown(res.data.markdown);
          }
        });
    };
    return subscribe;
    // eslint-disable-next-line
  }, []);

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
        setImgUrl(response.data['url']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      coverImage: imgUrl,
      markdown: markdown,
      user: user.User._id,
    };

    fetch('http://localhost/api/blog/' + user.User._id + '/' + blogData._id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isError) throw new Error(res.error);
        Message.ThrowMessage(res.message);
        navigate('/');
      })
      .catch((err) => {
        Message.ThrowMessage(err.message);
      });
  };

  return (
    <div
      className='flex f-col m-auto f-space-eve'
      style={{
        width: '80%',
        minHeight: '70rem',
      }}
    >
      <h2>Update</h2>
      <TextField
        fullWidth
        label='Title'
        id='fullWidth'
        variant='standard'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      {imgUrl && (
        <div>
          <img src={imgUrl} alt='postImage' layout='fill' />

          <IconButton
            size='small'
            onClick={() => setImgUrl(null)}
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

      <textarea
        value={markdown}
        onChange={(e) => updateMarkdown(e.target.value)}
        className='p-10'
        placeholder='Your Article...'
        style={{ width: '100%', minHeight: '500px' }}
      ></textarea>
      <Button variant='outlined' onClick={handleSubmit}>
        update
      </Button>
    </div>
  );
};

export default Compose;
