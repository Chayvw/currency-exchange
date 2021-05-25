import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../containers/NavBar'


function Historical(props) {
    const [date, setDate] = useState([])
    const [historicalResults, setHistoricalResults]= useState([])

   const getHistoricalData = (e) => {
        e.preventDefault()

        // const queryDate = this.state.date

        const historicalUrl = `https://data.fixer.io/api/2013-12-25?access_key=208b0530f83c623d3724a5d490cf9df1&base=USD`
        axios({

            url: historicalUrl,
            method: 'GET'
        })
            .then(res => {
                const historicalResponse = res.data.rates;
                setHistoricalResults([historicalResponse])
                console.log(historicalResults)
                console.log(historicalResponse)

            }).catch(err => {
                console.log(err, "Error with request")
            })


    }

    return (
        <div>
             <NavBar/>
            <div>

            <button className="btn btn-danger mb-3" onClick={getHistoricalData}>Get Historical Rates</button>
        </div>

        
            {historicalResults && historicalResults.map((history, i) =>{
                 return (<div className="container">
                 <div className="row">
                     <div className="col">
                         <ul className="list-group list-group-horizontal-xl-flex-fill">
                             <li className="list-group-item">USD:{history.USD}</li>
                             <li className="list-group-item">CAD:{history.CAD}</li>
                             <li className="list-group-item">EUR:{history.EUR}</li>
                             <li className="list-group-item">VND:{history.VND}</li>
                             <li className="list-group-item">JPY:{history.JPY}</li>
                             <li className="list-group-item">HKD:{history.HKD}</li>
                             <li className="list-group-item">MXN:{history.MXN}</li>
                             <li className="list-group-item">AED:{history.AED}</li>
                             <li className="list-group-item">JMD:{history.JMD}</li>
                             <li className="list-group-item">NGN:{history.NGN}</li>
                             <li className="list-group-item">BTC:{history.BTC}</li>
                             <li className="list-group-item">GBP:{history.GBP}</li>
                             <li className="list-group-item">BRL:{history.BRL}</li>
                             <li className="list-group-item">CHF:{history.CHF}</li>
                             <li className="list-group-item">INR:{history.INR}</li>
                             <li className="list-group-item">KPW:{history.KPW}</li>
                             <li className="list-group-item">RUB:{history.RUB}</li>
                             <li className="list-group-item">HTG:{history.HTG}</li>
                             <li className="list-group-item">TRY:{history.TRY}</li>
                             <li className="list-group-item">RUB:{history.RUB}</li>
                         </ul>
                     </div>
                 </div>
             </div>

             )
            })}
        </div>
        
    );
}

export default Historical;