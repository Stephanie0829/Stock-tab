import React from 'react';
import {Line} from "react-chartjs-2";
import { STOCK_API_KEY } from "./config";

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            XVals: [],
            YVals: [],
            data: [],
        }
    }

    //when component created fetch stock
    componentDidMount() {
        this.fetchStock();
    }

    //fetch stock with api call
    fetchStock() {
        const ptr = this;
        const API_KEY = STOCK_API_KEY;
        let enddate = new Date().toISOString().slice(0, 10);
        let begindate = new Date();
        begindate.setMonth(begindate.getMonth() - 1);
        begindate = begindate.toISOString().slice(0, 10);
        let StockSymbol = this.props.name;
        let API_Call = `https://api.polygon.io/v2/aggs/ticker/${StockSymbol}/range/1/day/${begindate}/${enddate}?adjusted=true&sort=asc&limit=20000&apiKey=${API_KEY}`;
        let XValstemp = [];
        let YValstemp = [];

        //process api call
        fetch(API_Call)
            .then(
                function (response) { //result converted to JSON
                    return response.json();
                }
            )
            .then( //result converted to data
                function (data) {
                        
                    //put values in temp array
                    var date;
                    for (var key in data['results']) {
                        date = new Date(data['results'][key]['t'])
                        XValstemp.push(date.toLocaleString().slice(0, 10).replace(",", ""));
                        YValstemp.push(data['results'][key]['c']);
                    }

                    //set state as temp array
                    ptr.setState({
                        XVals: XValstemp,
                        YVals: YValstemp
                    })
                    
                }
            )
            .catch(exception => {
                console.log("STOCKS ERROR: " + exception);}
            )
    }

    render() {

        const state = {
            type: 'line',
            labels: this.state.XVals,
                datasets: [{
                    data: this.state.YVals,
                    pointRadius: 1,
                    borderColor: "darkgreen",
                    pointHoverRadius: 2
                }]
        }

         const  options =  {
                tooltips: {
                    custom: function(tooltip) {
                      if (!tooltip) return;
                      tooltip.displayColors = false;
                    },
                    callbacks: {
                      }
                },
                plugins:{   
                    legend: {
                        display: false
                    }
                    // zoom: {
                    //     pan: {
                    //         enabled:true
                    //     },
                    //     limits: {
                    //       // axis limits
                    //     },
                    //     zoom: {
                    //         enabled:true,
                    //         drag:true
                    //     }
                    //   }

                },
                maintainAspectRatio: false,
                responsive: true
              }

        return (
            <div className = "GraphDiv">
                <Line
                    data={state}
                    options={options}
                />
            </div>
        )
    }

}

export default Stock;