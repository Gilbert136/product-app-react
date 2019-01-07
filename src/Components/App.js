import React, { Component, Fragment } from 'react';
import { Header } from './Layouts/';
import Content  from './Content/';
import CssBaseline from '@material-ui/core/CssBaseline';


export default class extends Component {
  render() {
    return <Fragment>
      <CssBaseline />
      <Header />

      <Content />

    </Fragment>
  }
}