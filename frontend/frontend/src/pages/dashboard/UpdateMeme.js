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
    id:id,
    imageURL: '',
    textCaption: '',
  
  });

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/read/${id}`
        );
        setFormData((prevData) => ({
          ...prevData,
          ...response.data.data,
        }));
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
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/edit`,
        formData
      );
      toastNotification(true);

      setFormData({
        id:id,
        imageURL:'',
        textCaption:''
      })
    } catch (error) {
      console.log(error.message);
      toastNotification(false);
    }
  };

  return (
      <Container style={{ textAlign: 'center', padding: '16px' }}>
        <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Update An Meme
        </Typography>
        <form  onSubmit={handleUpdate} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <TextField
            fullWidth
            label="imageURL"
            variant="outlined"
            name="imageURL"
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
          {/* <TextField
            fullWidth
            label="userId"
            variant="outlined"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            
          /> */}
         
        
          <Button
          style={{marginTop:'16px'}}
            variant="contained"
            color="primary"
            type="submit"
            
          >
            Edit
          </Button>
        </form>
        </Paper>
      </Container>
  );
};

export default UpdateMeme;
