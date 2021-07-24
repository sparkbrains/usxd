import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link, } from 'react-router-dom';
import { PostAdd } from '@material-ui/icons';


import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 180;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {

    window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {

    const [expanded, setExpanded] = React.useState<string[]>([]);
    const [selected, setSelected] = React.useState<string[]>([]);

    const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
        setSelected(nodeIds);
    };
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
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
                    <ExpandMoreIcon />
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

            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>

            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>

            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">

                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt

                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla

                </Typography>
            </main>
        </div>
    );
}