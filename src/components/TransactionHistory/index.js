import React, { Component } from "react";
import { connect } from 'react-redux';
import stycom from "styled-components";

import { getTransaction } from '../../actions';

const Styles = stycom.div`

`;

class TransactionHistory extends Component {

    constructor(props){
        super(props);

        this.state = {

        }

    }


    render(){
        return (
            <div>
                TransactionHistory
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
