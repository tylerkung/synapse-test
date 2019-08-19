import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import stycom from "styled-components";

import Typography from '@material-ui/core/Typography';

const Styles = stycom.div`
    flex-grow: 1;
    .title{
        text-align: left;
    }
    .logo{
        cursor: pointer;
        display: inline;
    }
`;

class AppLogo extends Component {

    constructor(props){
        super(props);

        this.state = {

        }

        this.goHome = this.goHome.bind(this);
    }

    goHome(){
        this.props.history.push("/");
    }

    login(){
        this.props.history.push("/login");
    }

    render(){

        return (
            <Styles>
                <Typography variant="h6" color="inherit" className="title">
                    <div className="logo" onClick={this.goHome}>
                        SynPay
                    </div>
                </Typography>
            </Styles>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, {})(AppLogo));
