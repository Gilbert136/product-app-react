import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Visibility from '@material-ui/icons/Visibility';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}> <Visibility /></IconButton>

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Transaction
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Make Payment
              </Button>
              <Button color="inherit" onClick={this.handleClose}>
                Delete
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Transaction Identification" secondary="ID3847563" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Pay Provider" secondary="MTN Momo" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Amount(cedis)" secondary="600" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Reference Number" secondary="IR48984DE" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Account Number" secondary="38489EFJJUI8848399" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Narration" secondary="Company transaction platform" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Paid/Not paid" secondary="Not Paid" />
            </ListItem>
            <Divider />
          </List>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);