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

const SeminarList = () => {
  const seminars = [
    { id: 1, name: "Basic First Aid Training", description: "Learn essential first aid skills to help others in emergency situations.", image: "bf-1.jpg" },
    { id: 2, name: "Basic Life Support (BLS) Certification", description: "Get certified in Basic Life Support, including CPR techniques.", image: "bf-2.jpg" },
    { id: 3, name: "Advanced First Aid for Outdoors", description: "Advanced first aid techniques for outdoor enthusiasts and professionals.", image: "bf-3.jpg" },
    { id: 4, name: "First Responder Training", description: "Hands-on training for emergency response and first aid situations.", image: "bf-4.jpg" }
  ];

  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSeminars, setFilteredSeminars] = useState(seminars);
  const [openModal, setOpenModal] = useState(false); // State to manage modal visibility
  const [selectedSeminar, setSelectedSeminar] = useState(null);


  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = seminars.filter(seminar =>
      seminar.name.toLowerCase().includes(value)
    );
    setFilteredSeminars(filtered);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleJoinClick = (seminar) => {
    setSelectedSeminar(seminar); 
    setOpenModal(true); 
  };

  const handleModalClose = () => {
    setOpenModal(false); 
  };

  const handleJoinSubmit = () => {
    alert(`You have successfully joined the ${selectedSeminar.name} seminar!`);
    handleModalClose(); 
  };

  return (
    <>
      <BackgroundBox>
        <Container maxWidth="lg" sx={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: 3 }}>
          {/* Search Bar */}
          <TextField
            fullWidth
            label="Search Seminars"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
          />

          {/* Scrollable Box for Seminar List */}
          <Box
            sx={{
              height: 400, 
              overflowY: 'auto',
              paddingRight: 2
            }}
          >
            <Grid container spacing={3}>
              {filteredSeminars.map((seminar, index) => (
                <Grow
                  in={visible}
                  timeout={500 + index * 200}
                  key={seminar.id}
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                      {/* CardMedia for adding the image */}
                      <CardMedia
                        component="img"
                        height="200"
                        image={seminar.image} 
                        alt={seminar.name}
                        sx={{
                          objectFit: 'cover', 
                          width: '100%', 
                          height: 200 
                        }}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                          {seminar.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {seminar.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => handleJoinClick(seminar)} 
                          sx={{
                            transition: 'background-color 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: '#ff7043',
                            },
                          }}
                        >
                          Join Seminar
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

      {/* Join Modal */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Join {selectedSeminar?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to join the {selectedSeminar?.name} seminar?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleJoinSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SeminarList;
