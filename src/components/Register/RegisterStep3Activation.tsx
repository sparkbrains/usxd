import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const RegisterStep3Activation = () => {

    useEffect(() => {
        document.title = "RegisterStep3Activation"
    }, [])



    return (
        <div>
            <Container>
                
                <div style={{marginTop:"50px"}} >
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Card className="card" raised={true} style={{ padding: "10px", borderRadius: "30px" }}>
                                <CardActionArea>
                                    <div style={{  padding: "15px" }}>
                                        <h1> USxD community</h1>
                                        
                                    </div>
                                </CardActionArea>
                                <Grid container justify="center">
                                    
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
                                        <h1> Goes activation</h1>
                                        <p>Wait for your account to be activated. You can login to your personal account after confirming the transaction in the blockchain by clicking on the login button</p>
                                            <p>A BNB transaction requires BNB to pay network fees</p>

                                    </CardContent>
                                </CardActionArea>
                                
                                
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>


    )
};

export default RegisterStep3Activation