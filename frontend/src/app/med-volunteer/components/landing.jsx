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

const MedicalProgramList = () => {
  const programs = [
    { id: 1, name: "Community Health Outreach", description: "Aiding underserved communities with free health check-ups and essential medical services.", image: "medical-1.jpg" },
    { id: 2, name: "Remote Area Medical Volunteers", description: "Providing free medical, dental, and vision care in remote areas.", image: "med-2.png" },
    { id: 3, name: "Medical Relief for Refugees", description: "Supporting refugee camps with essential medical supplies and volunteer services.", image: "med-3.jpg" },
    { id: 4, name: "Elderly Care Assistance Program", description: "Volunteers providing medical and emotional care to senior citizens.", image: "med-4.jpg" }
  ];

  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [openModal, setOpenModal] = useState(false); // State to manage modal visibility
  const [selectedProgram, setSelectedProgram] = useState(null);


  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = programs.filter(program =>
      program.name.toLowerCase().includes(value)
    );
    setFilteredPrograms(filtered);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleJoinClick = (program) => {
    setSelectedProgram(program); 
    setOpenModal(true); 
  };

  const handleModalClose = () => {
    setOpenModal(false); 
  };

  const handleJoinSubmit = () => {
    alert(`Thank you for joining the ${selectedProgram.name} program!`);
    handleModalClose(); 
  };

  return (
    <>
      
      <BackgroundBox>
        <Container maxWidth="lg" sx={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: 3 }}>
          {/* Search Bar */}
          <TextField
            fullWidth
            label="Search Medical Programs"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
          />

          {/* Scrollable Box for Medical Program List */}
          <Box
            sx={{
              height: 400, 
              overflowY: 'auto',
              paddingRight: 2
            }}
          >
            <Grid container spacing={3}>
              {filteredPrograms.map((program, index) => (
                <Grow
                  in={visible}
                  timeout={500 + index * 200}
                  key={program.id}
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                      {/* CardMedia for adding the image */}
                      <CardMedia
                        component="img"
                        height="200"
                        image={program.image} 
                        alt={program.name}
                        sx={{
                          objectFit: 'cover', 
                          width: '100%', 
                          height: 200 
                        }}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                          {program.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {program.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => handleJoinClick(program)} 
                          sx={{
                            transition: 'background-color 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: '#ff7043',
                            },
                          }}
                        >
                          Join & Volunteer
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
        <DialogTitle>Join {selectedProgram?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to join the {selectedProgram?.name} as a volunteer?
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

export default MedicalProgramList;
