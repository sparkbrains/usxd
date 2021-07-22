import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const RegisterStep3= () => {

    useEffect(() => {
        document.title = "RegisterStep3"
    }, [])



    return (
        <div>
            <Container>
                <h1>Register</h1>
                <div >
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Card className="card" raised={true} style={{ padding: "10px", borderRadius: "30px" }}>
                                <CardActionArea>
                                    <div style={{ textAlign: "left", padding: "15px" }}>
                                        <h1> Checklist before registration</h1>
                                        <p >1.Create a cruptocurrency wallet on the Smart Chain. Recommended wallets: Metamask, Tokenpocket,Trust.</p>
                                        <p>2. Top up your wallet with at least:</p>
                                        <p>.100 BUSD with ID address</p>
                                        <p>.200 BUSD without ID address</p>
                                        <p>It is recommended to buy cryptocurrency on Binance.com or use PancakeSwap.finance for exchange.</p>
                                        <p>3. For mobile devices: make sure you are accessing the USxD website using the Dapp browser.</p>
                                        <p> 4. For PC: go to the USxD website with the MetaMask extension installed.</p>

                                        <p>5. Before completing the registration, check your referral address</p>
                                    </div>
                                </CardActionArea>
                                <Grid container justify="center">
                                    <Button
                                        style={{
                                            color: "#47C278",
                                            borderRadius: " 12px 12px", padding: "10px 45px",
                                            fontSize: "16px", marginTop: "60px", textTransform: "capitalize"
                                        }}

                                        type="submit"
                                        variant="outlined"
                                        fullWidth
                                        size="medium" color="primary">
                                        Read All About Registration
                                    </Button>
                                </Grid>
                                <Grid container className="link">
                                    <Grid item container justify="center" style={{ marginTop: "20px",color:"#191D24"}}>


                                        <Link href="" variant="body2">
                                            {"Need help singing up? Write to us in support"}
                                        </Link>

                                    </Grid>

                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="card" raised={true} style={{ padding: "17px", borderRadius: "30px" }}>
                                <CardActionArea>

                                    <CardContent>
                                        <h1>Create an account</h1>
                                        <p>Sending 100 BUSD for registration, as well as paying network commission to BNB. After confirming the transaction, you will be registered on the platform</p>
                                            <p>
                                            Sending BUSD directly to the contract without prior approval in the previous step will cause an error and the transaction will not go through
                                            </p>

                                    </CardContent>
                                </CardActionArea>
                               
                                   

                                <Button
                                    style={{

                                        color: "#FFFFFF", borderRadius: " 12px 12px", padding: "10px 95px",
                                        fontSize: "16px", marginTop: "10px", textTransform: "capitalize",backgroundColor:"#47C278"
                                    }}

                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    size="medium" color="primary">
                                    Register Now
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>


    )
};

export default RegisterStep3