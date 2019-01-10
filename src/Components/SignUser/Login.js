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
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';



const styles = theme => ({

  paper: {
    padding: 50,
    marginTop: 100,
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
      username: '',
      password: '',
      showPassword: false,
      usernameError: '',
      passwordError: '',
    };
  
    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };
  
    handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit = () => {
      const { username, password } = this.state;
      const validate = this.handleValidation(username, password);

      if(!validate){
        this.props.onSubmit(username, password)
        this.setState({username: '',
        password: '',
        showPassword: false,
        usernameError: '',
        passwordError: '',})
      }
    }

    handleValidation = (username, password) => {
      let error = false;
      const errors = {};

      if(username.length === 0){ error = true; errors.usernameError = 'empty'}  
      if(password.length === 0){ error = true; errors.passwordError = 'empty'}
      
      //i have to reset the whole state with new object
      if(error){
        this.setState({
          ...this.state, 
          ...errors
        })
      }
  
      return error

    }

  
    render() {
        const { classes } = this.props;
        const { username, password, showPassword, usernameError, passwordError } = this.state;


  return (

    <Grid container>
        <Grid item sm></Grid>
        <Grid item sm>
        <Paper className={classes.paper}>
        <Typography align="center"> <IconButton><AccountCircle color="primary" style={{ fontSize: 120 }} /></IconButton></Typography>

        <TextField
                id="Username"
                variant="filled"
                className={classNames(classes.margin, classes.textField)}
                label="Username"
                type="text"
                value={username}
                error={!!usernameError}
                helperText={usernameError}
                onChange={this.handleChange('username')}
                fullWidth/>
        <TextField
                  id="filled-adornment-password"
                  className={classNames(classes.margin, classes.textField)}
                  variant="filled"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  value={password}
                  error={!!passwordError}
                  helperText={passwordError}
                  onChange={this.handleChange('password')}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment variant="filled" position="end">
                        <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

    <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.handleSubmit} fullWidth>Login</Button>
    <Typography align="center"> Don't have an account?</Typography>
    <Link to='/Register'><Typography align="center"> <Button color="primary">REGISTER NOW</Button></Typography></Link>


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