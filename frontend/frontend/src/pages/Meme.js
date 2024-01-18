import React from "react";
import { Container, Paper, Typography ,Box} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import image from '../assets/images/loading.gif'
const Meme = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeme = async () => {
      setIsLoading(true);
      try {
        const meme = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/read/${id}`);
        if (meme) {
          setMeme(meme.data.data);
          setIsLoading(false);
        } else {
          setMeme(null);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchMeme();
  }, [id]);

  const renderContent = () => {
    if (isLoading) return <Box width="100vw"><img
    alt='Loading'
    src={image}
    style={{
      width:"40%",
      marginLeft:"28%"
      
    }}/></Box>;
    if(meme && !isLoading) return (

    <Container width="100%" sx={{ padding: "40px" }}>
      
      <Paper
        sx={{ display: "flex", padding: "10px", backgroundColor: "#F5D431" }}
      >
        <img
          alt={"name"}
          src={meme.imageURL}
          style={{
            width: "60%",
            height: "calc(80vh - 99px)",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            width: "50%",
            padding: "10% 5% 10% 8%",
            backgroundColor: "#FAFAFB",
          }}
        >
          <header>
            <Typography variant="h4" color="primary">
              {meme.textCaption}
            </Typography>


          </header>
          <section
            style={{
              margin: "3rem 0",
              fontSize: "18px",
              lineHeight: "2.2",
              textAlign: "justify",
              color: "#9A9C80",
            }}
          >
                        <Typography color="textSecondary">{`Creator: ${meme.User.username}`}</Typography>
                        <Typography color="textSecondary">{`Email: ${meme.User.email}`}</Typography>
           <Typography> {`Created at: ${meme.createdAt.split("T")[0]}`}</Typography>
          </section>
        </div>
      </Paper>
     
    </Container>)
     else return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#FAFAFB",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          color="textSecondary"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          No Article found
        </Typography>
      </div>
      )
  };
  return renderContent();
};

export default Meme;
