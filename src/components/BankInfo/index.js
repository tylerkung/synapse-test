import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import stycom from "styled-components";

import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const Styles = stycom.div`
    .card-container{
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-around;
    }
`;

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
        const bankList = Object.keys(this.props.bank).map(
            (keyName, keyIndex) => {
                return(
                    <Card className="card" key={keyIndex}>
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                image={this.props.bank[keyName].info.bank_logo}
                                title={this.props.bank[keyName].info.bank_long_name}
                            />
                        </CardActionArea>
                        <CardContent>
                            <h2>{this.props.bank[keyName].info.nickname}</h2>
                            <h4>{this.props.bank[keyName].info.class} - {this.props.bank[keyName].info.account_num}</h4>
                            <h5>Balance: ${this.props.bank[keyName].info.balance.amount}</h5>
                        </CardContent>
                        <CardActions>
                            <Button disabled>
                                View
                            </Button>
                        </CardActions>
                    </Card>
                )
            }
        );

        if (this.props.bankLinked){
            return (
                <Styles>
                    <div className="card-container">
                        {bankList}
                    </div>
                </Styles>
            );
        }
        else if (this.props.loggedIn){
            return (
                <div>
                </div>
            );
        }
        return <div />
    }
}

const mapStateToProps = (state) => {
    return {
        bankLinked: state.bankLinked,
        bank: state.bank,
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, {})(BankInfo));
