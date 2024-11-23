"use client";

import React, { useState } from 'react';
import { Avatar, Container, Paper, Typography, Grid, Button, Divider, Box, TextField, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ArrowBack } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProfilePage = () => {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar
              alt="John Doe"
              src="/profilepic.jpg"
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h4" component="h1" style={{ marginTop: '1rem' }}>
              Jan Xi Nah
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: '0.5rem' }}>
              bingChillin00@gmail.com
            </Typography>
          </Box>

          <Divider variant="middle" />

          <Box mt={3}>
            <div className='flex flex-row justify-center'>
              <div className='my-3 w-auto'>
                <div><label className='font-bold pl-2'>Lastname</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="Jan" variant="filled" size='small' disabled/></div>
                <div><label className='font-bold pl-2'>Date of Birth</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="01/01/1969" variant="filled" size='small' disabled/></div>
                <div><label className='font-bold pl-2'>Address</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="Bamban, Tarlac" variant="filled" size='small' disabled/></div>
              </div>

              <div className='flex flex-col justify-center my-3 w-auto'>
                <div><label className='font-bold pl-2'>Firstname</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="Xi Nah" variant="filled" size='small' disabled/></div>
                <div><label className='font-bold pl-2'>Phone</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="+63 9561-123-7895" variant="filled" size='small' disabled/></div>
                <div><label className='font-bold pl-2'>Username</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="@XiNigga" variant="filled" size='small' disabled/></div>
              </div>
            </div>
          </Box>

          <Box mt={4}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <Button variant="outlined" color="primary" startIcon={<ArrowBack />}>
                  <a href='/dashboard'>Back</a>
                </Button>
              </Grid>
              <Grid item>
                {/* para open sa modal*/}
                <Button onClick={handleOpen} variant="contained" startIcon={<EditIcon />}>
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      {/* modal body sa edit profile */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-profile-modal"
        aria-describedby="edit-profile-description"
      >
        <Box sx={style}>
          <Typography id="edit-profile-modal" variant="h6" component="h2">
            Edit Your Profile
          </Typography>
          <Box mt={2}>
            <TextField label="First Name" defaultValue="Xi Nah" fullWidth margin="normal" />
            <TextField label="Last Name" defaultValue="Jan" fullWidth margin="normal" />
            <TextField label="Email" defaultValue="bingChillin00@gmail.com" fullWidth margin="normal" />
            <TextField label="Phone" defaultValue="+63 9561-123-7895" fullWidth margin="normal" />
            <TextField label="Address" defaultValue="Bamban, Tarlac" fullWidth margin="normal" />
          </Box>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleClose} variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProfilePage;
