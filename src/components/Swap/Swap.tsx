import React from 'react'
import './Swap.css'
import {
    LineStyle,
    MonetizationOn, SupervisedUserCircleSharp,
} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
           
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
               
            },
        },
    },
}))(MenuItem);

export default function Sidebar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="Sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarmenu">

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            < LineStyle className="sidebarIcon" />
                            Dashboard
                        </li>



                    </ul>
                    <div style={{textAlign: "left" ,backgroundColor:"white"}}>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                           Exchange
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="On PancakeSwap" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Swap" />
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>

                </div>
                
                <div className="sidebarmenu">
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            < SupervisedUserCircleSharp className="sidebarIcon" />
                            Network building
                        </li>
                    </ul>

                </div>
                <div className="sidebarmenu">
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            < MonetizationOn className="sidebarIcon" />
                            Coining package
                        </li>
                    </ul>

                </div>
                <div className="sidebarmenu">
                   
                    <div style={{textAlign: "left" ,backgroundColor:"white"}}>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            More Infomation
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <SendIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Audit" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary=" Document" />
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>

                </div>
            </div>
        </div >
    )
}
