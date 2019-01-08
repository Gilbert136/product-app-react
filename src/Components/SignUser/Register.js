import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';





const styles = theme => ({

  paper: {
    padding: 30,
    marginTop: 20,
  },
  margin: {
    margin: theme.spacing.unit,
  },

  textField: {
    flexBasis: 200,
  }
});




  class InputAdornments extends React.Component {
    state = {
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    };
  
    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };
  
    handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };
  
    render() {
        const { classes } = this.props;
    


  return (

    <Grid container>
        <Grid item sm></Grid>
        <Grid item sm>
        <Paper className={classes.paper}>
        
        <TextField
                id="Username"
                variant="filled"
                className={classNames(classes.margin, classes.textField)}
                label="Username"
                type="text"
                fullWidth/>
        <TextField
                id="Company"
                variant="filled"
                className={classNames(classes.margin, classes.textField)}
                label="Company"
                type="text"
                fullWidth/>
        <TextField
                id="Email"
                variant="filled"
                className={classNames(classes.margin, classes.textField)}
                label="Email"
                type="email"
                fullWidth/>
        <TextField
                id="Reg-No"
                variant="filled"
                className={classNames(classes.margin, classes.textField)}
                label="Reg No."
                type="text"
                fullWidth/>
<TextField
          id="filled-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

<TextField
          id="filled-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="filled"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Confirm password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

<Button variant="contained" size="large" color="primary" className={classes.margin} fullWidth>Register</Button>
    <Typography  align="center"> I have an account already</Typography>
    <Typography align="center"> <Button color="primary">LOGIN NOW</Button></Typography>
    

        </Paper>
        </Grid>
        <Grid item sm></Grid>
    </Grid>
  );
}}

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(InputAdornments);