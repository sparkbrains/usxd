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
import './Navbar.css'

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
      <AppBar position="static" style={{backgroundColor: "#ffffff", color:"black"}}>
        <Toolbar>
            <Grid lg={4}> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="/logo.png" alt="logo"/>
          </IconButton>
          </Grid>
          <Typography  className={classes.title} style={{fontSize:"14px"}}>
          <Link className="id" to="/Home"><ListItem button key={'Home'}><ListItemText primary={'What is USxD?'} style={{ color: "#122a4d", fontSize: "20px" }} /></ListItem >
          </Link>
          </Typography>
          
          <Typography  className={classes.title} style={{fontSize:"14px"}}>
          <Link className="id" to="/Memberships">
            <ListItem button key={'Memberships'}>
                <ListItemText primary={'Features of USxD'} style={{ color: "#122a4d", textDecoration: "nome" }} />
            </ListItem>
          </Link>
          </Typography>
          <Typography  className={classes.title} style={{fontSize:"14px"}}>
          <Link className="id" to="/Activity">
            <ListItem button key={'Activity'}>
                <ListItemText primary={'Coining Package'} style={{ color: "#122a4d" }} />
            </ListItem>
        </Link>
          </Typography>
          <Typography  className={classes.title} style={{fontSize:"14px"}}>
          <Link className="id" to="/Login">
            <ListItem button key={' Engage'}>
                <ListItemText primary={'Network Building'} style={{ color: "#122a4d" }} />
            </ListItem>
        </Link>
          </Typography>
          <Button variant="contained"  color="primary" style={{backgroundColor: "#47C278", borderRadius: "12px"}}>Launch App</Button>
          <Button  className={classes.menuButton}  style={{paddingLeft:"10px"}}>
            <img src="/Vector.png"  style={{backgroundColor:"blue", padding:"1px", borderRadius:"9px"}}/>
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
                        <Login/>
                        </Route>
                    </Switch>
    </Router>
  );
}