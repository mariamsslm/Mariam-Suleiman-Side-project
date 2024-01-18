import React from 'react'
import { Grid ,Container,Paper,Typography,Box, TextField} from '@mui/material';

const MemeDashboard=()=> {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Meme Dashboard
        </Typography>
        <TextField
        label = "id"
        fullWidth
        variant='outlined'
          valu>

        </TextField>
        </Paper>
      </Grid>

    </Grid>
    
  )
} 
export default MemeDashboard;








// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   TextField,
//   Grid,
//   Paper,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// const MemeDashboard = () => {
//   const [data, setdata] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const [newMeme, setNewMeme] = useState({
//     imageURL: "",
//     textCaption: "",
//     User: {
//       username: "",
//     },
//     createdAt: new Date().toLocaleString(),
//   });
//   const [editMemeIndex, setEditMemeIndex] = useState(null);

//   useEffect(() => {
//     const fetchMemes = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/meme/read/all");
//         setMemeL(response.data.data);
//       } catch (error) {
//         console.error("Error fetching memes", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMemes();
//   }, []);

//   const handleAddMeme = async () => {
//     try {
//       await axios.post("http://localhost:5000/meme/add", {
//         ...newMeme,
//         createdAt: new Date().toLocaleString(),
//       });

//       const response = await axios.get("http://localhost:5000/meme/read/all");
//       setMemeList(response.data.data);
//     } catch (error) {
//       console.error("Error adding meme", error);
//     }

//     // Clear the form
//     setNewMeme({
//       imageURL: "",
//       textCaption: "",
//       User: {
//         username: "",
//       },
//       createdAt: new Date().toLocaleString(),
//     });
//   };

//   const handleUpdateMeme = () => {
//     if (editMemeIndex !== null) {
//       // Update existing meme
//       const updatedMemeList = [...memeList];
//       updatedMemeList[editMemeIndex] = {
//         ...newMeme,
//         createdAt: new Date().toLocaleString(),
//       };
//       setMemeList(updatedMemeList);
//       setEditMemeIndex(null);
//       // Clear the form
//       clearForm();
//     }
//   };

//   const handleDeleteMeme = (index) => {
//     if (index !== null) {
//       // Delete existing meme
//       const updatedMemeList = [...memeList];
//       updatedMemeList.splice(index, 1);
//       setData(updatedMemeList);
//       setEditMemeIndex(null);
//       // Clear the form
//       clearForm();
//     }
//   };

//   const clearForm = () => {
//     setNewMeme({
//       imageURL: "",
//       textCaption: "",
//       User: {
//         username: "",
//       },
//       createdAt: new Date().toLocaleString(),
//     });
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ height: "100vh" }}
//     >
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <Paper elevation={3} style={{ padding: 20 }}>
//           <Typography variant="h4" gutterBottom>
//             Meme Dashboard
//           </Typography>
//           {/* Add Meme Section */}
//           <TextField
//             label="Image URL"
//             fullWidth
//             variant="outlined"
//             value={newMeme.imageURL}
//             onChange={(e) =>
//               setNewMeme({ ...newMeme, imageURL: e.target.value })
//             }
//             style={{ marginBottom: 10 }}
//           />
//           <TextField
//             label="Text Caption"
//             fullWidth
//             variant="outlined"
//             value={newMeme.textCaption}
//             onChange={(e) =>
//               setNewMeme({ ...newMeme, textCaption: e.target.value })
//             }
//             style={{ marginBottom: 10 }}
//           />
//           <TextField
//             label="User Name"
//             fullWidth
//             variant="outlined"
//             value={newMeme.User.username}
//             onChange={(e) =>
//               setNewMeme({
//                 ...newMeme,
//                 User: { ...newMeme.User, username: e.target.value },
//               })
//             }
//             style={{ marginBottom: 10 }}
//           />
//           <Button variant="contained" color="primary" onClick={handleAddMeme}>
//             Add Meme
//           </Button>

//           {/* Meme List Section */}
//           <Typography variant="h6" style={{ marginTop: 20 }}>
//             Meme List
//           </Typography>
         
//           <List>
//             {isLoading ? (
//               <CircularProgress />
//             ) : Array.isArray(data) && data.length > 0 ? (
//               data.map((meme, index) => (
//                 <ListItem key={index}>
//                   <ListItemText
//                     primary={meme.textCaption}
//                     secondary={`By ${meme.User.username} at ${meme.createdAt}`}
//                   />
//                   <div>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       onClick={() => handleUpdateMeme(index)}
//                     >
//                       Edit
//                     </Button>
//                   </div>
//                   <div>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       onClick={() => handleDeleteMeme(index)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </ListItem>
//               ))
//             ) : (
//               <Typography>No memes available</Typography>
//             )}
//           </List>
        
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default MemeDashboard;
