import React from 'react';
import './Footer.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ backgroundColor: "#29313C", color: "#ffff", paddingTop: "90px", paddingBottom: "90px" , marginTop:"40px"}}>
      <Container maxWidth="xl">
        <div style={{ display: "flex"}} className="footer">
        <Grid item xs={6} sm={12}>
          <p>About us</p>
          <p>Road Map</p>
          <p>Community</p>
        </Grid>
        <Grid item xs={6} sm={12}>
        <p>Exchange</p>
          <p>Investment Pakages</p>
          <p>Referral Program</p>
        </Grid>
        <Grid item xs={6} sm={12}>
        <p>Terms of Use</p>
          <p>Private Policy</p>
          <p>Cookie Notice</p>
          <p>White Paper</p>
        </Grid>
        <Grid item xs={6} sm={12}>
        <p>Get Notification</p>
        </Grid>
        </div>
      </Container>
      </div>
      <div style={{ backgroundColor: "#191E24", color: "#ffff", paddingTop: "10px", paddingBottom: "10px"}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quasi, esse odit ad debitis eaqu</p>
      </div>
    </React.Fragment>
  );
}