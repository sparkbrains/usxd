
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {

    useEffect(() => {
        document.title = "Login"
    }, [])
    return (
        <div>
            <Container>
            <h1>Login</h1>
                <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Card className="card"  style={{ padding:"10px", borderRadius: "30px" , border:"1px #c4c4c4a3 solid" }}>
                            <CardActionArea>

                                <h1> Login to Personad USxB</h1>
                                <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging</p>

                            </CardActionArea>
                            <Grid container justify="center">
                                <Button
                                    style={{
                                        backgroundColor: "#47C278",
                                        color: "white", borderRadius: " 12px 12px", padding: "10px 45px",
                                        fontSize: "16px", marginTop: "60px",textTransform: "capitalize"
                                    }}

                                    type="submit"
                                    variant="outlined"
                                    fullWidth
                                    size="medium" color="primary">
                                    Connect a Wallet
                                </Button>
                            </Grid>
                            <hr />
                            <Grid container className="link">
                                <Grid item  justify="center">


                                    <Link href="" variant="body2">
                                        {"Registration in USxD"}
                                    </Link>

                                </Grid>
                                <Grid item style={{textAlign:"right"}}>
                                    <Link href="" variant="body2">
                                        {"Don't have an account? "}
                                    </Link>

                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className="card" raised={true} style={{ padding:"17px", borderRadius: "30px"  }}>
                            <CardActionArea>

                                <CardContent>
                                    <h1> View account</h1>

                                </CardContent>
                            </CardActionArea>
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
                                       
                                        color: "black", borderRadius: " 12px 12px", padding: "10px 95px",
                                        fontSize: "16px", textTransform: "capitalize"
                                    }}

                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    size="medium" color="primary">
                                   View
                                </Button>
                        </Card>
                    </Grid>
                </Grid>
                </div>
            </Container>
        </div>


    )
};

export default Login