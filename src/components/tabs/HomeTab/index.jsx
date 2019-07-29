import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Home from "./Home";
import { Auth } from "../../../auth";
import { storeCurrentOauth } from "../../../api/fake-user-database";


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
            console.log('viewUser');
            console.log(this.props);
            // if (localStorage['loggedIn'] === 'true'){
            //     console.log(localStorage['currentUser']);
            //     console.log(localStorage['currentUserId']);
            // } else{
            //     return;
            // }
        }

        const oauth = async () => {
            console.log('oauth');
            if (localStorage['loggedIn'] === 'true'){
                const id = localStorage['currentUserId'];
                const refreshToken = localStorage['currentUserRefreshToken'];
                console.log(id);
                const oauthuser = await Auth.oauth(id, refreshToken);
                storeCurrentOauth(oauthuser.oauth_key)
                console.log(oauthuser);
            }
        }

        const logout = () => {
            console.log('logout');
            localStorage['currentUser'] = '';
            localStorage['loggedIn'] = false;
            localStorage['currentUserId'] = '';
            localStorage['currentUserRefreshToken'] = '';
        }

        return (
            <Home onClickLogin={login} onClickRegister={register} onClickViewUser={viewUser} onClickOauth={oauth} onClickLogOut={logout}/>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser };
}

export default withRouter(connect(mapStateToProps)(HomeTab));
