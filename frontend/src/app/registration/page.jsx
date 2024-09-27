"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
  TextField,
  Grid,
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  InputAdornment,
  Button,
  Modal,
  Fade,
} from '@mui/material';
import { AccountCircle, Email, Lock, Phone, Send } from '@mui/icons-material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Register() {
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCardClick = (selectedRole) => {
    setRole(selectedRole);
    setOpenModal(true); // Open the modal when a card is clicked
  };

  const handleClose = () => {
    setOpenModal(false);
    setRole(''); // Reset role when closing
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false); // Reset after showing the animation
    }, 2000);
    handleClose(); // Close the modal after submitting
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card
            onClick={() => handleCardClick('Volunteer')}
            sx={{
              height: 300,
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
              },
              overflow: 'hidden',
            }}
          >
            <Image 
              src="/diyata.jpg" 
              alt="Volunteer"
              layout="fill"
              objectFit="cover"
              style={{ objectFit: 'cover', zIndex: 1 }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 2,
              }}
            >
              <Typography variant="h5" component="div" sx={{ color: 'white' }}>
                Volunteer Account
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            onClick={() => handleCardClick('Organization')}
            sx={{
              height: 300,
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
              },
              overflow: 'hidden',
            }}
          >
            <Image 
              src="/org-pic.jpg" 
              alt="Organization"
              layout="fill"
              objectFit="cover"
              style={{ objectFit: 'cover', zIndex: 1 }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 2,
              }}
            >
              <Typography variant="h5" component="div" sx={{ color: 'white' }}>
                Organization Account
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Box textAlign="center">
          <Button
            variant="contained"
            component='a'
            href='/'
            color="success"
            size="large"
            onClick={handleSubmit}
            startIcon={<ArrowBackOutlinedIcon />}
            sx={{
              mt: 3,
              color: 'white',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#218c74',
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Grid>

      {/* Modal for Registration Form */}
      <Modal
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              boxShadow: 3,
              padding: 4,
              borderRadius: 2,
              mt: 3,
              backgroundColor: '#004d40',
              width: '90%',
              maxWidth: '600px',
            }}
          >
            <h2 style={{ textAlign: 'center', fontWeight: 700, marginBottom: '20px', color: 'white' }}>
              Create {role} Account
            </h2>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label={role + " name"}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label={role + " Email"}
                  variant="outlined"
                  fullWidth
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Phone Number (09**-***-****)"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    component='a'
                    href='/skillset'
                    color="success"
                    size="large"
                    onClick={handleSubmit}
                    startIcon={<Send />}
                    sx={{
                      mt: 3,
                      color: 'white',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#218c74',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
}
