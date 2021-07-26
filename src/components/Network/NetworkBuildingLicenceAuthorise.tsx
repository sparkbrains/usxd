import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import { CheckBox } from "@material-ui/icons";
import { Close } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { ReportProblemOutlined } from "@material-ui/icons";
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const NetworkBuildingLicenceAuthorise = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.title = "NetworkBuildingLicenceAuthorise";
  }, []);

  function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string,
    ankul: string,
    ram: string,
    raj: string,
    komal: string
  ) {
    return { name, calories, fat, carbs, protein, ankul, ram, raj, komal };
  }
  const rows = [
    createData(
      "Network License (% daily)",
      "0.03%",
      "0.03%",
      "--",
      "--",
      "--",
      "--",
      "--",
      "--"
    ),
    createData(
      "Growth Hacking License (% daily)",
      "0.03%",
      "0.03% ",
      "0.03%",
      "--",
      "--",
      "--",
      "--",
      "--"
    ),
    createData(
      "Leadership License (% daily)",
      "0.03%",
      "0.03%",
      "0.03%",
      "0.03%",
      "0.03%",
      "0.03%",
      "0.03%",
      "0.03%"
    ),
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: "url()",
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Button
          variant="contained"
          disabled
          style={{
            width: "100px",
            margin: "2px",
            textTransform: "capitalize",
            borderRadius: "12px",
            padding: "10px",
          }}
        >
          Overview
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{
            textTransform: "capitalize",
            padding: "10px",
            backgroundColor: "black",
            borderRadius: "12px",
          }}
        >
          License
        </Button>
        <Button
          variant="contained"
          disabled
          style={{
            margin: "2px",
            textTransform: "capitalize",
            borderRadius: "12px",
            padding: "10px",
          }}
        >
          License activated
        </Button>
        <Container>
          <div
            style={{ display: "flex", marginTop: "50px", textAlign: "left" }}
          >
            <Grid item xs={4}>
              <Card
                className="card"
                style={{ padding: "10px", boxShadow: "none" }}
              >
                <CardActionArea>
                  <img
                    src="/section3-network-3.png"
                    alt="package"
                    height="140"
                  />
                  <CardContent>
                    <h4>Network License </h4>
                    <h1> 300 BUSD</h1>
                    <p> Make aprafit with two Network layers</p>
                    <p>Ex: Earn 0,03% Daily of 1,000 BUSD</p>
                  </CardContent>
                </CardActionArea>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{
                    textTransform: "capitalize",
                    padding: "10px",
                    backgroundColor: "#47C278",
                    borderRadius: "12px",
                  }}
                >
                  Active License
                </Button>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="card"
                style={{ padding: "10px", boxShadow: "none" }}
              >
                <CardActionArea>
                  <img src="/section3-network-2.png" alt="nice" height="140" />.
                  <CardContent>
                    <h4>Growth Hacking License </h4>
                    <h1> 1,200 BUSD</h1>
                    <p> Make aprafit with four Network layers</p>
                    <p>Ex: Earn 0,03% Daily of 2,000 BUSD</p>
                  </CardContent>
                </CardActionArea>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{
                    textTransform: "capitalize",
                    padding: "10px",
                    backgroundColor: "#47C278",
                    borderRadius: "12px",
                  }}
                >
                  Active License
                </Button>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="card"
                style={{ padding: "10px", boxShadow: "none" }}
              >
                <CardActionArea>
                  <img
                    src="/section3-network-3.png"
                    alt="package"
                    height="140"
                  />
                  <CardContent>
                    <h4>Leadership License </h4>
                    <h1> 3,500 BUSD</h1>
                    <p> Make aprafit with eight Network layers</p>
                    <p>Ex: Earn 0,03% Daily of 4,000 BUSD</p>
                  </CardContent>
                </CardActionArea>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{
                    textTransform: "capitalize",
                    padding: "10px",
                    backgroundColor: "#47C278",
                    borderRadius: "12px",
                  }}
                >
                  Active License
                </Button>
              </Card>
            </Grid>
          </div>
          <TableContainer component={Paper}>
            <p style={{ textAlign: "left", fontSize: "25px" }}>
              Multi-Level network building
            </p>
            <Table className={classes.table} aria-label="si">
              <TableHead>
                <TableRow>
                  <TableCell>Network</TableCell>
                  <TableCell align="right">Lv.1</TableCell>
                  <TableCell align="right">Lv.2</TableCell>
                  <TableCell align="right">Lv.3</TableCell>
                  <TableCell align="right">Lv.4</TableCell>
                  <TableCell align="right">Lv.5</TableCell>
                  <TableCell align="right">Lv.6</TableCell>
                  <TableCell align="right">Lv.7</TableCell>
                  <TableCell align="right">Lv.8</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.raj}</TableCell>
                    <TableCell align="right">{row.ram}</TableCell>
                    <TableCell align="right">{row.komal}</TableCell>
                    <TableCell align="right">{row.ankul}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div>
            <Button variant="outlined" color="primary" onClick={handleToggle}>
              Show backdrop
            </Button>
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              {/* <CircularProgress color="inherit" /> */}

              <div className={classes.root}>
                <Container style={{ width: "32%" }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Card
                        className="card"
                        raised={true}
                        style={{ padding: "45px", borderRadius: "30px" }}
                      >
                        <Grid>
                          <Grid container spacing={10}>
                            <Grid item xs={6}>
                              <h1> Authorization contract</h1>
                            </Grid>
                            <Grid item xs={6} style={{ alignSelf: "center" }}>
                              <Close style={{ float:"right" }} />
                            </Grid>
                          </Grid>
                          <ReportProblemOutlined
                            style={{ fontSize: "155px", color: "#FFD147" }}
                          />
                        </Grid>
                        <h2>Allow usxd.io to use your BUSD?</h2>
                        <p>
                          Confirmation of the BUSD token to interact with the
                          USxD contract.
                        </p>
                        <Grid container spacing={3}>
                          <Grid item container xs={6}>
                            <Button
                              style={{
                                backgroundColor: "#EDF9F1",
                                color: "47C278",
                                borderRadius: " 12px 12px",
                                padding: "10px 45px",
                                fontSize: "16px",
                                marginTop: "60px",
                                textTransform: "capitalize",
                              }}
                              type="submit"
                              variant="outlined"
                              fullWidth
                              size="medium"
                            >
                              Cancel
                            </Button>
                          </Grid>
                          <Grid item container xs={6}>
                            <Button
                              style={{
                                backgroundColor: "#47C278",
                                color: "white",
                                borderRadius: " 12px 12px",
                                padding: "10px 45px",
                                fontSize: "16px",
                                marginTop: "60px",
                                textTransform: "capitalize",
                              }}
                              type="submit"
                              variant="outlined"
                              fullWidth
                              size="medium"
                              color="primary"
                            >
                              Authorize
                            </Button>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </Backdrop>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NetworkBuildingLicenceAuthorise;