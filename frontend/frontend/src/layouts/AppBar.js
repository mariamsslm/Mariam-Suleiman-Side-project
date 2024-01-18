import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box ,Divider} from "@mui/material";
import image from "../assets/logo/logo.png";

const AppBars = () => {
  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{ width: "100%", height: "8vw", backgroundColor: "#018CDD","@media screen and (min-width: 280px) and (max-width: 768px)": {height:"10vw"}}}
      >
        <Toolbar sx={{"@media screen and (min-width: 280px) and (max-width: 768px)": {height:"10vw"}}}>
          {/* Logo and Name */}
          <img
            src={image}
            alt="logo"
            style={{
              width: "6rem",
              paddingTop: "1rem", // Example style for the img element
            }}
          />
          <Box sx={{ flexGrow: 1, paddingTop: "1.2rem","@media screen and (min-width: 280px) and (max-width: 768px)":{display:"flex" , flexDirection:"column", width:"30px"} }}>
            <Typography
              variant="h6"
              style={{
                fontSize: "23px",
                fontFamily: "monospace",
                color: "#F5D431",
                fontWeight: "bold",
              }}
            >
              MiMo
            </Typography>
            <Divider
           
            flexItem
            sx={{
                width:"50px",
              backgroundColor: "#F5D431",
              height: "3px", // Adjusted height for better visibility
              // Adjusted margin for spacing
            }}
          />
            <Typography
              variant="h6"
              style={{
                fontSize: "23px",
                fontFamily: "monospace",
                color: "#F5D431",
                fontWeight: "bold",
              }}
            >
              MeMe
            </Typography>
          </Box>

          {/* Navigation buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              marginRight: "3rem",
              marginTop: "2rem",
            }}
          >
            <Button
              component={Link}
              to="/"
              style={{
                fontSize: "20px",

                backgroundColor: "#F5D431",
                color: "#000000",
                borderRadius: "10px",
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/dashboard"
              style={{
                fontSize: "20px",
                backgroundColor: "#F5D431",
                color: "#000000",
                borderRadius: "10px",
              }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/signup"
              style={{
                fontSize: "20px",
                backgroundColor: "#F57F31",
                color: "#000000",
                borderRadius: "10px",
              }}
            >
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBars;
