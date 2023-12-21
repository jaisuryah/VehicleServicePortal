import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './Navbar.css';

const pages = ['Pricing', 'Blog', 'About', 'Services', 'Community'];
const panels = ['Profile', 'Privacy', 'Notifications', 'Services', 'Community', 'Log-Out'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // State to control drawer

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', zIndex: '+1' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '40px' }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="brandnameletternav"
          >
            QuickService
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: 'black' }}>
                      {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', mr: index !== pages.length - 1 ? 2 : 0 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ width: '280px' }}>
          <List>
          {panels.map((panel) => (
            <ListItem button key={panel} onClick={toggleDrawer(false)} className="panelItem">
            <Typography variant="subtitle1">{panel}</Typography>
            </ListItem>
            ))}
            </List>
            </Drawer>
            <Button onClick={toggleDrawer(true)} sx={{ color: 'white',padding:'20px' }}><AccountCircleIcon/></Button>
            <Link to = '/'>
        <Button
          variant="contained"
          onClick={handleCloseUserMenu}
          startIcon={<LogoutIcon />}
          sx={{ backgroundColor: 'red', color: 'white', ml: 2, fontWeight: 'bold', paddingRight: '25px' }}
        >
          Log Out
        </Button>
            </Link>
            
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
