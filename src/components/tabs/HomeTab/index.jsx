import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Home from "./Home";
import { Auth } from "../../../auth";
import { storeCurrentOauth } from "../../../api/fake-user-database";
import { logout, oauth } from '../../../actions';


//move view user function somewhere
import SynapseAPI from "../../../api/synapse";

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
            console.log(this.props.currentUser);
        }

        const oauth = async () => {
            if (this.props.loggedIn){
                const id = this.props.currentUser._id;
                const refreshToken = this.props.currentUser.refresh_token;
                this.props.oauth({id, refreshToken});
            } else{
                console.log('Not logged in');
            }
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
                onClickOauth={oauth}
                onClickLogOut={logout}
                onClickLinkBank={linkBank}
                loggedIn={this.props.loggedIn}
                name={name()}/>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, { logout, oauth })(HomeTab));
