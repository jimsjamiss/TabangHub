"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Badge from '@mui/material/Badge';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const pages = [
  <a href='../dashboard'>Home</a>, 
  <a href='/offers'>Services</a>, 
  <a href='/volunteers'>Volunteers</a>
];

const settings = [
  { label: "Profile", icon: <PersonRoundedIcon fontSize="small" />, link: "/profile" },
  { label: "History", icon: <HistoryRoundedIcon fontSize="small" />, link: "/userHistory" },
  { label: "Logout", icon: <LogoutRoundedIcon fontSize="small" />, link: "/" }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorElInbox, setAnchorElInbox] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNotificationsMenu = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleOpenInboxMenu = (event) => {
    setAnchorElInbox(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNotificationsMenu = () => {
    setAnchorElNotifications(null);
  };

  const handleCloseInboxMenu = () => {
    setAnchorElInbox(null);
  };

  return (
    <>
      <AppBar position="static" color="success">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src="/log.png" width={70} height={70} alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/dashboard"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              TabangHub
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' } }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/dashboard"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TabangHub
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip title="Notifications">
                <IconButton
                  sx={{ p: 0, color: 'white' }}
                  onClick={handleOpenNotificationsMenu}
                >
                  <Badge badgeContent={3} color="error">
                    <NotificationsSharpIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElNotifications}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElNotifications)}
                onClose={handleCloseNotificationsMenu}
              >
                <MenuItem onClick={handleCloseNotificationsMenu}>🎉 New Donation Received!</MenuItem>
                <MenuItem onClick={handleCloseNotificationsMenu}>👏 New Pledge Alert</MenuItem>
                <MenuItem onClick={handleCloseNotificationsMenu}>🙌 Donation Update</MenuItem>
              </Menu>
              <Tooltip title="Inbox">
                <IconButton
                  component= 'a'
                  href= '/inbox'
                  sx={{ p: 0, color: 'white', ml: 2 }}
                  onClick={handleOpenInboxMenu}
                >
                  <Badge badgeContent={3} color="error">
                    <MailOutlineIcon />
                  </Badge>
                  
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                  <Avatar alt="User Profile" src="/profilepic.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top', horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <IconButton component="a" href={setting.link} color="inherit">
                      {setting.icon}
                      <Typography
                        sx={{ fontSize: '1rem', ml: 1 }} // Adjusted font size
                      >
                        {setting.label}
                      </Typography>
                    </IconButton>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
