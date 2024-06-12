import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f9f9f9', // off-white color
  color: theme.palette.text.primary,
}));

const Nav2 = () => {
  return (
    <CustomAppBar position="fixed"> {/* Change position to fixed */}
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" style={{ fontSize: "20px" }}>QrMenu</Button>
         <Link to="/place"><Button color="inherit" style={{ fontSize: "20px",color:"black" }}>Place</Button></Link> 
         <Link to="#"><Button color="inherit" style={{ fontSize: "20px",color:"black" }}>Daily Log</Button></Link> 
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit" style={{ fontSize: "20px", color: "black" }}>Logout</Button>
          </Link>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Nav2;
