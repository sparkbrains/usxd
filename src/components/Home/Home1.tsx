
import { Typography, } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box'

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
                            <h1 style={{ textAlign: "left", fontSize: "55px", color: "black" }}> Create in Decentralized Economy</h1>
                            <p style={{ textAlign: "left", marginLeft: "30px", marginRight: "30px", marginBottom: "50px" }}>
                                We have a master's expertise in mobile app development and helps you to get maximum ROI and boost sales.
                            </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="/section1-currency.png" width="100%" />
                    </Grid>
                </Grid>
                <h1 style={{ fontSize: "55px", color: "black" }}> Features of Dexconomy Platform and USxd Stablecoin</h1>
                <Box flexDirection="row">
                <Grid item xs={4}>
                    <Card className="card">
                        <CardActionArea>
                            <img src="/section2-currency.png" height="140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardActionArea>
                            <img src="/section2-currency.png" height="140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardActionArea>
                            <img src="/section2-currency.png" height="140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                </Box>
            </Container>
        </div>


    )
};

export default Home