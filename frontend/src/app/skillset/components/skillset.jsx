"use client";
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HandymanIcon from '@mui/icons-material/Handyman';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SavingsIcon from '@mui/icons-material/Savings';

const skills = [
  { id: 1, title: 'First Aid', icon: <LocalHospitalIcon sx={{ fontSize: 40 }} /> },
  { id: 2, title: 'Cooking', icon: <RestaurantIcon sx={{ fontSize: 40 }} /> },
  { id: 3, title: 'Car Maintenance', icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
  { id: 4, title: 'Fitness Training', icon: <FitnessCenterIcon sx={{ fontSize: 40 }} /> },
  { id: 5, title: 'DIY & Handyman', icon: <HandymanIcon sx={{ fontSize: 40 }} /> },
  { id: 6, title: 'Budgeting', icon: <SavingsIcon sx={{ fontSize: 40 }} /> },
];

export default function LifeSkillsSelection() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  const handleSkillClick = (skillId) => {
    if (selectedSkills.includes(skillId)) {
      // Deselect if already selected
      setSelectedSkills(selectedSkills.filter(id => id !== skillId));
    } else if (selectedSkills.length < 3) {
      // Allow selecting only up to 3 skills
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  const handleProceed = () => {
    if (selectedSkills.length === 3) {
      // Proceed logic here, e.g., navigate to next page
      console.log('Proceeding with skills:', selectedSkills);
      // Redirect to next page or submit form
    } else {
      alert('Please select exactly 3 skills');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Select Your 3 Basic Life Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.id}>
            <Card
              onClick={() => handleSkillClick(skill.id)}
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s',
                transform: selectedSkills.includes(skill.id) ? 'scale(1.05)' : 'scale(1)',
                border: selectedSkills.includes(skill.id) ? '2px solid #4caf50' : 'none',
              }}
            >
              <CardMedia sx={{ textAlign: 'center', py: 2 }}>
                {skill.icon}
              </CardMedia>
              <CardContent>
                <Typography variant="h6" align="center">
                  {skill.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      

      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button
          component='a'
          href='/dashboard'
          variant="contained"
          color="primary"
          size="large"
          onClick={handleProceed}
          sx={{
            animation: selectedSkills.length === 3 ? 'pulse 1s infinite' : 'none',
          }}
        >
          Proceed
        </Button>
      </Box>

      {/* Keyframe animation for the button when 3 skills are selected */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Container>
  );
}
