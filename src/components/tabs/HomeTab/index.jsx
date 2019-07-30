import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Home from "./Home";
import { logout, oauth } from '../../../actions';

class HomeTab extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        const login = () => {
            this.props.history.push("/login");
        };

        const register = () => {
            this.props.history.push("/register");
        };

        const viewUser = () => {
            console.log(this.props.currentUser.bankLinked);
        }

        const linkBank = () => {
            this.props.history.push("/bank");
        }

        const logout = () => {
            this.props.logout();
        }

        const name = () => {
            if (this.props.currentUser){
                return this.props.currentUser.client.name;
            }
            return 'User';
        }

        return (
            <Home
                onClickLogin={login}
                onClickRegister={register}
                onClickViewUser={viewUser}
                onClickLogOut={logout}
                onClickLinkBank={linkBank}
                loggedIn={this.props.loggedIn}
                name={name()}
                bankInfo={{}}
            />
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

export default withRouter(connect(mapStateToProps, { logout, oauth })(HomeTab));
