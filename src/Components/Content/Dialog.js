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
    value: 'MTN Momo',
    label: 'MTN Momo',
  },
  {
    value: 'Visa Card',
    label: 'Visa Card',
  },
  {
    value: 'Master Card',
    label: 'Master Card',
  },
];

class FormDialog extends React.Component {
  state = {
    open: false,
    transaction: {
      provider: '',
      amount: '',
      reference: '',
      account: '',
      narration: '',
      paid: false,
    },
    transactionError:{
      providerError: '',
      amountError: '',
      referenceError: '',
      accountError: '',
      narrationError:'',
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    const { transaction } = this.state;
    const validate = this.handleValidation(transaction)

    if(!validate){
      this.props.onCreate({...transaction, id: transaction.account});
      this.setState({ open: false, 
            transaction: { provider: '', amount: '',reference: '',account: '', narration: '', paid: false},
            transactionError:{ providerError: '', amountError: '', referenceError: '', accountError: '', narrationError:''}
          })
    }
  };

  handleValidation = (transaction) => {
    let error = false;
    const errors = {};
    if(transaction.provider.length === 0){ error = true; errors.providerError = 'empty'} 
    if(transaction.amount.length === 0){ error = true; errors.amountError = 'empty'}
    if(transaction.reference.length === 0){ error = true; errors.referenceError = 'empty'}
    if(transaction.account.length === 0){ error = true; errors.accountError = 'empty'}
    if(transaction.narration.length === 0){ error = true; errors.narrationError = 'empty'}

    if(error){
      this.setState({transactionError : errors })
    }

    return error
  }

  handleChange = name => ({target: {value}}) => {
    this.setState({ 
      transaction: {
        ...this.state.transaction,
        [name]: value 
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { open, 
            transaction: { provider, amount, reference, account, narration }, 
            transactionError: { providerError, amountError, referenceError, accountError, narrationError }, } = this.state

    return (
      
      <div> 
        <Fab variant="extended" color="primary" aria-label="Add" className={classNames(classes.margin, classes.marginTop)} onClick={this.handleClickOpen}>
          <AddIcon  className={classes.extendedIcon}/> Add Transaction
        </Fab>


        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">+ Add Transaction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide information on the transaction
            </DialogContentText>

          <TextField
            label="Pay Provider"
            className={classNames(classes.margin, classes.textField)}
            value={provider}
            onChange={this.handleChange('provider')}
            fullWidth
            error={!!providerError}
            helperText={providerError}
            select>
            {ranges.map(option => ( <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem> ))}
          </TextField>

          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            value={amount}
            onChange={this.handleChange('amount')}
            type="text"
          error={!!amountError}
            helperText={amountError}
            fullWidth/>

        <TextField
          id="narrator"
          label="Narration"
          multiline
          rowsMax="4"
          value={narration}
          onChange={this.handleChange('narration')}
          className={classes.textField}
          margin="normal"
          error={!!narrationError}
          helperText={narrationError }
          fullWidth/>

          <TextField
            margin="dense"
            id="ref-number"
            label="Reference Number"
            value={reference}
            onChange={this.handleChange('reference')}
            type="text"
            error={!!referenceError}
            helperText={referenceError}
            fullWidth/>

          <TextField
            margin="dense"
            id="acc-number"
            label="Account Number"
            type="number"
            value={account}
            onChange={this.handleChange('account')}
            error={!!accountError}
            helperText={accountError}
            fullWidth/>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary"> Cancel</Button>
            <Button onClick={this.handleSubmit} color="primary" variant="contained">Add</Button>
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