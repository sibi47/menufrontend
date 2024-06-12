import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import Nav2 from './Nav2';
import { styled } from '@mui/system';

const CustomCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  width: '300px', // Adjust width as needed
  flexGrow: 1,
  marginTop:"70px"
}));

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      tableNo: 5,
      items: [
        { name: 'Pizza', amount: 10 },
        { name: 'Burger', amount: 5 },
      ],
      totalAmount: 15,
    },
    {
      id: 2,
      tableNo: 8,
      items: [
        { name: 'Pasta', amount: 12 },
        { name: 'Salad', amount: 6 },
      ],
      totalAmount: 18,
    },
    {
      id: 3,
      tableNo: 3,
      items: [
        { name: 'Steak', amount: 25 },
        { name: 'Fries', amount: 7 },
      ],
      totalAmount: 32,
    },
    
   
  ]);

  const handleConfirmOrder = (orderId) => {
    // Implement the confirm order functionality here
    console.log(`Order ${orderId} confirmed`);
  };

  const handleCancelOrder = (orderId) => {
    // Implement the cancel order functionality here
    console.log(`Order ${orderId} cancelled`);
  };

  return (
    <div>
      <Nav2 />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {orders.map((order) => (
            <CustomCard key={order.id}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Table No: {order.tableNo}
                </Typography>
                <Divider sx={{ margin: '10px 0' }} />
                <List>
                  {order.items.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item.name} />
                      <Typography variant="body2">Rs.{item.amount.toFixed(2)}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ margin: '10px 0' }} />
                <Typography variant="h6" component="div">
                  Total Amount: Rs.{order.totalAmount.toFixed(2)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', gap: '10px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleConfirmOrder(order.id)}
                  >
                    Confirm Payment
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel Order
                  </Button>
                </Box>
              </CardContent>
            </CustomCard>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Orders;
