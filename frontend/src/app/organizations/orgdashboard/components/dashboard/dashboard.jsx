"use client";
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, Box } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts'; // For data visualization (install recharts)

const data = [
  { name: 'Joined Activities', value: 400 },
  { name: 'Donated', value: 300 },
  { name: 'Completed Activities', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const OrganizationDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
        Organization Dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Users Joined Activities Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#e0f7fa' }}>
            <CardHeader title="Users Joined Activities" />
            <CardContent>
              <Typography variant="h2" align="center" sx={{ color: '#00796b' }}>
                400
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Donations Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#f1f8e9' }}>
            <CardHeader title="Total Donations" />
            <CardContent>
              <Typography variant="h2" align="center" sx={{ color: '#33691e' }}>
                $3000
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Completed Activities Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#ffe0b2' }}>
            <CardHeader title="Completed Activities" />
            <CardContent>
              <Typography variant="h2" align="center" sx={{ color: '#bf360c' }}>
                250
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Activity Distribution
        </Typography>
      </Box>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={(entry) => `${entry.name}: ${entry.value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Container>
  );
};

export default OrganizationDashboard;
