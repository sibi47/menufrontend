import React, { useState } from 'react';
import './adminpage.css';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Container,
  Box,
  IconButton,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { styled } from '@mui/system';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Nav2 from './Nav2';
import Nav3 from './Nav3';

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
  justifyContent: 'space-between',
  backgroundColor: '#f9f9f9',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(4), // Gap between the form and card
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: '50%',
  minWidth: '300px',
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const CardContainer = styled(Box)(({ theme }) => ({
  width: '45%',
  minWidth: '300px',
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const MenuItems = ({ items, onDelete, onEdit }) => (
  <CardContainer>
    <Typography variant="h4" component="h2" gutterBottom>
      Items Added
    </Typography>
    {items.map((item) => (
      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <Typography variant="h6" component="h3">
            {item.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Category: {item.category}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Price: {item.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: {item.description}
          </Typography>
        </div>
        {item.image && (
          <img src={item.image} alt={item.name} style={{ width: '150px', height: 'auto' }} />
        )}
        <div>
          <IconButton onClick={() => onEdit(item.id)} color="primary">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(item.id)} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    ))}
  </CardContainer>
);

function Adminpage() {
  const [category, setCategory] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [vegStatus, setVegStatus] = useState('');
  const [link, setLink] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddNewCategory = () => {
    setShowNewCategoryInput(true);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory.trim()]);
      setCategory(newCategory.trim());
      setNewCategory('');
      setShowNewCategoryInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: editingItemId || Math.random(),
      category,
      name,
      price,
      description,
      image,
      vegStatus,
      link,
      isAvailable,
    };

    if (editingItemId) {
      setMenuItems(menuItems.map((item) => (item.id === editingItemId ? newItem : item)));
    } else {
      setMenuItems([...menuItems, newItem]);
    }

    setEditingItemId(null);
    setName('');
    setPrice('');
    setDescription('');
    setCategory('');
    setVegStatus('');
    setLink('');
    setIsAvailable(false);
    setImage(null);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = menuItems.find(item => item.id === id);
    if (itemToEdit) {
      setCategory(itemToEdit.category);
      setName(itemToEdit.name);
      setPrice(itemToEdit.price);
      setDescription(itemToEdit.description);
      setImage(itemToEdit.image);
      setVegStatus(itemToEdit.vegStatus);
      setLink(itemToEdit.link);
      setIsAvailable(itemToEdit.isAvailable);
      setEditingItemId(id);
    }
  };

  const customCategories = [
   
  ];

  return (
    <div>
        <Nav2/>
        <Nav3/>
    <CustomContainer maxWidth="lg">
        
      <InnerContainer>
        <FormBox>
          <Typography variant="h4" component="h1" gutterBottom>
            {editingItemId ? 'Edit Menu Item' : 'Add Menu Item'}
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                {customCategories.concat(categories).map((cat, index) => (
                  <MenuItem key={index} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
              {showNewCategoryInput ? (
                <TextField
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  label="New Category"
                  variant="outlined"
                  sx={{ marginTop: '10px' }}
                />
              ) : (
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleAddNewCategory}
                  sx={{ marginTop: '10px' }}
                >
                  Add New Category
                </CustomButton>
              )}
              {showNewCategoryInput && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddCategory}
                  sx={{ marginTop: '10px' }}
                >
                  Add
                </Button>
              )}
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: 1 }}
            /><FormControl fullWidth margin="normal">
            <input
              accept="image/*"
              type="file"
                id="image-upload"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload">
                <CustomButton variant="contained" component="span" fullWidth startIcon={<AddPhotoAlternateIcon />}>
                  Upload Image
                </CustomButton>
              </label>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Veg/Non-Veg</InputLabel>
              <Select
                value={vegStatus}
                onChange={(e) => setVegStatus(e.target.value)}
                label="Veg/Non-Veg"
              >
                <MenuItem value="veg">Veg</MenuItem>
                <MenuItem value="non-veg">Non-Veg</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              label="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAvailable}
                  onChange={(e) => setIsAvailable(e.target.checked)}
                  color="primary"
                />
              }
              label="Is Available ?"
            />
            <CustomButton variant="contained" color="primary" type="submit" fullWidth>
              Add Menu
            </CustomButton>
          </form>
        </FormBox>
        <MenuItems items={menuItems} />
      </InnerContainer>
    </CustomContainer>
    </div>
  );
}

export default Adminpage;
