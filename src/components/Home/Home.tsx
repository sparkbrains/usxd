
import { Typography, } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Home = () => {

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
                            <p style={{ textAlign: "left", marginLeft: "30px", marginRight: "30px", marginBottom: "50px" }}>
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
                <div style={{ display: "flex", marginTop: "30px" }}>
                    <Grid item xs={4}>
                        <Card className="card">
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
                        <Card className="card">
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
                        <Card className="card">
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
                        <Card className="card">
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
                        <Card className="card">
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
                        <Card className="card">
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
                            <h1 style={{ textAlign: "left", fontSize: "55px", color: "black", lineHeight: "63px" }}> Create in Decentralized Economy</h1>
                            <p style={{ textAlign: "left", marginLeft: "30px", marginRight: "30px", marginBottom: "50px" }}>
                                We have a master's expertise in mobile app development and helps you to get maximum ROI and boost sales.
                            </p>
                        </Typography>
                    </Grid>

                </Grid>
                <h1 style={{ fontSize: "50px", color: "black" }}>Network Building</h1>
                <p style={{ marginTop: "50px" }}>Get access to thousands of partners and exponential profits from infinite referrals</p>
                <div style={{ display: "flex", marginTop: "50px" }}>
                    <Grid item xs={4}>
                        <Card className="card">
                            <CardActionArea>
                                <img src="/section3-network-3.png" alt="package" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button variant="contained" color="primary" >
                                Custom CSS
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card">
                            <CardActionArea>
                            <img src="/section3-network-2.png" alt="nice" height="140"/>.
                                
                                <CardContent>

                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button variant="contained" color="primary" >
                                Custom CSS
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className="card">
                            <CardActionArea>
                                <img src="/section3-network-3.png" alt="package" height="140" />
                                <CardContent>

                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button variant="contained" color="primary" >
                                Custom CSS
                            </Button>
                        </Card>
                    </Grid>
                </div>
            </Container>
        </div>


    )
};

export default Home