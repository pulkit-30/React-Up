import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import style from '../../style/login.module.css';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/messages/MessageContext';
import { Link } from 'react-router-dom';

function RegisterBox() {
  const Message = useContext(MessageContext);
  const user = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const registerUser = async (event) => {
    event.preventDefault();

    const payload = {
      name: username,
      email,
      password,
    };
    fetch('http://localhost/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isError) throw new Error(res.error);
        Message.ThrowMessage('User Registered Successfully');
        user.LogIn(res.data.user);
      })
      .catch((err) => {
        Message.ThrowMessage(err.message);
      });
  };

  return (
    <div className='flex f-col'>
      <div className={'flex f-space-btw ' + style.FormBox}>
        <form
          className={style.form + ' flex f-col f-space-btw'}
          onSubmit={registerUser}
        >
          <h2>Register</h2>
          <TextField
            id='filled-basic'
            label='Name'
            variant='filled'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className={style.inputField}
            inputProps={{
              style: { color: 'var(--font-color)' },
            }}
            InputLabelProps={{
              style: { color: 'var(--font-color)' },
            }}
          />
          <TextField
            id='filled-basic'
            type='email'
            label='Email'
            variant='filled'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style.inputField}
            inputProps={{
              style: { color: 'var(--font-color)' },
            }}
            InputLabelProps={{
              style: { color: 'var(--font-color)' },
            }}
          />

          <TextField
            type='password'
            id='filled-basic'
            label='Password'
            variant='filled'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.inputField}
            inputProps={{
              style: { color: 'var(--font-color)' },
            }}
            InputLabelProps={{
              style: { color: 'var(--font-color)' },
            }}
          />
          <Button type='submit' variant='contained'>
            Register
          </Button>
        </form>
        <img src='/login-art.png' alt='login-art' />
      </div>
      <div>
        Already have an account <Link to='/login'>login here</Link>
      </div>
    </div>
  );
}

export default RegisterBox;
