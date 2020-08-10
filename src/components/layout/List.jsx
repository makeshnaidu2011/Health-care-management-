import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid';

function SideNav() {



    return (<>
        <Grid className={"sideNav"} item xs={12} sm={2}  >
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Collection center" />
                </ListItem>

            </List>

            <Divider />
            <List component="nav" >

                <Link to="/registration" >
                    <ListItem button >
                        <ListItemText primary="Registration" />
                    </ListItem>
                </Link>
                <Link to="/billing">
                    <ListItem button>
                        <ListItemText primary="Billing" />
                    </ListItem>
                </Link>
                <Link to="/sample">
                    <ListItem button >
                        <ListItemText primary="Sample Acession" />
                    </ListItem>
                </Link>
                <Link to="/organisation" >
                    <ListItem button>
                        <ListItemText primary="Organization Dashboard" />
                    </ListItem>
                </Link>
                <Link to="/archives" >
                    <ListItem button>
                        <ListItemText primary="Archives" />
                    </ListItem>
                </Link>
                <Link to="/collectionReport" >
                    <ListItem button>
                        <ListItemText primary="Collection report" />
                    </ListItem>
                </Link>
                <Link to="/adSearch" >
                    <ListItem button>
                        <ListItemText primary="Advance Search" />
                    </ListItem>
                </Link>




            </List>
        </Grid></>)
}
export default SideNav;