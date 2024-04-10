import React, { useMemo, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/logo.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './header.css'
//
import { Link, useLocation } from 'react-router-dom'

const pages = ['Home', 'Shop', 'About', 'Contact'];

export default function Header() {
    const location = useLocation();
    const itemActive = useMemo(() => {
        if (location.pathname === '/') {
            return 'home';
        } else {
            return location.pathname.split('/')[1];
        }
    }, [location])

    const darkTheme = useMemo(() => (createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    })), []);

    const [anotherItemHover, setAnotherItemHover] = useState<boolean>(false);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={logo} alt="Logo Shop" style={{ marginRight: '0.5rem' }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 800,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Furniro
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                id='test'
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
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                            {pages.map((page) => (
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="h6"
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', margin: '0 1rem' }}
                                    className={'main-item-menu' + ((itemActive.toLocaleLowerCase() === page.toLocaleLowerCase() && !anotherItemHover)
                                        ? ' main-item-menu-active'
                                        : '')}
                                    onMouseOver={() => { setAnotherItemHover(!anotherItemHover) }}
                                    onMouseOut={() => { setAnotherItemHover(!anotherItemHover) }}
                                >
                                    {page}
                                </Typography>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'end', alignItems: 'center' }}>
                            <Link to={'/login'} className='guess-icon'>
                                <PersonOutlineOutlinedIcon sx={{ margin: '0 1rem', fontSize: '1.8rem' }} />
                            </Link>
                            <Link to={'#'} className='guess-icon'>
                                <ShoppingCartOutlinedIcon sx={{ margin: '0 1rem', fontSize: '1.8rem' }} />
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
