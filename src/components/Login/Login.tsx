import { Typography, } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Login = () => {

    useEffect(() => {
        document.title = "Login"
    }, [])
    return (
        <div>
            <Container>
                <div style={{ display: "flex", marginTop: "50px" }}>
                    
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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

export default Login