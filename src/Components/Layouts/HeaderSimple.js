import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
            <IconButton aria-haspopup="true" color="inherit"> <WorkIcon /></IconButton>
            <Typography variant="h5" color="inherit" noWrap> Proapp </Typography>
            <div className={classes.grow} />
            <Link to='/Login'><Typography align="center"> <Button variant="contained">Login</Button></Typography></Link>
            <Link to='/Register'><Typography align="center"> <Button color="inherit">Register</Button></Typography></Link>
            </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);