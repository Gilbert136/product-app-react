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


export default withStyles(styles)(({classes}) => 

    <div className={classes.root}>
    <div className={classes.toolbar} />
        <Sidemenu />
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Search />
            <Table />
             <Dialog />
        </div>
    </div>
)