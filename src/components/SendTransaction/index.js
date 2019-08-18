import React, { Component } from "react";
import { connect } from 'react-redux';
import stycom from "styled-components";

import { addTransaction, oauth } from '../../actions';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import { allUsers } from '../../api/fake-user-database';
import SynapseAPI from "../../api/synapse";
import { Auth } from "../../auth";

const Styles = stycom.div`
    margin: 3em 0;
    .formControl{
        width: 100%;
    }
    .transaction-btn{
        &:hover{
            background-color: #083232;
        }
        background-color: #58af85;
        color: #fff;
    }
`;

class SendTransaction extends Component {

    constructor(props){
        super(props);

        this.state = {
            toUser: '',
            allUsers: allUsers,
            amount: 0,
            sendingNode: '',
            receivingNode: '',
            error: '',
            availableNodes: [],
            nodesReady: false,
            sending: false
        }

        this.handleToChange = this.handleToChange.bind(this);
        this.handleNodeChange = this.handleNodeChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.onSubmitTransaction = this.onSubmitTransaction.bind(this);
        this.getNode = this.getNode.bind(this);
        this.clearFields = this.clearFields.bind(this);
    }

    getNode = async (id, nodeOwner) => {
        if (nodeOwner === 'from'){
            try {
                const node = await SynapseAPI.getUserNodes(id, this.props.currentUser.oauth_key);
                this.setState({availableNodes: node.nodes});
            } catch (error) {
                this.setState({
                    error: error.message
                })
            }
        } else if (nodeOwner === 'to'){
            try {
                const user = await SynapseAPI.viewUser(id);
                const refreshToken = user.refresh_token;
                const oauthResponse = await Auth.oauth(id, refreshToken);
                const oauthKey = oauthResponse.oauth_key;
                const node = await SynapseAPI.getUserNodes(id, oauthKey);
                this.setState({ receivingNode: node.nodes[0]._id });
            } catch (error) {
                this.setState({
                    error: error.message
                })
            }
        }
    };

    handleToChange(event){
        this.getNode(this.props.currentUser._id, 'from');
        this.getNode(event.target.value, 'to');
        this.setState({
            toUser: event.target.value,
            nodesReady: true
        });
    }

    handleNodeChange(event){
        this.setState({
            sendingNode: event.target.value
        })
    }

    handleAmountChange(event){
        this.setState({
            amount: event.target.value
        })
    }

    clearFields(){
        this.setState({
            toUser: '',
            sendingNode: '',
            amount: '',
            nodeReady: false
        })
    }

    onSubmitTransaction = async () => {
        this.setState({sending: true});
        const transactionData = {
            senderId: this.props.currentUser._id,
            senderNodeId: this.state.sendingNode._id,
            receiveNodeId: this.state.receivingNode,
            nodeType: this.state.sendingNode.type,
            amount: this.state.amount,
            oauthKey: this.props.currentUser.oauth_key
        }
        try {
            const transaction = await SynapseAPI.addTransaction(transactionData);
            this.props.addTransaction(transaction);
            this.clearFields();
            this.setState({sending: false});
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }

    render(){
        return (
            <Styles>
                <form
                    autoComplete="off"
                    onSubmit={e => {
                        e.preventDefault();
                        this.onSubmitTransaction();
                    }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FormControl required disabled={this.state.sending} className="formControl">
                                <InputLabel htmlFor="to">To</InputLabel>
                                <Select
                                    value={this.state.toUser}
                                    name="to"
                                    onChange={this.handleToChange}
                                    inputProps={{
                                        id: 'to'
                                    }}
                                >
                                    {this.state.allUsers.map( (item, key) =>
                                        <MenuItem key={key} value={item._id}>{item.legal_names[0]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl required disabled={!this.state.nodesReady || this.state.sending } className="formControl">
                                <InputLabel htmlFor="node">Node</InputLabel>
                                <Select
                                    value={this.state.sendingNode}
                                    name="node"
                                    onChange={this.handleNodeChange}
                                    inputProps={{
                                        id: 'node'
                                    }}
                                >
                                    {this.state.availableNodes.map( (item, key) =>
                                        <MenuItem key={key} value={item}>{item.info.account_num} - {item.info.nickname}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl required disabled={this.state.sending} className="formControl">
                                <TextField
                                    id="standard-number"
                                    label="Amount"
                                    value={this.state.amount}
                                    onChange={this.handleAmountChange}
                                    InputLabelProps={{
                                      shrink: true
                                    }}
                                    disabled={this.state.sending}
                                    margin="normal"
                                />
                            </FormControl>
                        </Grid>
                        <Button
                            type="submit"
                            disabled={this.state.sending}
                            className="transaction-btn"
                        >{this.state.sending ? "Sending..." : "Send"}</Button>
                    </Grid>
                </form>
            </Styles>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transactionHistory: state.transactions,
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, { addTransaction, oauth })(SendTransaction);
