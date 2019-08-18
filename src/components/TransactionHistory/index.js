import React, { Component } from "react";
import { connect } from 'react-redux';
import stycom from "styled-components";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TransactionHistory extends Component {

    constructor(props){
        super(props);

        this.state = {
            transactionList: this.props.transactions
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ transactionList: this.props.transactions }), 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return (
            <div>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>To</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Type</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                        {this.state.transactionList.map(transaction => (
                            <TableRow key={transaction._id}>
                                <TableCell align="left">
                                {transaction.to.user.legal_names[0]}
                                </TableCell>
                                <TableCell align="right">{transaction._id}</TableCell>
                                <TableCell align="right">{transaction.amount.amount} {transaction.amount.currency}</TableCell>
                                <TableCell align="right">{transaction.from.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transactionHistory: state.transactions,
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, {})(TransactionHistory);
