"use client";
import React, { useState } from 'react';
import { TextField, Checkbox, Button, Box, Container, Typography, Grid, Link, IconButton, InputAdornment } from '@mui/material';
import { Login as LoginIcon, Facebook, Apple } from '@mui/icons-material'; // Importing icons

export default function Home() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#004d40', // Background color
          padding: '2rem',
          borderRadius: '10px',
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 4 }}>
          <img src="/log.png" alt="logo pic" width={150} height={150} />
        </Box>

        {/* Title */}
        <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
          Login
        </Typography>

        {/* Email input */}
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Your email"
          name="email"
          autoComplete="email"
          autoFocus
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' } } }}
        />

        {/* Password input */}
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Your password"
          type="password"
          id="password"
          autoComplete="current-password"
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' } } }}
        />

        {/* Remember me & Forgot password */}
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs>
            <Checkbox sx={{ color: 'white' }} />
            <Typography variant="body2" sx={{ color: 'white', display: 'inline' }}>
              Remember me
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/forgotpass" variant="body2" sx={{ color: 'white'}}>
              Forgot password?
            </Link>
          </Grid>
        </Grid>

        {/* Login Button with Icon */}
        <Button
          component= 'a'
          href='/dashboard'
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#1DB954',
            '&:hover': { backgroundColor: '#1ED760' },
            color: 'white',
          }}
          startIcon={<LoginIcon />} // Adding login icon
        >
          Login
        </Button>

        {/* Social Login Buttons */}
        <Button
          startIcon={<Facebook />}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#3b5998',
            color: 'white',
            mb: 2,
            '&:hover': { backgroundColor: '#3b5998' },
          }}
          href="https://www.facebook.com/"
        >
          Login with Facebook
        </Button>
        <Button
          startIcon={<Apple />}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: 'white',
            '&:hover': { backgroundColor: '#333' },
          }}
          href="https://appleid.apple.com/sign-in"
        >
          Login with Apple
        </Button>

        {/* Registration Link */}
        <Typography variant="body2" sx={{ color: 'white', mt: 2 }}>
          Not registered?{' '}
          <Link href="/registration" sx={{ color: '#1ED760' }}>
            Create account
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}