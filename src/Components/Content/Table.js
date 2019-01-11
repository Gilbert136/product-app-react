import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TDialog from './TDialog';





const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    Width: 100,
  },
});



function SimpleTable(props) {
  const { classes, transactions, onDelete, onMakePayment } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Pay Provider</TableCell>
            <TableCell align="right">Amount($)</TableCell>
            <TableCell align="right">Ref No.</TableCell>
            <TableCell align="right">Acc No.</TableCell>
            <TableCell align="right">Paid/Not Paid</TableCell>
            <TableCell align="right">Options</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => {
            return (
              <TableRow key={transaction.account}>
                <TableCell component="th" scope="transaction">{transaction.provider}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">{transaction.reference}</TableCell>
                <TableCell align="right">{transaction.account}</TableCell>
                <TableCell align="right">{transaction.paid ? "Paid" : "Not paid"} </TableCell>
                <TableCell align="right"><TDialog transaction={transaction} onDelete={onDelete} onMakePayment={onMakePayment}/></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);