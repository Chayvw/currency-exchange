import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            userFrom: '',
            userTo: '',
            userAmount: ''
        }
    }

    getConversionRate = () => {
        const apiKey = '208b0530f83c623d3724a5d490cf9df1'
        const from = this.state.userFrom;
        const to = this.state.userTo;
        const amount = this.state.userAmount

        const url = `http://data.fixer.io/api/convert?access_key=${apiKey}&${from}&${to}&${amount}`

        axios({

            url: url,
            method: 'GET'
        })
            .then(res => {
                const countryResponse = res.data.results;

                console.log(countryResponse)
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
            <div>
                <h2>Form</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form className="row g-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">From</span>
                                    <input type="text" class="form-control" placeholder="Enter What you would like to convert From"  value={this.state.userFrom} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">To</span>
                                    <input type="text" class="form-control" placeholder="Enter What you would like to convert to"  value={this.state.userFrom} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Amount</span>
                                    <input type="text" class="form-control" placeholder="Enter an amount"  value={this.state.userFrom} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3" onClick={this.getConversionRate}>Find Conversion Rate</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;