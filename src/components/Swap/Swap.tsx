import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { createStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }),
);


export default function OutlinedCard() {
  const classes = useStyles();


  return (
    <Container >
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>

        <Grid item xs={7}>
          <Paper style={{ borderRadius: "20px" }}>
            <Typography variant="subtitle1" color="textSecondary">

              <div style={{ padding: "20px" }}>
                <Typography variant="subtitle1" gutterBottom>
                  <h2 style={{ textAlign: "left", fontSize: "40px", color: "black", lineHeight: "0px" }}> Swap<span style={{ fontSize: "20px" }}>/Pakage</span></h2>
                </Typography>
                <Grid container spacing={3}>

                  <Grid item xs={6}>
                    <Paper style={{ boxShadow: "none", textAlign: "left" }} className={classes.paper}>From</Paper>
                    <Paper style={{ boxShadow: "none", textAlign: "left" }} className={classes.paper}>Duration</Paper>
                    <Paper style={{ boxShadow: "none", textAlign: "left" }} className={classes.paper}>Claim Lockup</Paper>

                  </Grid>
                  <Select
                    fullWidth
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    variant="outlined"
                    style={{ borderRadius: "17px" }}

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Register with 100 BUSD by ID address </MenuItem>
                    <MenuItem value={20}>Then, convert a pixel value to em</MenuItem>
                    <MenuItem value={30}>convert an em value to pixels</MenuItem>
                  </Select>
                  <Grid item xs={6}>
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
                      <Paper style={{ boxShadow: "none" }} className={classes.paper}>0,25%</Paper>
                      <Paper style={{ boxShadow: "none", color: "#47C278", borderRadius: "50px 50px", border: " 2px solid #47C278", margin: "0px 47px", fontSize: "15px" }} className={classes.paper}>30 days</Paper>
                      <Paper style={{ boxShadow: "none" }} className={classes.paper}>48 Hour(s)</Paper>
                    </Box>

                  </Grid>

                </Grid>
                <Divider className={classes.divider} />
                <Grid container spacing={3}>

                  <Grid item xs={6}>
                    <Paper style={{ boxShadow: "none", textAlign: "left" }} className={classes.paper}>Earned</Paper>
                    <Paper style={{ boxShadow: "none", textAlign: "left" }} className={classes.paper}>--USxD</Paper>


                  </Grid>
                  <Grid item xs={6} style={{ borderRadius: "50px 50px", border: " 2px solid #DBDFE6" }}>

                    <Grid item xs={3}>
                      <Paper style={{ boxShadow: "none" }} className={classes.paper}>Quantity to purchase</Paper>
                      <Paper style={{ boxShadow: "none" }} className={classes.paper}>2</Paper>

                    </Grid>


                  </Grid>

                </Grid>
                <Button variant="contained" color="primary" style={{
                  padding: "16px", marginTop: "20px", width: "100%",
                  borderRadius: "12px", backgroundColor: "#47C278", fontSize: "16px", lineHeight: "24px"
                }}>Authorize BUSD</Button>


              </div>
            </Typography>
          </Paper>
        </Grid>


      </Grid>
    </Container>
  );
}