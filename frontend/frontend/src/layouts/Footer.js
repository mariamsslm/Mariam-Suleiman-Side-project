import React from 'react';
import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      square
      elevation={2}
      style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#018CDD',
        color: '#fff',
      }}
    >
      <Typography variant="body2">
        &copy; 2023 MiMo MeMe. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
