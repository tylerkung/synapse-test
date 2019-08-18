import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Home from "./Home";
import { logout, oauth } from '../../../actions';

class HomeTab extends Component {
    constructor(props){
        super(props);

        this.state = {}

        this.register = this.register.bind(this);
    }

    register(){
        this.props.history.push("/register");
    }

    render(){

        const viewUser = () => {
            console.log(this.props.currentUser.bankLinked);
        }

        const name = () => {
            if (this.props.currentUser){
                return this.props.currentUser.legal_names[0];
            }
            return 'User';
        }

        return (
            <Home
                onClickViewUser={viewUser}
                onClickRegister={this.register}
                loggedIn={this.props.loggedIn}
                name={name()}
                bankInfo={{}}
                transactions={this.props.transactionHistory}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transactionHistory: state.transactions,
        bankLinked: state.bankLinked,
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, { logout, oauth })(HomeTab));
