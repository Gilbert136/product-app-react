import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  marginTop:{
    marginTop: 20,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const ranges = [
  {
    value: 'MTN-Momo',
    label: 'MTN Momo',
  },
  {
    value: 'Visa-Card',
    label: 'Visa Card',
  },
  {
    value: 'Master-Card',
    label: 'Master Card',
  },
];

class FormDialog extends React.Component {
  state = {
    open: false,
    weightRange: '',
    multiLine: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      
      <div> 
        <Fab variant="extended" color="primary" aria-label="Add" className={classNames(classes.margin, classes.marginTop)} onClick={this.handleClickOpen}>
          <AddIcon  className={classes.extendedIcon}/> Add Transaction
        </Fab>


        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">+ Add Transaction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide information on the transaction
            </DialogContentText>

          <TextField
            label="Pay Provider"
            className={classNames(classes.margin, classes.textField)}
            value={this.state.weightRange}
            onChange={this.handleChange('weightRange')}
            fullWidth
            select
            >
            {ranges.map(option => ( <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem> ))}
          </TextField>

          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="text"
            fullWidth/>

        <TextField
          id="narrator"
          label="Narrator"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          helperText="Add a brief description"
          fullWidth/>

          <TextField
            margin="dense"
            id="ref-number"
            label="Reference Number"
            type="text"
            fullWidth/>

          <TextField
            margin="dense"
            id="acc-number"
            label="Account Number"
            type="number"
            fullWidth/>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);