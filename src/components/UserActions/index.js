import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import stycom from "styled-components";

import Button from "@material-ui/core/Button";

import { logout } from '../../actions';

const Styles = stycom.div`
    .username{
        font-size: 1rem;
    }
`;

class UserActions extends Component {

    constructor(props){
        super(props);

        this.state = {
            error: '',
            loading: false,
            bankLinked: false
        }

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.bank = this.bank.bind(this);
        this.logout = this.logout.bind(this);
    }

    register(){
        this.props.history.push("/register");
    }

    login(){
        this.props.history.push("/login");
    }

    bank(){
        this.props.history.push("/bank");
    }

    logout(){
        this.props.logout();
        this.props.history.push("/");
    }

    render(){

        if (this.props.loggedIn){
            return (
                <Styles>
                    <Button onClick={this.bank} color="secondary">Bank</Button>
                    <Button onClick={this.logout} color="secondary">Logout</Button>
                    <Button color="secondary">
                        {this.props.currentUser.legal_names[0]}
                    </Button>
                </Styles>
            );
        }
        else {
            return (
                <div>
                    <Button onClick={this.register} color="secondary">Sign Up</Button>
                    <Button onClick={this.login} color="secondary">Login</Button>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, { logout })(UserActions));
