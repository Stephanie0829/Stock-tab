import React from 'react';

class Clock extends React.Component {
     //construct clock and set time to the current time
    constructor(props){
    super(props);
     this.state = {
          time: new Date()
     }
    }
    
    //When component is mounted, redisplay time every one second
    componentDidMount() {
          this.timerID = setInterval(() =>
               this.changeTime(),
               1000
          );
     }
    
    //clears interval to save memory
    componentWillUnmount(){
     clearInterval(this.timerID)
    }
    
    //Update the time
    changeTime(){
     this.setState({
          time: new Date()
     });
    }

    //render a h2 header with time
    render() {
     return (
          <h1 id = "time"> {this.state.time.toLocaleTimeString()}</h1>
     );
     }
    }

    export default Clock;