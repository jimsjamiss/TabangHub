"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { styled } from '@mui/system';
import { Grow } from '@mui/material';

// Styled component for card hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows= 6,
  },
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', 
}));

// Custom background styling
const BackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to bottom right, #f0f4f7, #c8d6e5)', 
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
}));

const CharityList = () => {
  const charities = [
    { id: 1, name: "STC Foundation", description: "Helps with education for underprivileged children.", image: "stc-org.jpg" },
    { id: 2, name: "Healthy ka pa ba Organization", description: "Provides healthcare facilities to remote areas.", image: "org.jpg" },
    { id: 3, name: "Smile ka din Foundation", description: "Helping People to bring back their smiles.", image: "cse-org.jpg" },
    { id: 4, name: "'Nigero, mina san!'", description: "Helping people to be white.", image: "charity-org.jpg" }
  ];

  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharities, setFilteredCharities] = useState(charities);
  const [openModal, setOpenModal] = useState(false); // State to manage modal visibility
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');


  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = charities.filter(charity =>
      charity.name.toLowerCase().includes(value)
    );
    setFilteredCharities(filtered);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDonateClick = (charity) => {
    setSelectedCharity(charity); 
    setOpenModal(true); 
  };

  const handleModalClose = () => {
    setOpenModal(false); 
    setDonationAmount(''); 
  };

  const handleDonateSubmit = () => {
    alert(`Thank you for donating ${donationAmount} to ${selectedCharity.name}!`);
    handleModalClose(); 
  };

  return (
    <>
      <BackgroundBox>
        <Container maxWidth="lg" sx={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: 3 }}>
          {/* Search Bar */}
          <TextField
            fullWidth
            label="Search Charity"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
          />

          {/* Scrollable Box for Charity List */}
          <Box
            sx={{
              height: 400, 
              overflowY: 'auto',
              paddingRight: 2
            }}
          >
            <Grid container spacing={3}>
              {filteredCharities.map((charity, index) => (
                <Grow
                  in={visible}
                  timeout={500 + index * 200}
                  key={charity.id}
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                      {/* CardMedia for adding the image */}
                      <CardMedia
                        component="img"
                        height="200"
                        image={charity.image} 
                        alt={charity.name}
                        sx={{
                          objectFit: 'cover', 
                          width: '100%', 
                          height: 200 
                        }}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                          {charity.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {charity.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => handleDonateClick(charity)} 
                          sx={{
                            transition: 'background-color 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: '#ff7043',
                            },
                          }}
                        >
                          Donate
                        </Button>
                      </CardActions>
                    </StyledCard>
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </Box>
        </Container>
      </BackgroundBox>

      {/* Donation Modal */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Donate to {selectedCharity?.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Donation Amount"
            type="number"
            fullWidth
            variant="outlined"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDonateSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CharityList;
