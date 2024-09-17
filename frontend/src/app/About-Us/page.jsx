"use client";
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Paper, Fade, Slide, Button, IconButton } from '@mui/material';
import Image from 'next/image'; // Import for optimized images
import { LinkedIn, Email } from '@mui/icons-material'; // Import social media icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function AboutUs() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true); // Trigger animations when the component mounts
  }, []);

  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '2rem' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Fade in={checked} timeout={1000}>
          <Box textAlign="center" mb={5} style={{ backgroundColor: '#009688', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6">
              Empowering communities through dedicated volunteering and support
            </Typography>
          </Box>
        </Fade>

        {/* Our Mission Section */}
        <Slide direction="up" in={checked} timeout={1500}>
          <Box mb={5} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#e0f2f1' }}>
              <Typography variant="body1">
                Our mission is to create lasting positive change in our communities by fostering
                volunteerism and supporting impactful initiatives. We believe that by coming together,
                we can address pressing needs and build a better future for everyone.
              </Typography>
            </Paper>
          </Box>
        </Slide>

        {/* Our Team Section */}
        <Slide direction="left" in={checked} timeout={1500}>
          <Box mb={5} style={{ backgroundColor: '#f1f8e9', padding: '2rem', borderRadius: '8px' }}>
            <Typography variant="h4" component="h2" gutterBottom textAlign="center">
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {/* Team Member 1 */}
              <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#fff', maxWidth: '300px' }}>
                  <Image
                    src="/peter.jpg" // Replace with actual image path
                    alt="Team Member 1"
                    width={150}
                    height={150}
                    style={{ borderRadius: '50%', margin: '0 auto' }} // Center image
                  />
                  <Typography variant="h6" component="h3" mt={2}>
                    Peter "D" Griffin
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Director of Programs
                  </Typography>
                </Paper>
              </Grid>
              {/* Team Member 2 */}
              <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#fff', maxWidth: '300px' }}>
                  <Image
                    src="/quagmire.jpg" // Replace with actual image path
                    alt="Team Member 2"
                    width={150}
                    height={150}
                    style={{ borderRadius: '50%', margin: '0 auto' }} // Center image
                  />
                  <Typography variant="h6" component="h3" mt={2}>
                    Glenn "Giggity" Quagmire
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Volunteer Coordinator
                  </Typography>
                </Paper>
              </Grid>
              {/* Team Member 3 */}
              <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#fff', maxWidth: '300px' }}>
                  <Image
                    src="/cleaveland.jpg" // Replace with actual image path
                    alt="Team Member 3"
                    width={150}
                    height={150}
                    style={{ borderRadius: '50%', margin: '0 auto' }} // Center image
                  />
                  <Typography variant="h6" component="h3" mt={2}>
                    Cleaveland "Nigga" Brown 
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Outreach Specialist
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Slide>

        {/* Contact Us Section */}
        <Fade in={checked} timeout={2000}>
          <Box textAlign="center" mt={5} style={{ backgroundColor: '#c8e6c9', padding: '2rem', borderRadius: '8px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Have questions or want to get involved? Reach out to us!
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" size="large" style={{ marginRight: '1rem' }}>
                Contact Us
              </Button>
              <div>
                <IconButton
                  component="a"
                  href="mailto:info@example.com" // Replace with your email
                  aria-label="Email"
                  color="primary"
                >
                  <Email />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/company/example" // Replace with your LinkedIn URL
                  aria-label="LinkedIn"
                  color="primary"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </div>
            </Box>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
