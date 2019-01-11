import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Search from './Search';
import Sidemenu from './Sidemenu';
import Dialog from './Dialog';
import Table from './Table';



const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 0,
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});


export default withStyles(styles)(({classes, onCreateTransaction, transactions, onDelete, onMakePayment, updateSearch}) => 
    <div className={classes.root}>
    <div className={classes.toolbar} />
        <Sidemenu />
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Search updateSearch = {updateSearch}/>
            <Table transactions={transactions}  onDelete={onDelete} onMakePayment={onMakePayment}/>
            <Dialog onCreate={onCreateTransaction}/>
        </div>
    </div>
)