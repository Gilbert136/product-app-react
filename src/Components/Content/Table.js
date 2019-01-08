import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';




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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Visa Card', 159, 6.0, 24, 'Unpaid'),
  createData('MTN Momo', 237, 9.0, 37, 'Paid'),
  createData('Master Card', 262, 16.0, 24, 'Unpaid.'),
  createData('Express', 305, 3.7, 67, 'Paid'),
  createData('Android Wallet', 356, 16.0, 49, 'Paid'),
];

function SimpleTable(props) {
  const { classes } = props;

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
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right"> <Button variant="outlined"> Make Payment </Button></TableCell>
                <TableCell align="right">
                  <IconButton aria-label="Delete" className={classes.margin}> <Visibility /></IconButton>
                  <IconButton aria-label="Delete" className={classes.margin}> <DeleteIcon /></IconButton>
                </TableCell>
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