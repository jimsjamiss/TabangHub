"use client";

import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import { useTheme } from '@mui/material/styles';

// Define a keyframe animation for smooth transitions
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Services = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          animation: `${fadeIn} 0.8s ease-out`,
        }}
      >
        {/* Service 1 */}
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 2,
            boxShadow: 3,
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="/image1.jpg"
            alt="Donations"
            sx={{ width: { xs: '100%', sm: 300 }, height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              Donations
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Donations in a volunteering project are essential for funding operations and supporting the project's mission. They can include monetary contributions, supplies, or services, directly enabling volunteers to make a greater impact.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>

        {/* Service 2 */}
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            borderRadius: 2,
            boxShadow: 3,
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="/image2.jpg"
            alt="Medical Assistance"
            sx={{ width: { xs: '100%', sm: 300 }, height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              Medical Assistance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Medical assistance in a volunteering project ensures the health and safety of both volunteers and beneficiaries. This support can include providing first aid, medical supplies, and access to healthcare professionals, crucial for addressing any emergencies or health-related needs during the project.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>

        {/* Service 3 */}
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 2,
            boxShadow: 3,
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="/image3.jpg"
            alt="First-Aid Seminars"
            sx={{ width: { xs: '100%', sm: 300 }, height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              First-Aid Seminars
            </Typography>
            <Typography variant="body2" color="text.secondary">
              First-aid seminars in a volunteering project equip participants with essential skills to respond to emergencies effectively. These sessions ensure that volunteers are prepared to handle injuries or health issues, enhancing the overall safety and success of the project.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Services;
