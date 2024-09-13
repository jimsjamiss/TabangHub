import React from 'react';
import { Avatar, Container, Paper, Typography, Grid, Button, Divider, Box, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Label } from '@mui/icons-material';

export default function UserProfile () {
  return (
    <>
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem'}}>
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
            <div className= 'my-3 w-auto'>
              <div><label className='font-bold pl-2'>Lastname</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="Jan" variant="filled" size='small' disabled/></div>
                <div><label className='font-bold pl-2'>Date of Birth</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="01/01/1969" variant="filled" size='small'  disabled/></div>
                <div><label className='font-bold pl-2'>Address</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="Bamban,Tarlac" variant="filled" size='small' disabled/></div>
            </div>

            <div className='flex flex-col justify-center my-3 w-auto'>
              <div><label className='font-bold pl-2'>Firstname</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="Xi Nah" variant="filled" size='small' disabled/></div>
                <div><label className='font-bold pl-2'>Phone</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="+63 9561-123-7895" variant="filled" size='small'  disabled/></div>
                <div><label className='font-bold pl-2'>Username</label></div>
                <div className='mx-2 my-2'><TextField id="filled-basic" label="@XiNigga" variant="filled" size='small' disabled/></div>
            </div>
          </div>
        </Box>

        <Box mt={4}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button data-modal-target="profile-modal" data-modal-toggle="profile-modal" variant="contained" color="primary" startIcon={<EditIcon />}>
                Edit Profile
              </Button>
              <div id="profile-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div class="relative p-4 w-full max-w-md max-h-full">
                      {/* <!-- Modal content --> */}
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          {/* <!-- Modal header --> */}
                          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                  Create New Product
                              </h3>
                              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                  </svg>
                                  <span class="sr-only">Close modal</span>
                              </button>
                          </div>
                          {/* <!-- Modal body --> */}
                          <form class="p-4 md:p-5">
                              <div class="grid gap-4 mb-4 grid-cols-2">
                                  <div class="col-span-2">
                                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                                  </div>
                                  <div class="col-span-2 sm:col-span-1">
                                      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                      <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                                  </div>
                                  <div class="col-span-2 sm:col-span-1">
                                      <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                      <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                          <option selected="">Select category</option>
                                          <option value="TV">TV/Monitors</option>
                                          <option value="PC">PC</option>
                                          <option value="GA">Gaming/Console</option>
                                          <option value="PH">Phones</option>
                                      </select>
                                  </div>
                                  <div class="col-span-2">
                                      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                      <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                                  </div>
                              </div>
                              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                  Add new product
                              </button>
                          </form>
                      </div>
                  </div>
              </div> 
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" startIcon={<MailOutlineIcon />}>
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
    </>
  );
};

