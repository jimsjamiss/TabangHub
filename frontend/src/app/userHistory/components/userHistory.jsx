"use client";

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Paper, Divider, Fade, Slide } from '@mui/material';


export default function UserHistory() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true); // Trigger animations when component mounts
  }, []);

  return (
    <>      
      <Container maxWidth="md" style={{ padding: '2rem', marginTop: '2rem' }}>
        {/* Page Title with Slide Transition */}
        <Slide direction="down" in={checked} timeout={1000}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" component="h1" gutterBottom>
              Your Recent Activities
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Here’s a summary of your recent donations and volunteer programs.
            </Typography>
          </Box>
        </Slide>

        {/* Recent Donations Section */}
        <Fade in={checked} timeout={1500}>
          <Box mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              Recent Donations
            </Typography>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="body1" component="p">
                <strong>Date:</strong> August 15, 2024
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Amount:</strong> $100
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Organization:</strong> Helping Hands Foundation
              </Typography>
            </Paper>
            <Divider style={{ margin: '1rem 0' }} />
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="body1" component="p">
                <strong>Date:</strong> July 30, 2024
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Amount:</strong> $50
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Organization:</strong> Children's Charity
              </Typography>
            </Paper>
          </Box>
        </Fade>

        {/* Recent Volunteer Programs Section */}
        <Slide direction="up" in={checked} timeout={1500}>
          <Box mb={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              Recent Volunteer Programs
            </Typography>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="body1" component="p">
                <strong>Date:</strong> August 10, 2024
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Program:</strong> Community Cleanup Drive
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Location:</strong> Central Park
              </Typography>
            </Paper>
            <Divider style={{ margin: '1rem 0' }} />
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="body1" component="p">
                <strong>Date:</strong> July 20, 2024
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Program:</strong> Soup Kitchen Volunteering
              </Typography>
              <Typography variant="body1" component="p">
                <strong>Location:</strong> Downtown Community Center
              </Typography>
            </Paper>
          </Box>
        </Slide>
      </Container>
    </>
  );
}
