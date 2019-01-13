import React, { Component, Fragment } from 'react';
import Header from './Header';
import Content  from '../Content/';


export default class extends Component {

    state ={
        currentUser : {
            username: 'Kobby',
        },
        transactions : [
            { provider: 'Visa Card', amount: '483', reference: 'B43545', account: '499320', narration: 'Good services', paid: false }
        ],
        search: '',
        filterTransaction : []
    }


    componentDidMount(){
        console.log(this.props);
        const { match:{params}} = this.props;
        this.setState(({transactions})=>({ 
            filterTransaction:transactions, currentUser : params
        }))
    }

    handleTransaction = (transaction) => {
        this.setState(({transactions})=> ({
            transactions : [...transactions, transaction],
            filterTransaction : [...transactions, transaction ] 
        }))
        console.log(transaction)
    }

    handleDelete = (account) => {
        this.setState(({transactions}) => ({
            transactions: transactions.filter(ot => {return ot.account !== account }),
            filterTransaction: transactions.filter(ot => {return ot.account !== account })
        }))
    }

    handlePayment = (account, value) => {
        this.setState(({transactions}) => ({
            transactions: transactions.map(ot => {if(ot.account === account){ ot.paid = value;} return ot}),
            filterTransaction: transactions.map(ot => {if(ot.account === account){ ot.paid = value;} return ot}),
        }))
    }

    handleSearch = ({target: {value}}) => {
        const { transactions } = this.state

        console.log(value);
        if(value.length === 0){
            this.setState(({transactions})=>({ filterTransaction:[...transactions]}))
        }else{
            let filterTrans = transactions.filter((trans)=>{return trans.provider.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1})
            console.log(filterTrans)
            this.setState({filterTransaction:filterTrans})
        }
    }
    

    render() {
        const { currentUser, filterTransaction } = this.state;

        return <Fragment>
        <Header user = {currentUser}  />
        <Content 
            transactions={filterTransaction} 
            onCreateTransaction={this.handleTransaction} 
            onDelete={this.handleDelete} 
            onMakePayment={this.handlePayment}
            updateSearch = {this.handleSearch}
            />
        </Fragment>
    }
}