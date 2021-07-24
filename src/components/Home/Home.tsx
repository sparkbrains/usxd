
import { Typography, } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';




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


const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        document.title = "Home"
    }, [])


    return (
        

        <div>
            <div style={{ backgroundImage: "url(/section1-blur-bg.png)",paddingTop:"100px",backgroundRepeat: 'no-repeat' }}>
                <Container >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1" color="textSecondary">
                                <h1 style={{ textAlign: "left", fontSize: "95px", color: "black", lineHeight: "104px", position:"relative"}}> Create in Decentralized Economy</h1>
                                <img src="/section1-title-line.png" alt="currencyimg" width="100%" style={{position:"absolute",width:"100%",maxWidth:"min-content",top:"439px",left:"339px"}} />
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
                </Container>

                <Container>    
                    <h1 style={{ fontSize: "55px", color: "black",padding:"140px", position:"relative"}}> Features of Dexconomy Platform and USxd Stablecoin</h1>
                    <img src="/section1-title-line.png" alt="currencyimg" width="100%" style={{position:"absolute",width:"100%",maxWidth:"min-content",top:"115%",left:"42%", height:"0"}} />

                        
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
                    
                </Container>
            </div>

            <div style={{ backgroundImage: "url()",paddingTop:"140px",backgroundRepeat: 'no-repeat' }}>
                <Container>  
                    <h1 style={{ fontSize: "50px", color: "black", position:"relative",marginBottom:"0" }}>Coining Package</h1>
                    <img src="/section3-title-line.png" alt="currencyimg" width="100%" style={{position:"absolute",width:"100%",maxWidth:"min-content",left:"39%"}} />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img src="/section2-package.png" alt="packageimg" width="100%" />
                        </Grid>
                        <Grid item xs={6}>
                        <Paper style={{borderRadius:"20px"}}>
                            <Typography variant="subtitle1" color="textSecondary">
                                
                                <div style={{padding:"20px"}}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        <h2 style={{ textAlign: "left", fontSize: "40px", color: "black", lineHeight: "0px" }}> 500 BUSD<span style={{fontSize:"20px"}}>/Pakage</span></h2>
                                    </Typography>
                                    <Grid container spacing={3}>
                                        
                                        <Grid item xs={6}>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Daily Profit (APY)</Paper>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Duration</Paper>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Claim Lockup</Paper>
                                            
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
                                                <Paper  style={{boxShadow:"none"}} className={classes.paper}>0,25%</Paper>
                                                <Paper style={{boxShadow:"none",color:"#47C278",borderRadius:"50px 50px",border:" 2px solid #47C278", margin:"0px 47px", fontSize:"15px"}} className={classes.paper}>30 days</Paper>
                                                <Paper style={{boxShadow:"none"}} className={classes.paper}>48 Hour(s)</Paper>
                                            </Box>
                                        
                                        </Grid>
                                        
                                    </Grid>
                                    <Divider className={classes.divider} />
                                    <Grid container spacing={3}>
                                        
                                        <Grid item xs={6}>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Earned</Paper>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>--USxD</Paper>
                                        
                                            
                                        </Grid>
                                        <Grid item xs={6}  style={{borderRadius:"50px 50px",border:" 2px solid #DBDFE6"}}>
                                        
                                            <Grid item xs={3}>
                                            <Paper style={{boxShadow:"none"}} className={classes.paper}>Quantity to purchase</Paper>
                                            <Paper  style={{boxShadow:"none"}} className={classes.paper}>2</Paper>
                                        
                                            </Grid>

                                            
                                        </Grid>
                                        
                                    </Grid>
                                    <Button variant="contained" color="primary" style={{padding:"16px", marginTop:"20px", width:"100%",
                                    borderRadius:"12px", backgroundColor:"#47C278", fontSize:"16px",lineHeight:"24px"}}>Authorize BUSD</Button>
                                    
                                    
                                </div>
                                </Typography>
                            </Paper>    
                        </Grid>

                    </Grid>
                </Container>
            </div>  

            <div style={{ backgroundImage: "url()",paddingTop:"100px", paddingBottom:"100px",backgroundRepeat: 'no-repeat' }}>
                <Container>  
                    <h1 style={{ fontSize: "50px", color: "black", marginBottom:"0" }}>Network Building</h1>
                    <img src="/section3-title-line.png" alt="currencyimg" width="100%" style={{position:"absolute",width:"100%",maxWidth:"min-content",left:"39%"}} />
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
        </div>
    )
};

export default Home