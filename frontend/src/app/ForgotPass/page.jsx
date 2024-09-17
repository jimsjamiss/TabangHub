"use client";

import React, { useState } from 'react';
import { TextField, Grid, Button, Container, Box, InputAdornment, Typography } from '@mui/material';
import { Email, Phone, Send } from '@mui/icons-material';

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false); // Reset after showing the animation
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        sx={{
          boxShadow: 3,
          padding: 4,
          borderRadius: 2,
          transition: 'transform 0.3s, background-color 0.3s',
          backgroundColor:  '#004d40', // Dark background for contrast
          '&:hover': { transform: 'scale(1.02)', backgroundColor: '#34495E' },
        }}
      >
        {/* Header */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 700, color: 'white' }}
        >
          Forgot Password
        </Typography>

        {/* Divider Line */}
        <Box
          sx={{
            height: '2px',
            backgroundColor: '#E0E0E0',
            mb: 3,
          }}
        />

        {/* Instruction */}
        <Typography
          variant="body2"
          sx={{ color: 'white', textAlign: 'center', mb: 4 }}
        >
          Please enter your email address or mobile number to search for your account.
        </Typography>

        <Grid container spacing={3}>
          {/* Mobile Number Field */}
          <Grid item xs={12}>
            <TextField
              label="Mobile Number"
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

          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              label="Email Address"
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

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button
                variant="contained"
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
    </Container>
  );
}
