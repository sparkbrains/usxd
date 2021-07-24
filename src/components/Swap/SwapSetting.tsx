import React from 'react';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { PostAdd } from '@material-ui/icons';
import { Link,  BrowserRouter as Router } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function CenteredGrid() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string[]>([]);
    const [selected, setSelected] = React.useState<string[]>([]);

    const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
        setSelected(nodeIds);
    };

    return (
        <Router>
            <div className={classes.root}>
                <Grid container spacing={3}>


                    <Grid item xs={3}>
                        <Paper className={classes.paper} style={{ marginRight: "60px", paddingTop: "150px", marginLeft: "20px" }}>

                            <TreeView
                                className={classes.root}
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                                expanded={expanded}
                                selected={selected}
                                onNodeToggle={handleToggle}
                                onNodeSelect={handleSelect}
                            >
                                <Link className="id" to="/Dashboard">
                                    <ListItem button key={'Dashboard'}>
                                        <ListItemText primary={'Dashboard'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                    </ListItem>
                                </Link>
                               
                                <TreeItem nodeId="1" label="Exchange" style={{ padding: "15px" }}>
                                    <Link className="id" to="/SelectToken">
                                        <ListItem button key={'SelectToken'}>
                                            <ListItemText primary={'On PancakeSwap'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                        </ListItem>
                                    </Link>

                                    <Link className="id" to="/Swap1">
                                        <ListItem button key={'Swap1'}>
                                            <ListItemText primary={'Swap'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                        </ListItem>
                                    </Link>

                                </TreeItem>
                                <img src="./binance.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />

                                <Link className="id" to="/Network building">
                                    <ListItem button key={'Network building'}>
                                        <ListItemText primary={'Network building'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                    </ListItem>
                                </Link>
                                <Link className="id" to="/Coining package">
                                    <ListItem button key={'Coining package'}>
                                        <ListItemText primary={'Coining package'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                    </ListItem>
                                </Link>

                                <TreeItem nodeId="1" label="More Infomation" style={{ padding: "15px" }} >
                                    <Link className="id" to="/Audit">
                                        <ListItem button key={'Audit'}>
                                            <ListItemText primary={'Audit'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                        </ListItem>
                                    </Link>

                                    <PostAdd />
                                    <Link className="id" to="/Document">
                                        <ListItem button key={'Document'}>
                                            <ListItemText primary={'Document'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                        </ListItem>
                                    </Link>
                                </TreeItem>
                            </TreeView>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
         
        </Router>
    );
}