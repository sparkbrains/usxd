import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
const Registerstep2 = () => {

    useEffect(() => {
        document.title = "Register-step2"
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
                                    <Grid item container justify="center" style={{ marginTop: "20px" }}>


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
                                        <h1> BUSD authorization</h1>
                                        <p>Confirmation of the BUSD token to interact with the USxD contract. At this step,
                                            you do not spen BUSD yet, but only give permission that BUSD form your wallet can be spent on the contract</p>

                                    </CardContent>
                                </CardActionArea>
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
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    label="ID Wallet address"
                                    required
                                    fullWidth
                                    name="name"
                                    autoComplete="name"
                                />

                                <Button
                                    style={{

                                        color: "#DBDFE6", borderRadius: " 12px 12px", padding: "10px 95px",
                                        fontSize: "16px", marginTop: "10px", textTransform: "capitalize",backgroundColor:"#F3F4F7"
                                    }}

                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    size="medium" color="primary">
                                    Authorize BUSD
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>


    )
};

export default Registerstep2