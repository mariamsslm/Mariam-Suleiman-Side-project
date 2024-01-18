import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid,Box} from '@mui/material';
import axios from 'axios';
import MemeCard from '../components/MemeCard';
import image from '../assets/images/loading.gif'
const MemeContainer = () => {
  const [memes, setMemes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get( `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/read/all`);
        console.log(response.data)
        setMemes(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching memes:', error);
        setIsLoading(true);
      }
    };

    fetchMemes();
  }, []);

  return (
  



<Container maxWidth="100%"sx={{marginLeft:"5rem"}} >
  <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 3,marginLeft:"1rem" }}>
    All Memes
  </Typography>
  <Grid  container spacing={2}>
    {!isLoading && memes ? (
      memes.map((meme) => (
        <Grid item key={meme.id} xs={12} sm={6} md={4} >
          <MemeCard data={meme} />
        </Grid>
      ))
    ) : (
      <Box width="100vw"><img
      alt='Loading'
      src={image}
      style={{
        width:"40%",
        marginLeft:"25%"
        
      }}/></Box>
    )}
  </Grid>
</Container>

  );
};

export default MemeContainer;


