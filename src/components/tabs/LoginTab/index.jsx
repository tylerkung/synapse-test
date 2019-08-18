import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { login, oauth } from '../../../actions';
import Login from "./Login";
import { Auth } from "../../../auth";


class LoginView extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
            loading: false
        }
    }

    render(){
        const login = async ({ email, password }) => {
            try {
                this.setState({loading: true});
                const user = await Auth.login(email, password);

                if (user) {
                    delete sessionStorage['oauth_key'];
                    this.props.login(user); //sets Redux state login credentials, loggedIn status
                    const oauthValue = await Auth.oauth(user._id, user.refresh_token);
                    this.props.oauth(oauthValue);
                    this.props.history.push("/"); //go to homepage
                }
            } catch (error) {
                this.setState({
                    error: error.message,
                    loading: false
                })
            }
        };
        return (
            <Login onSubmitLogin={login} loading={this.state.loading} error={this.state.error} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bankLinked: state.bankLinked,
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, { login, oauth })(LoginView));
