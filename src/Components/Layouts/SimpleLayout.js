import React, { Component, Fragment } from 'react';
import HeaderSimple from './HeaderSimple';
import SignUser  from '../SignUser/';


export default class extends Component {
     
  render() {
    const { match } = this.props;
    return <Fragment>
        <HeaderSimple />
        <SignUser {...match }/>
    </Fragment>
  }
}