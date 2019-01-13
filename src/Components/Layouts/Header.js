import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '../Content/Menu';


const styles = theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    
    });


export default withStyles(styles)(
    ({classes, user }) => 
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton aria-haspopup="true" color="inherit"> <WorkIcon /></IconButton>
            <Typography variant="h5" color="inherit" noWrap> Proapp </Typography>
            <div className={classes.grow} />
            <Typography variant="h6" color="inherit" noWrap>{user.username}</Typography>
            <IconButton aria-haspopup="true" color="inherit"> <AccountCircle /></IconButton>
            <Menu />
        </Toolbar>
    </AppBar>
)