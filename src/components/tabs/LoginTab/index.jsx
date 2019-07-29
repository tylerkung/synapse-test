import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { login } from '../../../actions';
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
                    this.props.login(user);
                    console.log(this.props);
                    // localStorage['loggedIn'] = true;
                    // localStorage['currentUser'] = JSON.stringify(user);
                    // localStorage['currentUserId'] = user._id;
                    // localStorage['currentUserRefreshToken'] = user.refresh_token;
                    this.props.history.push("/");
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
    return { currentUser: state.currentUser };
}

export default withRouter(connect(mapStateToProps, { login })(LoginView));
