// Login.js
// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import useApi from '../hooks/useApi';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const { setUser, loading } = useContext(AuthContext);
//   const { apiCall } = useApi();
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Show loading toast
//       toast.info('Logging in...');
      
//       const response = await apiCall({
//         url: '/user/login',
//         method: 'post',
//         data: loginData,
//       });

//       // Assuming the response has a user property
//       setUser(response.data.user);

//       // Show success toast
//       toast.success('Login successful!');
//     } catch (error) {
//       console.error('Login error:', error);

//       // Show error toast
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={loginData.username}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;






import React, { useState, useContext, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import {  Link , useNavigate} from 'react-router-dom';
import { Button, Stack, TextField, Typography, Box } from '@mui/material';

const LoginForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const{user ,checkUser} = useContext(AuthContext)
  const {fetchUserData} = useContext(AuthContext)
  const { apiCall } = useApi();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email || !formData.password) {
      toast.error("Insert Email or Password");
      setLoading(false);
      
      return;
    }

    setFormData({
      email: "",
      password: "",
    });

    try {
      await apiCall({
        url: "/user/login",
        method: "post",
        data: {
          email: formData.email,
          password: formData.password,
        },
      });

      await fetchUserData();
      toast.success("Logged in Successfully!");
      setLoading(false);
      navigate("/d");
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const { errors } = error.response.data;

        if (errors.email) {
          const emailError = errors.email;
          toast.error(emailError);
        }
        if (errors.password) {
          const passwordError = errors.password;
          toast.error(passwordError);
        }
      }
      setLoading(false);
    }
  };
  
  return (
    <>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Log In</Typography>
              <Typography variant="body2">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </Typography>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#F57F31",
                      },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#F57F31",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#F57F31",
                      },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#F57F31",
                    },
                  }}
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: "#F5D431",
                  "&:hover": {
                    backgroundColor: "#F57F31",
                  },
                }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );

    }
  
  



export default LoginForm;
