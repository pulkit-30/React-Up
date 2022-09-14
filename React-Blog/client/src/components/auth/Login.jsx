import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import style from '../../style/login.module.css';
import { Link } from 'react-router-dom';
import MessageContext from '../../context/messages/MessageContext';
import UserContext from '../../context/user/UserContext';

function Login() {
  const Message = useContext(MessageContext);
  const user = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /**
   *
   * @param {Object} event
   */
  const handelSubmit = async (event) => {
    event.preventDefault();
    const payload = { email, password };

    fetch('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isError) throw new Error(res.error);
        Message.ThrowMessage('User Logged In !!');
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
          onSubmit={handelSubmit}
        >
          <h2>Login</h2>
          <TextField
            name='email'
            id='filled-basic'
            label='Email'
            variant='filled'
            className={style.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{
              style: { color: 'var(--font-color)' },
            }}
            InputLabelProps={{
              style: { color: 'var(--font-color)' },
            }}
          />
          <TextField
            name='password'
            type='password'
            id='filled-basic'
            label='Password'
            variant='filled'
            className={style.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{
              style: { color: 'var(--font-color)' },
            }}
            InputLabelProps={{
              style: { color: 'var(--font-color)' },
            }}
          />
          <Button variant='contained' type='submit'>
            Login
          </Button>
        </form>
        <img src='/login-art.png' alt='login-art' />
      </div>
      <div>
        Don't have an account <Link to='/register'>register here</Link>
      </div>
    </div>
  );
}

export default Login;
