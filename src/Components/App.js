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
    }
  }

  handleSubmit = (username, password)=> {
    this.handleValidation({username:username, password:password})
  }

  handleValidation = (user) => {
    this.setState({user:{...user, company:'', email:'', regNumber:''}})
    return <Redirect to="/Transaction"/>
  }


  render() {
    const {user} = this.state;

    return <BrowserRouter>
      <Fragment>
        <CssBaseline />
        {/* <Header /> */}

        {/* <Route exact path='/' render={(props)=><div>home</div>}/>
        <Route path='/Login' render={(props)=><div>how are you</div>}/>
        <Route path='/Register' render={(props)=><div>how you</div>}/>
        <Route path='/:username' render={(props)=><div> are you</div>}/> */}
        
        <Route exact path='/' render={(props)=><SimpleLayout {...props} onSubmit={this.handleSubmit}/>}></Route>
        <Route path='/:username/Transaction' render={()=><MainLayout user = {user}/>}></Route>
    
        <Route path='/Login' render={(props)=><SimpleLayout {...props} onSubmit={this.handleSubmit} />}></Route>
        <Route path='/Register' render={(props)=><SimpleLayout {...props}/>}></Route>
      </Fragment>
    </BrowserRouter>
  }
}