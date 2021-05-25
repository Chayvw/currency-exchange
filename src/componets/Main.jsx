import { Link } from 'react-router-dom';
import axios from 'axios';

import React, { useState } from 'react';

function Main(props) {
    const [countryList, setCountryList] = useState([])


    const getCountryList = () => {
        const apiKey = '208b0530f83c623d3724a5d490cf9df1';
        const url = `http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=AED,ALL,USD,EUR,VND,JPY,HKD,MXN,AED,CAD,JMD,NGN,BTC,GBP,BRL,CHF,INR,KPW,RUB,HTG,TRY,RUB`;
        axios({

            url: url,
            method: 'GET'
        })
            .then(res => {
                const countryResponse = res.data.rates;
                setCountryList([countryResponse])
                console.log(countryResponse)
                console.log(countryList)
            }).catch(err => {
                console.log(err, "Error with request")
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Main</h2>
                    <p className="instructions"> To make a conversion you will need to enter the corresponding three letter symbol. You can get the 20 of the most popular below or directly to the convert menu.  </p>
                    
                    <button className="btn btn-warning mb-3" onClick={getCountryList}>Get Latest Rates</button>

                    <Link to='/form'> <button className="btn btn-success mb-3">Ready to Convert</button> </Link>

                    {/* {countryList && countryList.map((country, i) => {} */}
                    {countryList && countryList.map((country, i) => {
                        return (<div className="container">
                            <div className="row">
                                <div className="col">
                                    <h5>{country.date}</h5>
                                    <ul className="list-group list-group-horizontal-xl-flex-fill">
                                        <li className="list-group-item">USD:{country.USD}</li>
                                        <li className="list-group-item">CAD:{country.CAD}</li>
                                        <li className="list-group-item">EUR:{country.EUR}</li>
                                        <li className="list-group-item">VND:{country.VND}</li>
                                        <li className="list-group-item">JPY:{country.JPY}</li>
                                        <li className="list-group-item">HKD:{country.HKD}</li>
                                        <li className="list-group-item">MXN:{country.MXN}</li>
                                        <li className="list-group-item">AED:{country.AED}</li>
                                        <li className="list-group-item">JMD:{country.JMD}</li>
                                        <li className="list-group-item">NGN:{country.NGN}</li>
                                        <li className="list-group-item">BTC:{country.BTC}</li>
                                        <li className="list-group-item">GBP:{country.GBP}</li>
                                        <li className="list-group-item">BRL:{country.BRL}</li>
                                        <li className="list-group-item">CHF:{country.CHF}</li>
                                        <li className="list-group-item">INR:{country.INR}</li>
                                        <li className="list-group-item">KPW:{country.KPW}</li>
                                        <li className="list-group-item">RUB:{country.RUB}</li>
                                        <li className="list-group-item">HTG:{country.HTG}</li>
                                        <li className="list-group-item">TRY:{country.TRY}</li>
                                        <li className="list-group-item">RUB:{country.RUB}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        )
                    })}

                </div>
            </div>
        </div>

    );
}

export default Main;

