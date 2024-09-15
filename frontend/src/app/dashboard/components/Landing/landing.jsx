"use client";

import Image from 'next/image';
import { Container, Box, Typography, Button, Fade, Slide, Grow } from '@mui/material';
import React, { useState,useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


export default function Landing(){


const [checked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(true); // Triggers animation when the page loads
    }, []);

//carousel design
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};    
  
return(
  <>
<div className="bg-white mt-10" style={{ minHeight: '50vh', padding: '2rem' }}>
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
      <Container maxWidth="sm">
        {/* Section 1: Text with Fade Transition */}
        <Fade in={checked} timeout={1000}>
          <Box textAlign="center" mt={5}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to TabangHub
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Discover the best solutions for your business needs.
            </Typography>
          </Box>
        </Fade>

        {/* Section 2: Text with Slide Transition */}
        <Slide direction="up" in={checked} timeout={1500}>
          <Box textAlign="center" mt={3}>
            <Typography variant="body1" color="textPrimary">
              With cutting-edge technology and expert support, we're here to help you grow.
            </Typography>
          </Box>
        </Slide>

        {/* Section 3: Call to Action with Grow Transition */}
        <Grow in={checked} timeout={2000}>
          <Box textAlign="center" mt={5}>
            <Button variant="contained" color="primary" size="large">
              Get Started Today
            </Button>
          </Box>
        </Grow>
      </Container>
    </div>

    <div className='bg-green-700' style={{ minHeight: '50vh', padding: '2rem' }}>
      <Container maxWidth="lg">
        {/* Section Title with Fade Transition */}
        <Fade in={checked} timeout={1000}>
          <Box textAlign="center" mb={5}>
            <Typography variant="h3" component="h2" style={{ color: '#fff' }} gutterBottom>
              What We Offer
            </Typography>
            <Typography variant="subtitle1" style={{ color: '#ccc' }}>
              Explore our services and solutions tailored to your needs
            </Typography>
          </Box>
        </Fade>

        {/* Carousel */}
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <Box textAlign="center">
            <Typography variant="h3" color="white" mt={2}>
                Donations
            </Typography>
              <Image
                src="/image1.jpg" // Make sure to replace with actual image paths
                alt="Offer 1"
                width={1500}
                height={100}
                style={{ borderRadius: '10px' }}
              />             
            </Box>
          </div>

          {/* Slide 2 */}
          <div>
            <Box textAlign="center">
            <Typography variant="h3" color="white" mt={2}>
                Medical Assistance
            </Typography>
              <Image
                src="/image2.jpg"
                alt="Offer 2"
                width={1500}
                height={100}
                style={{ borderRadius: '10px' }}
              />
            </Box>
          </div>

          {/* Slide 3 */}
          <div>
            <Box textAlign="center">
            <Typography variant="h3" color="white" mt={2}>
                First-Aid Seminar
            </Typography>
              <Image
                src="/image3.jpg"
                alt="Offer 3"
                width={1500}
                height={100}
                style={{ borderRadius: '10px' }}
              />
            </Box>
          </div>
        </Slider>

        {/* Call to Action Button with Animation */}
        <Fade in={checked} timeout={2000}>
          <Box textAlign="center" mt={5}>
            <Button variant="contained" color="primary" size="large">
              <a href='/offers'>Learn More About Our Services</a>
            </Button>
          </Box>
        </Fade>
      </Container>
    </div>
    </>
  );
}