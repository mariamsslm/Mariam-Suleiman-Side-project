import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const CreateMeme = () => {
  const [formData, setFormData] = useState({
    imageURL: '',
    textCaption: '',
    userId: '',
  });

  const navigate = useNavigate();

  const toastNotification = (isSuccess) => {
    const message = isSuccess ? 'Meme created successfully' : 'Creation failed';
    const toastType = isSuccess ? toast.success : toast.error;

    toastType(message, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/add`, formData);
      toastNotification(true);
      navigate('/');
    } catch (error) {
      console.error(error.message);
      toastNotification(false);
    }
  };

  return (
    <Container style={{ textAlign: 'center', padding: '16px' }}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Create A Meme
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Text Caption"
            variant="outlined"
            name="textCaption"
            value={formData.textCaption}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="User ID"
            variant="outlined"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button
            style={{ marginTop: '16px' }}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            ADD
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateMeme;
