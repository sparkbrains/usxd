import React from "react";
import "./Footer.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "#29313C",
          color: "#ffff",
          paddingTop: "90px",
          paddingBottom: "90px",
          marginTop: "40px",
        }}
      >
        <Container maxWidth="lg">
          <div
            style={{ display: "flex", textAlign: "left" }}
            className="footer"
          >
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
              <p>
                <Paper
                  component="form"
                  className={classes.root}
                  style={{ width: "250px" }}
                >
                  <InputBase
                    className={classes.input}
                    placeholder="Email Address"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <img src="/arrow-right.png" alt="" />
                  </IconButton>
                </Paper>
              </p>
              <p>
                <Grid container>
                  <Grid item>
                    <img src="/twitter.png" alt="" />
                  </Grid>
                  <Grid item>
                    <img src="/btn.png" alt="" />
                  </Grid>
                  <Grid item>
                    <img src="/Arrow.png" alt="" />
                  </Grid>
                  <Grid item>
                    <img src="/M.png" alt="" />
                  </Grid>
                </Grid>
              </p>
            </Grid>
          </div>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#191E24",
          color: "#ffff",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          padding: "10px 0px",
        }}
      >
        <p>
          USxD © 2021 • support@usxd.io • All rights reserved. Designed by
          ftribe
        </p>
      </div>
    </React.Fragment>
  );
}
