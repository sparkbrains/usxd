
import { Typography, } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        document.title = "Home"
    }, [])


    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" color="textSecondary">
                            <h1 style={{ textAlign: "left", fontSize: "55px", color: "black", lineHeight: "63px" }}> Create in Decentralized Economy</h1>
                            <p style={{ textAlign: "left", marginRight: "30px", marginBottom: "50px" }}>
                                Our partners will launch later also ATM, POS, Visa and
                                Mastercard, NFC p2p wallet, which will allow USxD to enter the
                                real economy. They want to create a network of merchants that
                                will accept USxD.
                            </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="/section1-currency.png" alt="currencyimg" width="100%" />
                    </Grid>
                </Grid>
                <h1 style={{ fontSize: "55px", color: "black" }}> Features of Dexconomy Platform and USxd Stablecoin</h1>
                <div style={{ display: "flex", marginTop: "30px", }}>
                    <Grid item xs={4}>
                        <Card className="card" style={{ height: "100%" , boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section2-currency.png" alt="currencyimg" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Issuing Visa, Mastercard can withdraw Global payment method Touchless payments with NFC
                                        money at ATMs. The system will
                                        automatically convert from USxD to Fiat
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card" style={{ height: "100%" , boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section2-global.png" alt="globalimg" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Global payment method
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card" style={{ height: "100%" ,boxShadow:"none"  }}>
                            <CardActionArea>
                                <img src="/section2-nfc.png" alt="nfcimg" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Touchless payments with NFC
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                </div>
                <div style={{ display: "flex", marginTop: "50px" }}>
                    <Grid item xs={4}>
                        <Card className="card" style={{ height: "100%" , boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section2-wallet.png" alt="walletimg" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        p2p wallet
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card" style={{ height: "100%" , boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section2-package.png" alt="packageiimg" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Activate packages to earn daily, monthly and yearly
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card" style={{ height: "100%" , boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section3-network-3.png" alt="networkimg" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Multi-Level Network Building,with 8 levels

                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                </div>
                <h1 style={{ fontSize: "50px", color: "black" }}>Coining Package</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src="/section2-package.png" alt="packageimg" width="100%" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" color="textSecondary">
                            <h2 style={{ textAlign: "left", fontSize: "55px", color: "black", lineHeight: "63px" }}> 500 BUSD</h2>
                            <div style={{ textAlign: "left", marginBottom: "50px" }}>
                            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
           
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                            </div>
                        </Typography>
                    </Grid>

                </Grid>
                <h1 style={{ fontSize: "50px", color: "black" }}>Network Building</h1>
                <p style={{ marginTop: "50px" }}>Get access to thousands of partners and exponential profits from infinite referrals</p>
                <div style={{ display: "flex", marginTop: "50px",  textAlign:"left" }}>
                    <Grid item xs={4}>
                        <Card className="card" style={{ padding:"10px", boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section3-network-3.png" alt="package" height="140" />
                                <CardContent>
                                    <h4>Network License </h4>
                                    <h1> 300 BUSD</h1>
                                <p> Make aprafit with two Network layers</p>
                                <p>Ex: Earn 0,03% Daily of 1,000 BUSD</p>

                                </CardContent>
                            </CardActionArea>
                            <Button variant="contained" fullWidth color="primary" style={{textTransform: "capitalize", padding:"10px", backgroundColor:"#47C278", borderRadius: "12px"}}  >
                                Active License
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card"style={{ padding:"10px", boxShadow:"none"  }}>
                            <CardActionArea>
                                <img src="/section3-network-2.png" alt="nice" height="140" />.

                                <CardContent>

                                <h4>Growth Hacking License </h4>
                                <h1> 1,200 BUSD</h1>
                                <p> Make aprafit with four Network layers</p>
                                <p>Ex: Earn 0,03% Daily of 2,000 BUSD</p>
                                </CardContent>
                            </CardActionArea>
                            <Button variant="contained" fullWidth color="primary" style={{textTransform: "capitalize", padding:"10px", backgroundColor:"#47C278", borderRadius: "12px"}} >
                                Active License
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card" style={{ padding:"10px" , boxShadow:"none" }}>
                            <CardActionArea>
                                <img src="/section3-network-3.png" alt="package" height="140" />
                                <CardContent>

                                <h4>Leadership License </h4>
                                <h1> 3,500 BUSD</h1>
                                <p> Make aprafit with eight Network layers</p>
                                <p>Ex: Earn 0,03% Daily of 4,000 BUSD</p>
                                </CardContent>
                            </CardActionArea>
                            <Button variant="contained" fullWidth color="primary" style={{textTransform: "capitalize", padding:"10px", backgroundColor:"#47C278", borderRadius: "12px"}}  >
                                Active License
                            </Button>
                        </Card>
                    </Grid>
                </div>
            </Container>
        </div>
    )
};

export default Home