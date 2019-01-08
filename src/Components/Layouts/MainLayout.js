import React, { Component, Fragment } from 'react';
import Header from './Header';
import Content  from '../Content/';


export default class extends Component {

    state ={
        user : {
            username: 'Theresah',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
        }
    }

    componentDidMount(){
        let state = this.state;
        state.user.username = this.props.match.params.username;
        this.setState({state})
    }

    render() {
        const { user } = this.state;

        return <Fragment>
        <Header { ...user } />
        <Content />
        </Fragment>
    }
}