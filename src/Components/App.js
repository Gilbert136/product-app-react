import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { MainLayout, SimpleLayout } from './Layouts/';
import CssBaseline from '@material-ui/core/CssBaseline';


export default class extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <CssBaseline />

        <Route exact path='/' render={(props)=><SimpleLayout {...props} />}></Route>
        <Route path='/:username/Transaction' render={(props)=><MainLayout {...props}/>}></Route>
        
        <Route path='/Login' render={(props)=><SimpleLayout {...props} />}></Route>
        <Route path='/Register' render={(props)=><SimpleLayout {...props}/>}></Route>

      </Fragment>
    </BrowserRouter>
  }
}