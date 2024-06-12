import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import QrCodeIcon from '@mui/icons-material/QrCode'; // Correct import
import ReceiptIcon from '@mui/icons-material/Receipt'; // Correct import

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f9f9f9', // off-white color
  color: theme.palette.text.primary,
}));

const Nav3 = () => {
  return (
    <div>
      <CustomAppBar position="static">
        <Toolbar>
          <Box sx={{ display: '', flexGrow: 1 }}>
            <Button color="inherit" style={{ fontSize: "20px" }}>QrMenu</Button>
            <Button color="inherit" style={{ fontSize: "20px" }}>Place</Button>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Link to="/"><Button color="inherit" style={{ fontSize: "20px", color: "black" }}>Logout</Button></Link>
          </Box>
        </Toolbar>
      </CustomAppBar>
      
      <CustomAppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1}}>
            <IconButton color="inherit" component={Link} to="/qrcode">
              <QrCodeIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/bill">
              <ReceiptIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </CustomAppBar>
    </div>
  );
};

export default Nav3;
