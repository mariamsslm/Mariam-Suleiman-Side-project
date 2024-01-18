import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Paper,
  Button,
} from '@mui/material';
// import Context from '../../contexts/Context.js';

const  UpdateMeme = () => {
  const toastNotification = (isSuccess) => {
    const message = isSuccess
      ? 'Article Updated Successfully'
      : 'Updating Failed';
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

  const { id } = useParams();
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    category: '',
    body: '',
    author: '',
    userId: '',
  });

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/read/${id}`
        );
        setFormData(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (id) fetchMeme();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/update/${id}`,
        formData
      );
      toastNotification(true);
    } catch (error) {
      console.log(error.message);
      toastNotification(false);
    }
  };

  return (
    // <Context.Provider value={id}>
      <Container>
        <Paper>
        <Typography variant="h4" >
          Update An Meme
        </Typography>
        <form  onSubmit={handleUpdate}>
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            name="image"
            value={formData.imageURL}
            onChange={handleInputChange}
         
          />
          <TextField
            fullWidth
            label="textCaption"
            variant="outlined"
            name="textCaption"
            value={formData.textCaption}
            onChange={handleInputChange}
            
          />
          <TextField
            fullWidth
            label="userId"
            variant="outlined"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            
          />
         
        
          <Button
            variant="contained"
            color="primary"
            type="submit"
            
          >
            Edit
          </Button>
        </form>
        </Paper>
      </Container>
    // </Context.Provider>
  );
};

export default UpdateMeme;
