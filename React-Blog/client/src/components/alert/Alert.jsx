import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

const AlertBox = (props) => {
  return (
    <Alert severity='info' className='m-t-10'>
      <AlertTitle
        style={{
          fontFamily: 'var(--heading-font)',
        }}
      >
        {props.title}
      </AlertTitle>
      {props.message}{' '}
      <span
        style={{
          fontFamily: 'var(--heading-font)',
          fontWeight: 'bolder',
        }}
      >
        {props.addMessage}
      </span>
    </Alert>
  );
};

export default AlertBox;
