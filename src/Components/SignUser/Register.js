import React, { Fragment } from 'react';
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
import { Link } from 'react-router-dom';






const styles = theme => ({

  paper: {
    padding: 30,
    marginTop: 100,
    marginBottom: 30,
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
      newUser: {
        username: '',
        company: '',
        email: '',
        regNumber: '',
        password: '',
        conpassword:'',},
      newuserError: {
        usernameError: '',
        companyError: '',
        emailError: '',
        regError: '',
        passwordError: '',
        conpasswordError: ''},
      snackBarvalue: 'You are registered',
      isRegistered: false,
      showPassword: false
    };
  
    handleChange = prop => event => {
      this.setState({ newUser: {...this.state.newUser, [prop]:event.target.value} })
     
    };
  
    handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleSubmit = () => {
      const { newUser } = this.state;
      const validate = this.handleValidation(newUser)

      if(!validate){
        this.props.registerSubmit(newUser);
        this.setState({
          // newUser: { username: '', company: '', email: '', regNumber: '',  password: '', conpassword:''},
          // newuserError: { usernameError: '', companyError: '', emailError: '', regError: '', passwordError: '', conpasswordError: ''},
          isRegistered: true, showPassword: false
        })
      }
    }

    handleValidation = (newUser) => {
      let error = false;
      const errors = {};

      if(newUser.username.length === 0){ error = true; errors.usernameError = 'empty'} 
      if(newUser.company.length === 0){ error = true; errors.companyError = 'empty'} 
      if(newUser.email.indexOf('@') === -1){ error = true; errors.emailError = 'not Email'} 
      if(newUser.regNumber.length === 0){ error = true; errors.regError = 'empty'} 
      if(newUser.password.length === 0){ error = true; errors.passwordError = 'empty'} 
      if(newUser.conpassword !== newUser.password){ error = true; errors.conpasswordError = 'password not the same'} 

      if(error){
        this.setState({newuserError : errors })
      }

      return error
    }
  
    render() {
      const {
        newUser: { username, company, email, regNumber,  password, conpassword},
        newuserError: { usernameError, companyError, emailError, regError, passwordError, conpasswordError},
        snackBarvalue, isRegistered}  = this.state;
      const { classes } = this.props;

  return (

    <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          
          <Paper className={classes.paper}>
            {(isRegistered) ? <Typography  align="center"> {snackBarvalue}</Typography> :
            <Fragment>
              <Typography  variant="h6" align="center" color="primary"> + Add an account</Typography>        
              <TextField
                      id="Username"
                      variant="filled"
                      className={classNames(classes.margin, classes.textField)}
                      label="Username"
                      onChange={this.handleChange('username')}
                      type="text"
                      value={username}
                      error={!!usernameError}
                      helperText={usernameError}
                      fullWidth/>
              <TextField
                      id="Company"
                      variant="filled"
                      className={classNames(classes.margin, classes.textField)}
                      label="Company"
                      onChange={this.handleChange('company')}
                      type="text"
                      value={company}
                      error={!!companyError}
                      helperText={companyError}
                      fullWidth/>
              <TextField
                      id="Email"
                      variant="filled"
                      className={classNames(classes.margin, classes.textField)}
                      label="Email"
                      type="email"
                      value={email}
                      onChange={this.handleChange('email')}
                      error={!!emailError}
                      helperText={emailError}
                      fullWidth/>
              <TextField
                      id="Reg-No"
                      variant="filled"
                      className={classNames(classes.margin, classes.textField)}
                      label="Registration Number"
                      onChange={this.handleChange('regNumber')}
                      error={!!regError}
                      helperText={regError}
                      value={regNumber}
                      type="text"
                      fullWidth/>
              <TextField
                        id="filled-adornment-password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={password}
                        onChange={this.handleChange('password')}
                        fullWidth
                        error={!!passwordError}
                        helperText={passwordError}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment variant="filled" position="end">
                              <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}> {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment> ), }} />
              <TextField
                        id="filled-adornment-password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="filled"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Confirm password"
                        onChange={this.handleChange('conpassword')}
                        fullWidth
                        value={conpassword}
                        error={!!conpasswordError}
                        helperText={conpasswordError}
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

              <Button variant="contained" size="large" color="primary" className={classes.margin } onClick={this.handleSubmit} fullWidth>Register</Button>
              <Typography  align="center"> I have an account already</Typography>
              </Fragment>
            }
            <Typography align="center"><Link to='/Login'> <Button color="primary">LOGIN NOW</Button></Link></Typography>
          </Paper>
        </Grid>
        <Grid item sm={2}></Grid>
    </Grid>
  );
}}

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(InputAdornments);