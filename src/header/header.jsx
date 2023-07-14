import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import useStyles from './header-styles'

export default function Header() {

    const navigate = useNavigate();
    const {classes} = useStyles();

    const routeToSearch = () => {
        navigate('/search')
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography variant="h6" component="div" >
            Weather App
          </Typography>
        </Link>
          <Button variant='outlined' color="inherit" onClick={routeToSearch}>Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}