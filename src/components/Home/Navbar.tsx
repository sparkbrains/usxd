import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Home from '../Home/Home';
import RegisterStep2 from '../Register/Registerstep2';
import RegisterStepLoading from '../Register/RegisterStepLoading';
import Register from '../Register/Register';
import RegisterStepCheck from '../Register/RegisterStepCheck'
import RegisterStep3 from '../Register/RegisterStep3'  
import RegisterStep3Loading from '../Register/RegisterStep3Loading' 
import RegisterStep3Check from '../Register/RegisterStep3Check' 
import RegisterStep3Activation from '../Register/RegisterStep3Activation'
import Registerstep2dropdown from '../Register/Registerstep2dropdown';
import './Navbar.css'
import RegisterStep3Activationdone from '../Register/RegisterStep3Activationdone';
import Swap from '../Swap/Swap';
import LoginConnectWallet from '../Login/LoginConnectWallet';
import RegisterConnectWallet from '../Register/RegisterConnectWallet';
import RegisterConnectWalletagree from '../Register/RegisterConnectWalletagree';
import SelectToken  from '../Swap/SelectToken';
import Swap1  from '../Swap/Swap1';
import SwapSetting  from '../Swap/SwapSetting';
import Networkbuildinglicenseactive from '../Network/Networkbuildinglicenseactive';
import Networkbuildinglicense from '../Network/Networkbuildinglicense';
import Networkbuildinglicenseloading from '../Network/Networkbuildinglicenseloading';
import Networkbuildingactivated from '../Network/Networkbuildingactivated';
import Coiningpackage from '../Coining/Coiningpackage';
import Coiningpackageloading from '../Coining/Coiningpackageloading';
import Coiningpackageactive from '../Coining/Coiningpackageactive';
import NetworkBuildingLicenceAuthorise from '../Network/NetworkBuildingLicenceAuthorise';
import NetworkBuildingLicenceSuccess from '../Network/NetworkBuildingLicenceSuccess';
import ConfirmSubmitted from '../Swap/ConfirmSubmitted';






const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <div className="typo">
                    <AppBar position="static" style={{ backgroundColor: "#ffffff", color: "black" }}>
                        <Toolbar>
                            <Grid lg={4}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <img src="/logo.png" alt="logo" />
                                </IconButton>
                            </Grid>
                            <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                <Link className="id" to="/Home"><ListItem button key={'Home'}><ListItemText primary={'What is USxD?'} style={{ color: "#122a4d", fontSize: "20px" }} /></ListItem >
                                </Link>
                            </Typography>

                            <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                <Link className="id" to="/Memberships">
                                    <ListItem button key={'Memberships'}>
                                        <ListItemText primary={'Features of USxD'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                    </ListItem>
                                </Link>
                            </Typography>
                            <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                <Link className="id" to="/Register">
                                    <ListItem button key={'Activity'}>
                                        <ListItemText primary={'Coining Package'} style={{ color: "#122a4d" }} />
                                    </ListItem>
                                </Link>
                            </Typography>
                            <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                <Link className="id" to="/Login">
                                    <ListItem button key={' Engage'}>
                                        <ListItemText primary={'Network Building'} style={{ color: "#122a4d" }} />
                                    </ListItem>
                                </Link>
                            </Typography>
                            <Button variant="contained" color="primary" style={{ backgroundColor: "#47C278", borderRadius: "12px" }}>Launch App</Button>
                            <Button className={classes.menuButton} style={{ paddingLeft: "10px" }}>
                                <img src="/Vector.png" alt="Vector" style={{ backgroundColor: "blue", padding: "1px", borderRadius: "9px" }} />
                            </Button>

                        </Toolbar>
                    </AppBar>
                </div>
            </div>
            <Switch>
                <Route path="/Home">
                    <Home />
                    <Footer />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Registerstep2">
                    <RegisterStep2 />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/RegisterStepLoading">
                    <RegisterStepLoading />
                </Route>
                <Route path="/RegisterStepCheck">
                    <RegisterStepCheck />
                </Route>
                <Route path="/RegisterStep3">
                    <RegisterStep3 />
                </Route>
                <Route path="/RegisterStep3Loading">
                    <RegisterStep3Loading />
                </Route>
                <Route path="/RegisterStep3Check">
                    <RegisterStep3Check />
                </Route>
                <Route path="/RegisterStep3Activation">
                    <RegisterStep3Activation />
                </Route>

                <Route path="/Registerstep2dropdown">
                    <Registerstep2dropdown />
                </Route>
                <Route path="/RegisterStep3Activationdone">
                    <RegisterStep3Activationdone />
                </Route>
                <Route path="/Swap">
                    <Swap />
                </Route>
                <Route path="/LoginConnectWallet">
                    <LoginConnectWallet />
                </Route>
                <Route path="/RegisterConnectWallet">
                    <RegisterConnectWallet />
                </Route>
                <Route path="/RegisterConnectWalletagree">
                    <RegisterConnectWalletagree />
                </Route>
                <Route path="/SelectToken">
                    <SelectToken />
                </Route>
                <Route path="/Swap1">
                    <Swap1 />
                </Route>
                <Route path="/SwapSetting">
                    <SwapSetting />
                </Route>
                <Route path="/Networkbuildinglicenseactive">
                    <Networkbuildinglicenseactive />
                </Route>
                <Route path="/Networkbuildinglicense">
                    <Networkbuildinglicense />
                </Route>
                <Route path="/Networkbuildinglicenseloading">
                    <Networkbuildinglicenseloading />
                </Route>
                <Route path="/Networkbuildingactivated">
                    <Networkbuildingactivated />
                </Route>
                
              
                <Route path="/Coiningpackage">
                    <Coiningpackage/>
                </Route>
                <Route path="/Coiningpackageloading">
                    <Coiningpackageloading />
                </Route>
                <Route path="/Coiningpackageactive">
                    <Coiningpackageactive />
                </Route>
                <Route path="/NetworkBuildingLicenceAuthorise">
                    <NetworkBuildingLicenceAuthorise />
                </Route>
                <Route path="/NetworkBuildingLicenceSuccess">
                    <NetworkBuildingLicenceSuccess />
                </Route>
                <Route path="/ConfirmSubmitted">
                    <ConfirmSubmitted />
                </Route>
                
                
            
                
                
                
            </Switch>
        </Router>
    );
}