import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import {SimpleLayout, MainLayout } from './Layouts';


export default class extends Component {
  state={
    user : {
      username: '',
      password: '',
      company: '',
      email: '',
      regNumber: '',
    }, 
    isAuthenticated: false,
    users : []
  }

  handleLoginSubmit = (username, password)=> {
    this.handleValidation({username:username, password:password})
  }

  handleValidation = (user) => {
    const {users} = this.state;

    if((user.username.length !== 0) && (user.password.length !== 0)){
      let userValid = users.filter((regUser)=>{return ((regUser.username === user.username) && (regUser.password === user.password))})
      if(userValid.length){
        this.setState({user:userValid, isAuthenticated:true});
      }
      
    }
  }

  handleRegisterSubmit = (user) => {
    this.setState(({users}) => ( {users : [...users, user]}))

  }

  render() {
    const {isAuthenticated, user} = this.state;
    return <BrowserRouter>
      <Fragment>
        <CssBaseline />

        <Route exact path='/' render={(props)=><SimpleLayout {...props} onSubmit={this.handleSubmit}/>}></Route>
        <Route path='/:username/Transaction' render={(props)=><MainLayout {...props} user = {user}/>}></Route>
    
        <Route path='/Login' render={(props)=><SimpleLayout {...props} loginSubmit={this.handleLoginSubmit} auth={ isAuthenticated} user = {user}/>}></Route>
        <Route path='/Register' render={(props)=><SimpleLayout {...props} registerSubmit={this.handleRegisterSubmit} />}></Route>
      </Fragment>
    </BrowserRouter>
  }
}