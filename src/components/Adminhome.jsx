import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import Nav2 from './Nav2';
import { Link } from 'react-router-dom';

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: '700px',
  margin: '100px auto',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const CardContentBox = styled(Box)(({ theme }) => ({
  maxWidth: '80%',
}));

const CardImage = styled('img')(({ theme }) => ({
  maxWidth: '35%',
  borderRadius: theme.shape.borderRadius,
}));

const Adminhome = () => {
  return (
    <div>
      <Nav2 />
      <Container>
        <CustomCard>
          <CardContentBox>
            <Typography variant="h4" component="h1" gutterBottom>
              Create Your Own Menu
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              A smart way to share your digital menu in a QR Code with your customers.
            </Typography>
            <CardActions>
              <Link to="/place"><Button variant="contained" color="primary">
                Click Here
              </Button></Link>
            </CardActions>
          </CardContentBox>
          <CardImage src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg" alt="Menu" />
        </CustomCard>
      </Container>
    </div>
  );
};

export default Adminhome;
