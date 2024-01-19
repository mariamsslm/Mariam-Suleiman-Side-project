import {
    Box,
    Button,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography,
    InputLabel,
    FormControl,
  } from "@mui/material";
  import useApi from "../hooks/useApi";
  import { useState } from "react";
  import { Link , useNavigate } from "react-router-dom";
  import { toast } from "react-toastify";
  import axiosInstance from "../utils/axiosInstance";


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const Signup = () => {
    const [loading, setLoading] = useState(false);
    const { apiCall } = useApi();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      role: "",
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
      setLoading(true)
      try {
        const response = await axiosInstance.post("/user/signup", formData);
        console.log(response)
        toast.success("Sign Up Successfuly",response.message);
        navigate("/")
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
        } else {
          toast.error(error.message);
        }
        setLoading(false);
      }
  
      setFormData({
        username: "",
        email: "",
        password: "",
        role: "",
      });
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
                <Typography variant="h4">Register</Typography>
                <Typography variant="body2">
                  Already have an account? <Link to="/login">Log in</Link>
                </Typography>
              </Stack>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="username"
                    value={formData.username}
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
                  <FormControl
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#F57F31",
                        },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#F57F31",
                      },
                    }}
                  >
                    <InputLabel id="demo-multiple-name-label">Role</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      name="role"
                      input={<OutlinedInput label="Name" />}
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      MenuProps={MenuProps}
                      required
                    >
                      <MenuItem value={"creator"}>Creator</MenuItem>
                    </Select>
                  </FormControl>
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
  };
  
  export default Signup;