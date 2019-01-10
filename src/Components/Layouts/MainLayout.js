import React, { Component, Fragment } from 'react';
import Header from './Header';
import Content  from '../Content/';


export default class extends Component {

    state ={
        currentUser : {
            username: '',
        },
        transactions : [
            { provider: 'Visa Card', amount: '483', reference: 'B43545', account: '499320', narration: 'Good services', paid: false }
        ]
    }


    componentDidMount(){
        const { currentUser } = this.state;
        const { user } = this.props;
        currentUser.username = user.username;
        this.setState({currentUser})
    }

    handleTransaction = (transaction) => {
        this.setState(({transactions})=> ({
            transactions : [...transactions, transaction]
        }))
        console.log(transaction)
    }

    handleDelete = (account) => {
        this.setState(({transactions}) => ({
            transactions: transactions.filter(ot => {return ot.account !== account })
        }))
    }

    handlePayment = (account, value) => {
        this.setState(({transactions}) => ({
            transactions: transactions.map(ot => {if(ot.account === account){ ot.paid = value;} return ot})
        }))
    }

    render() {
        const { currentUser, transactions } = this.state;

        return <Fragment>
        <Header { ...currentUser }  />
        <Content transactions={transactions} onCreateTransaction={this.handleTransaction} onDelete={this.handleDelete} onMakePayment={this.handlePayment}/>
        </Fragment>
    }
}