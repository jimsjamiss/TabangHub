import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { LinkedIn, Facebook, Twitter, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#fff',
        padding: '2rem 0',
        mt: 'auto',
        borderTop: '1px solid #00796b'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a non-profit organization dedicated to making a difference through volunteerism and community engagement.
            </Typography>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link href="/about-us" color="inherit" underline="hover" display="block">
              About Us
            </Link>
            <Link href="/offers" color="inherit" underline="hover" display="block">
              Services
            </Link>
            <Link href="/volunteers" color="inherit" underline="hover" display="block">
              Volunteer
            </Link>
          </Grid>
          
          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <a href="mailto:tabanghub69@gmail.com" style={{ color: '#fff' }}>tabanghub69@gmail.com</a>
            </Typography>
            <Typography variant="body2">
              Phone: +63 (969) 420-6006
            </Typography>
          </Grid>
          
          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              aria-label="Facebook"
              color="inherit"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.twitter.com"
              aria-label="Twitter"
              color="inherit"
              target="_blank"
            >
              <Twitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              color="inherit"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:info@example.com"
              aria-label="Email"
              color="inherit"
            >
              <Email />
            </IconButton>
          </Grid>
        </Grid>
        
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} TabangHub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
