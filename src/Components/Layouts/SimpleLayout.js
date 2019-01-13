import React, { Component, Fragment } from 'react';
import HeaderSimple from './HeaderSimple';
import SignUser  from '../SignUser/';


export default class extends Component {


     
  render() {
    const { match, history, loginSubmit, registerSubmit, auth, user} = this.props;
    return <Fragment>
        <HeaderSimple />
        <SignUser match = {match} loginSubmit={loginSubmit} history={history} auth={auth} registerSubmit={registerSubmit} user = {user}/>
    </Fragment>
  }
}