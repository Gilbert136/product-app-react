import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AccountCircle from '@material-ui/icons/AccountCircle';





const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: { display: 'block',},
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': { backgroundColor: fade(theme.palette.common.white, 0.25),},
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {marginLeft: theme.spacing.unit * 3, width: 'auto',},
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: { color: 'inherit', width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: { width: 120, '&:focus': { width: 200,},
        },
      },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });


export default withStyles(styles)(
    ({classes}) => 
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Typography className={classes.title} variant="h5" color="inherit" noWrap> Product App </Typography>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }}/>
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
            <IconButton aria-haspopup="true" color="inherit"> <AccountCircle /></IconButton>
        </div>
        <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true"  color="inherit">
            <MoreIcon />
            </IconButton>
        </div>
        </Toolbar>
    </AppBar>)