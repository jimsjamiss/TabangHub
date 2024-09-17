"use client";

import Image from 'next/image';
import { Container, Box, Typography, Button, Fade, Slide, Grow, Card, CardContent, CardMedia, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Landing() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true); // Triggers animation when the page loads
  }, []);

  return (
    <>
       {/* Search bar */}
       <form class="max-w-md mx-auto mt-5">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-900 dark:focus:ring-green-800">Search</button>
          </div>
      </form>

      {/* Welcome message */}
      <Container maxWidth="sm" sx={{ my: 4 }}>
        <Fade in={checked} timeout={1000}>
          <Box textAlign="center">
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to TabangHub
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Discover the best solutions for your business needs.
            </Typography>
          </Box>
        </Fade>

        <Slide direction="up" in={checked} timeout={1500}>
          <Box textAlign="center" sx={{ mt: 3 }}>
            <Typography variant="body1" color="textPrimary">
              With cutting-edge technology and expert support, we're here to help you grow.
            </Typography>
          </Box>
        </Slide>

        <Grow in={checked} timeout={2000}>
          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button variant="contained" color="primary" size="large">
              Get Started Today
            </Button>
          </Box>
        </Grow>
      </Container>

      {/* Services section */}
      <div style={{ backgroundColor: '#004d40', padding: '2rem' }}>
        <Container>
          <Typography variant="h3" component="h2" color="white" textAlign="center" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/image1.jpg"
                  alt="Donations"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)', color: 'white' }}>
                  <Typography variant="h5" component="div">
                    Donations
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Help us support those in need with your generous donations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/image2.jpg"
                  alt="Medical Assistance"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)', color: 'white' }}>
                  <Typography variant="h5" component="div">
                    Medical Assistance
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Access essential medical help and resources whenever you need.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/image3.jpg"
                  alt="First-Aid Seminar"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)', color: 'white' }}>
                  <Typography variant="h5" component="div">
                    First-Aid Seminar
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Join our informative seminars to learn essential first-aid skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Fade in={checked} timeout={2000}>
            <Box textAlign="center" sx={{ mt: 5 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <a href="/offers" style={{ color: 'white', textDecoration: 'none' }}>
                  Learn More About Our Services
                </a>
              </Button>
            </Box>
          </Fade>
        </Container>
      </div>
    </>
  );
}
