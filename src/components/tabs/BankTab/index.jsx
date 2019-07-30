import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import SynapseAPI from "../../../api/synapse";
import { bank } from '../../../actions';
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
        const linkBankSubmit = async ({ username, password }) => {
            try {
                this.setState({loading: true});
                const bankCredentials = {
                    id: this.props.currentUser._id,
                    bankInfo: {
                        username,
                        password,
                        bank_name: 'fake', //fake data
                        nickname: 'Fake Account',
                        account_num: '1232225674134',
                        routing_num: '051000017',
                        type: 'PERSONAL',
                        class: 'CHECKING'
                    },
                    oauth_key: this.props.currentUser.oauth.oauth_key
                }

                const bank = await SynapseAPI.linkBank(bankCredentials); //get bank data

                this.props.bank(bank); //store bank data in Redux
                this.props.history.push("/"); //go to homepage
            } catch (error) {
                this.setState({
                    error: error.message,
                    loading: false
                })
            }
        };
        return (
            <Bank onSubmitLinkBank={linkBankSubmit} loading={this.state.loading} error={this.state.error} />
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

export default withRouter(connect(mapStateToProps, { bank })(LoginView));
