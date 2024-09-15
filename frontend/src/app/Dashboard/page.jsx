"use client";

import Image from 'next/image';
import { Container, Box, Typography, Button, Fade, Slide, Grow } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Landing from '../dashboard/components/Landing/landing';
import Nav from '../dashboard/components/Navbar/page';
import Footer from './components/Footer/page';

export default function Dashboard(){
  return(
    <><></>
    <Nav></Nav>
    <Landing></Landing>
    <Footer></Footer>
    </>
  );
  
}