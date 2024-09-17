"use client";
import React, { useState } from 'react';
import { TextField, Grid, Button, Container, InputAdornment, Box } from '@mui/material';
import { AccountCircle, Email, Lock, Phone, Send } from '@mui/icons-material';

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false); // Reset after showing the animation
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Box
        sx={{
          boxShadow: 3,
          padding: 4,
          borderRadius: 2,
          transition: 'transform 0.3s',
          backgroundColor: '#004d40', // Dark background for contrast
          '&:hover': { transform: 'scale(1.02)', backgroundColor: '#34495E' },
        }}
      >
        <h2 style={{ textAlign: 'center', fontWeight: 700, marginBottom: '20px', color: 'white' }}>
          Create Account
        </h2>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Username"
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
              label="Email"
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

          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
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

          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
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
