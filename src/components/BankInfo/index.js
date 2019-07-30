import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class BankInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
            loading: false,
            bankLinked: false
        }
    }

    render(){
        if (this.props.bankLinked){
            return (
                <div>
                    {this.props.bank[0].type}
                </div>
            );
        }
        else if (this.props.loggedIn){
            return (
                <div>
                    <h2>
                        Link Bank by pressing 'Link Bank' button
                    </h2>
                </div>
            );
        }
        return <div />
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        bankLinked: state.bankLinked,
        bank: state.bank,
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, {})(BankInfo));
