import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

function NotFound() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F5D431',
       
      }}
    >
      
      <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: 30, md: 50 } }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 25 }, marginTop: { xs: 20, md: 0 } }}>
        The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          padding: { xs: '13px 20px', md: '15px 25px' },
          backgroundColor: '#018CDD',
          color: '#FFF',
          textAlign: 'center',
          border: 'none',
          transition: '.2s',
          cursor: 'pointer',
          marginTop: { xs: 30, md: 40 },
          borderRadius: 5,
          fontSize: { xs: 18, md: 22 },
          '&:hover': {
            backgroundColor: '#F57F31',
          },
        }}
      >
        Return Home
      </Button>
    </Container>
  );
}

export default NotFound;
