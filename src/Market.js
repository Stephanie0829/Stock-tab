import React from 'react';
import { MARKET_API_KEY } from "./config";

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crypto_status: "NA",
            fx_status: "NA",
            nasdaq_status: "NA",
            nyse_status: "NA",
            otc_status: "NA"
        }
    }

    //when component created fetch data
    componentDidMount() {
        this.fetchMarketInfo();
    }

    //fetch market data with api call
    fetchMarketInfo() {
        const ptr = this;
        const API_KEY = MARKET_API_KEY;
        let API_Call = `https://api.polygon.io/v1/marketstatus/now?&apiKey=${API_KEY}`;
        let crypto_temp = "";
        let fx_temp = "";
        let nasdaq_temp = "";
        let nyse_temp = "";
        let otc_temp = "";
        //process api call
        fetch(API_Call)
            .then(
                function (response) { //result converted to JSON
                    return response.json();
                }
            )
            .then( //result converted to data
                function (data) {
                    //retrieve specific data
                    
                    crypto_temp = data['currencies']['crypto'];
                    fx_temp = data['currencies']['fx'];
                    nasdaq_temp = data['exchanges']['nasdaq'];
                    nyse_temp = data['exchanges']['nyse'];
                    otc_temp = data['exchanges']['otc'];
                    // = data['exchanges']['nasdaq'];
            
                    //set state
                    ptr.setState({
                        crypto_status: crypto_temp,
                        fx_status: fx_temp,
                        nasdaq_status: nasdaq_temp,
                        nyse_status: nyse_temp,
                        otc_status : otc_temp
                    })
                }       
                
            )
            .catch(exception => {
                console.log("MARKET ERROR: " + exception);}
            )
    }

 
    render() {
        //let className = "red";
        //if(this.state.crypto_status)
        return (
            <div>
                <pre><span className = "Market-title">Crypto:</span> <span >{this.state.crypto_status}  </span>
                <span className = "Market-title">  Fx:</span>  {this.state.fx_status}</pre>
                <pre><span className = "Market-title">Nasdaq:</span>  {this.state.nasdaq_status}  
                <span className = "Market-title">  Nyse:</span>  {this.state.nyse_status}
                <span className = "Market-title">  Otc:</span>  {this.state.otc_status}</pre>
            </div>
        )
    }

}

export default Market;