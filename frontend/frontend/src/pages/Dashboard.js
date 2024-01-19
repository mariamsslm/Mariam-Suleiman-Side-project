import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MemeDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const toastNotification = (isSuccess) => {
    const message = isSuccess ? "Meme deleted successfully" : "Deletion failed";
    const toastType = isSuccess ? toast.success : toast.error;

    toastType(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleRemoveMeme = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/delete/${id}`
      );
      console.log("Deleted article", response);
      const remainedArticles = data.filter((meme) => meme.id !== id);
      setData(remainedArticles);
      toastNotification(true);
    } catch (error) {
      console.log(error.message);
      toastNotification(false);
    }
  };

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}/meme/read/all`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMemes();
  }, []);

  return (
   
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{ padding: 20, backgroundColor: "#018CDD" }}
        >
          <Typography variant="h4" gutterBottom>
            Meme Dashboard
          </Typography>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/CreateMeme">
              <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "#F5D431", margin: "5px" }}
              >
                Add Meme
              </Button>
            </Link>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{}}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Creator</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>textCaption</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : data && data.length > 0 ? (
                  data.map((meme, index) => (
                    <TableRow key={index}>
                      <TableCell>{meme.id}</TableCell>
                      <TableCell>{meme.User.username}</TableCell>
                      <TableCell>
                        <img
                          src={meme.imageURL}
                          alt="Meme"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </TableCell>
                      <TableCell>{meme.textCaption}</TableCell>
                      <TableCell>
                        <Link to={`/meme/edit/${meme.id}`}>
                          <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                              backgroundColor: "#F5D431",
                              width: "10px",
                              marginBottom: "5px",
                            }}
                          >
                            <EditIcon />
                          </Button>
                        </Link>

                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ backgroundColor: "#F57F31", width: "10px" }}
                          onClick={() => handleRemoveMeme(meme.id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Typography>No memes available</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MemeDashboard;
