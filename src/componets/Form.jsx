import React, { Component } from 'react';
import axios from 'axios'
import NavBar from '../containers/NavBar'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            userFrom: '',
            userTo: '',
            userAmount: '',
            convertedAmount: ''
        }
    }

    getConversionRate = (e) => {
        e.preventDefault()
        const apiKey = '208b0530f83c623d3724a5d490cf9df1'
        const from = this.state.userFrom;
        const to = this.state.userTo;
        const amount = this.state.userAmount 
        

        // const url = `http://data.fixer.io/api/convert?access_key=${apiKey}&${from}&${to}&${amount}`
        const url = `http://data.fixer.io/api/convert?access_key=208b0530f83c623d3724a5d490cf9df1&${from}&${to}&${amount}`

        axios({
            url: url,
            method: 'GET'
        })
            .then(res => {
                const countryResponse = res.data;
                console.log(countryResponse)

                this.setState({
                    convertedAmount: countryResponse
                })
            }).catch(err => {
                console.log(err, "Error with request")
            })
    }

    captureUserInput = (convertFrom, convertTo, convertAmount) => {
        this.setState({
            userFrom: convertFrom,
            userTo: convertTo,
            userAmount: convertAmount
        }, () => { console.log(convertFrom, convertTo, convertAmount) })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NavBar />
                        <form className="row g-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">From</span>
                                <input type="text" class="form-control" placeholder="Enter 'from=3LetterSymbol' " value={this.state.userFrom} onChange={(event) => { this.setState({ userFrom: event.target.value }) }} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">To</span>
                                <input type="text" class="form-control" placeholder="Enter  'to=3LetterSymbol'" value={this.state.userTo} onChange={(event) => { this.setState({ userTo: event.target.value }) }} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Amount</span>
                                <input type="text" class="form-control" placeholder="Enter an amount" value={this.state.userAmount} onChange={(event) => { this.setState({ userAmount: event.target.value }) }} />
                            </div>
                            <div className="col-auto- text-center">
                                <button className="btn btn-primary mb-3" onClick={this.getConversionRate}>Find Conversion Rate</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;