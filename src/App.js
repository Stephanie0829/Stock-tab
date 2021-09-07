import './App.css';
import Stock from './Stock.js';
import Clock from './Clock.js';
import Market from './Market.js';
import News from './News.js';
import React from 'react';
//create component


// let clock = () => {
//     let currenttime = new Date().toLocaleDateString('default');
//     document.getElementById("time").innerText = currenttime;
//     setTimeout(clock, 1000);
// }

function App() {
  return (
  <body className = "App">

    {/* <!-- search for google --> */}
    <div class = "searchArea"> 
        
        <Market></Market>
        {/* Area with date and market status */}
        <div class = "container">
            <div class = "date"> 
                <h1 id = "weekday">{new Date().toLocaleDateString('default', { weekday: 'short' })}</h1>
                <h2>{new Date().toLocaleDateString('default')}</h2>
            </div>
            <h1 id = "bar">|</h1>
            <div class = "date">
                <Clock id = "time"></Clock>
            </div>
        </div>
        <form action="http://www.google.com/search" method="get">
            <input id = "searchbar" type="text" name="q"/>
            <input id = "searchbtn" type="submit" value="Google Search"/>
        </form>
    </div>

    {/* <!-- three index graphs with data and possible adjusting for date --> */}
    <span><h2 id = "titleindex">MARKET INDEXES (past month)</h2></span>
    <div class = "indexGraphs">
        <div class = "graph1">
            <h2>NASDAQ</h2>
            <Stock name = 'NDAQ'></Stock>
        </div>
        <div class = "graph1"> 
            <h2>Dow Jones (DIA)</h2>
            <Stock name = 'DIA'></Stock>
        </div>
        <div class = "graph1">
            <h2>S&P 500 (SPY)</h2>
            <Stock name = 'SPY'></Stock>
        </div>
    </div>

    {/* <!-- selected graph will show data below (storage google api)/news --> */}
    <span><h2 id = "titleindex">RECENT STOCKS NEWS</h2></span>
        {/* <h2>NVIDIA</h2> <Stock name = 'NVDA'></Stock> */}
    <News></News>
    <br></br>
    
  </body>
  );
}

export default App;

