import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import "./Home.css";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Home from './Home';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            style={{ top: "50px" }}

            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><PermIdentityIcon /> My Profile</MenuItem>

        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem >
                <IconButton
                    aria-label="account of current user"
                    // aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Router>
            <div>
                <Paper square>
                    <Box  >
                        <AppBar position="static"  >
                            <div className="align">
                                <Toolbar>
                                    <div className="left">


                                        <Link className="id" to="/home1"
                                        >
                                            <ListItem button key={'Home1'}>

                                                <ListItemText primary={'What is USxD?'} style={{ color: "#122a4d", fontSize: "20px" }} />

                                            </ListItem >
                                        </Link>


                                        <Link className="id" to="/Memberships"
                                        >
                                            <ListItem button key={'Memberships'}>
                                                <ListItemText primary={'Features of USxD'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                            </ListItem>
                                        </Link>


                                        <Link className="id" to="/Activity"
                                        >
                                            <ListItem button key={'Activity'}>
                                                <ListItemText primary={'Coining Package'} style={{ color: "#122a4d" }} />
                                            </ListItem>
                                        </Link>

                                        <Link className="id" to="/Login"
                                        >
                                            <ListItem button key={' Engage'}>
                                                <ListItemText primary={'Network Building'} style={{ color: "#122a4d" }} />
                                            </ListItem>
                                        </Link>
                                        <Link className="id" to="/Test"
                                        >
                                            <ListItem button key={' Engage'}>
                                                <ListItemText primary={'Launch App'} style={{ backgroundColor: "#267326", color: "black" }} />
                                            </ListItem>
                                        </Link>


                                    </div>


                                    <Box sx={{ flexGrow: 1 }} />
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <IconButton
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"


                                        >
                                            <AccountCircle />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <IconButton
                                            aria-label="show more"
                                            aria-controls={mobileMenuId}
                                            aria-haspopup="true"

                                            color="inherit"
                                        >
                                            <MoreIcon />
                                        </IconButton>
                                    </Box>
                                </Toolbar>

                            </div>
                        </AppBar>
                        {renderMobileMenu}
                        {renderMenu}
                    </Box>
                    <Switch>
                        <Route path="/Home1">
                            <Home />
                            <Footer/>
                        </Route>
                        <Route path="/Login">
<Login/>
                        </Route>
                    </Switch>
                </Paper>

            </div>
        </Router>
    );


};
