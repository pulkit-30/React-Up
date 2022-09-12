import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={props.size} />
    </Box>
  );
}
