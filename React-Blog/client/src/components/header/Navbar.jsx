import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import style from '../../style/header.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/messages/MessageContext';

const Navbar = () => {
  const user = useContext(UserContext);
  const Message = useContext(MessageContext);
  const settings = [
    {
      name: 'Profile',
      link: '/profile/' + user.User?._id,
    },
    {
      name: 'LogOut',
      link: '/',
      onClick: () => {
        user.LogOut();
        Message.ThrowMessage('User Logged Out!');
      },
    },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='static'
      color=''
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid grey',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='flex f-space-btw'>
          <Link to='/' className={style.navBox_left + ' link'}>
            <h3>React Blogging</h3>
          </Link>

          {user.User && (
            <Box sx={{ flexGrow: 0 }}>
              <Link to='/compose' className='link'>
                <Button variant='outlined'>Compose</Button>
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user.User && (
                    <Avatar src={user.User.image} alt={user.User.name} />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={setting.link} className='link'>
                      <Typography textAlign='center' onClick={setting.onClick}>
                        {setting.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          {!user.User && (
            <Link to='/login' className='link'>
              <Button variant='outlined'>Let's Go</Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
