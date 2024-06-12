import React, { useState } from 'react';
import { Card, CardContent, Typography, Modal, Box, TextField, Container, Grid, IconButton, Button } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Nav2 from './Nav2';

const CustomCard = styled(Card)(({ theme }) => ({
  width: '300px', // Fixed width for consistent sizing
  height: '350px', // Fixed height for consistent sizing
  margin: '80px', // Margin for spacing between cards
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  boxShadow: theme.shadows[5],
  position: 'relative', // Position relative for absolute positioning of delete button
}));

const AddPlaceCard = styled(Card)(({ theme }) => ({
  width: '200px', // Smaller width for the Add Place card
  height: '150px', // Smaller height for the Add Place card
  margin: '80px', // Margin for spacing between cards
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  boxShadow: theme.shadows[5],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CustomModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalBox = styled(Box)(({ theme }) => ({
  width: '400px',
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const Adminplace = () => {
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState('');
  const [image, setImage] = useState(null);
  const [places, setPlaces] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlace = {
      name: place,
      image: image,
    };
    setPlaces([...places, newPlace]);
    setPlace('');
    setImage(null);
    handleClose();
  };

  const handleDelete = (index) => {
    setPlaces(places.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Nav2 />
      <br></br>
      <Container>
        <Grid container justifyContent="center">
          <AddPlaceCard onClick={handleOpen}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Add Place
              </Typography>
            </CardContent>
          </AddPlaceCard>

          <CustomModal open={open} onClose={handleClose}>
            <ModalBox>
              <Typography variant="h6" component="h2" gutterBottom>
                Enter Place Details
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Place Name"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  type="file"
                  onChange={handleImageChange}
                  variant="outlined"
                />
                <Button // Use Button instead of CustomButton
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Submit
                </Button>
              </form>
            </ModalBox>
          </CustomModal>

          {places.map((place, index) => (
            <CustomCard key={index}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {place.name}
                </Typography>
                {place.image && (
                  <Link to="/itempage">
                    <img src={place.image} alt={place.name} style={{ width: '100%', height: '200px', objectFit: 'cover', marginTop: '20px', cursor: 'pointer' }} />
                  </Link>
                )}
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(index)}
                  sx={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </CustomCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Adminplace;
