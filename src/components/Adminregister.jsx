import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Nav1 from './Nav1'; // Import your navbar component here
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../Apis'; // Import the register function

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',
  minWidth:"210vh",
  backgroundColor: '#f9f9f9',
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const Adminregister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(username, password);
      console.log('Registration successful:', response);
      // Redirect to login or another page after successful registration
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <Nav1 /> {/* Render your navbar component here */}
      <CustomContainer maxWidth="sm">
        <FormBox>
          <Typography variant="h4" component="h1" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <CustomButton
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: 2 }}
            >
              Submit
            </CustomButton>
          </form>
        </FormBox>
      </CustomContainer>
    </div>
  );
};

export default Adminregister;
