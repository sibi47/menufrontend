import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import {Link} from 'react-router-dom';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f9f9f9', // off-white color
  color: theme.palette.text.primary,
}));

const Nav1 = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Box sx={{ display: '', flexGrow: 1 }}>
          <Button color="inherit" style={{fontSize:"20px"}}>QrMenu</Button>
          <Button color="inherit"style={{fontSize:"20px"}}>Place</Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Link to="/"><Button color="inherit"style={{fontSize:"20px",color:"black"}}>Login</Button></Link> 
          <Link to="/register"><Button color="inherit"style={{fontSize:"20px",color:"black"}}>Register</Button></Link>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Nav1;
