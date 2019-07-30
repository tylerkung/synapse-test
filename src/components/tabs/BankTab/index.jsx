import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { linkBank } from '../../../actions';
import Bank from "./Bank";

class LoginView extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
            loading: false
        }
    }

    render(){
        const linkBank = async ({ username, password }) => {
            try {
                this.setState({loading: true});
                const bankCredentials = {
                    id: this.props.currentUser._id,
                    username,
                    password,
                    oauth_key: this.props.currentUser.oauth.oauth_key
                }
                this.props.linkBank(bankCredentials);
                this.props.history.push("/"); //go to homepage
            } catch (error) {
                this.setState({
                    error: error.message,
                    loading: false
                })
            }
        };
        return (
            <Bank onSubmitLinkBank={linkBank} loading={this.state.loading} error={this.state.error} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, { linkBank })(LoginView));
