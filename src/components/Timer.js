import { useEffect, useState } from "react"; //hold 
import Person from './Person'
import React from "react";

export class TimerClass extends React.Component {
  constructor(props){ // 1
    super(props);
    console.log(">> timer constructor");
  }
  state = {count:0,seconds:0};
  sample = 0;
  interval =0 ;
  tick= () => {
    if(this.state.seconds == 10){
      this.setState({seconds:0});
    }else{
      this.setState(prevState => ({ 
        seconds: prevState.seconds + 1
      }));
    }
  }
  componentDidMount(){ //4
    console.log(">> After mounting timer componentDidMount");
    this.restartTimer();
  }

  componentWillMount(){ // 2
    console.log(">> before mounting timer componentDidMount");
  }
  componentWillUnmount() {
    console.log(">>componentWillUnmount");
    this.stopTimer();
  }
  
  doIncrement = () => {
    this.sample++;
    console.log(">> Class Timer: " +this.state.count);
    // this.state2.count++;
    this.setState({count:++this.state.count}); //render
    //this.forceUpdate();
}
  doReset = () =>{
    this.setState({seconds: 0});
  }
  stopTimer=()=> {
    console.log(">>stopTimer");
    clearInterval(this.interval);
  }
  restartTimer=()=>{
    console.log(">>restartTimer");
    this.stopTimer();
    this.interval = setInterval(this.tick, 1000);
  }
  render(){ // this return html  // 3
    console.log(">> render");
    return(
      <div>
      <h5>Class Timer</h5>
        Seconds: {this.state.seconds} <br/><br/>
        Sample: {this.sample} <br/><br/>
        <button onClick={this.doIncrement}> Increment</button>
        <button onClick={this.stopTimer}> Stop</button>&nbsp;
        <button onClick={this.doReset}> Reset to 0</button>&nbsp;
        <button onClick={this.restartTimer}> ReStart</button>
    </div>
    )
  }
}
//local state this not exist
function Timer({name}) { // this is not available // outcome 
    console.log(">> timer.."); // useState 
    const [count,setCount] = useState(0); //22
    const [tInterval,setTInterval] = useState(0); //22
    
    var restartTimer=()=>{
      console.log(">>restartTimer");
      stopTimer();
      var interval = setInterval(()=>{
        //setCount(function(a){return a+1})
        setCount((a)=>(a+1));
      }, 1000);
      setTInterval(interval);
    }
    var stopTimer=()=>{
      console.log(">>stopTimer");
      clearInterval(tInterval);
    }

    var resetTimer=()=>{
      console.log(">>resetTimer");
        setCount(0);
    }
    useEffect(()=>{
      console.log(">> On Mount OLNY "+name);// after Mount
      restartTimer();
      return ()=>{
        stopTimer();
        console.log(">> On UnMount OLNY "+name); // before UnMount
      }
    },[]); // mount,unmount + count
    var doIncrement = () => {
       //count = 89 won't work
        setCount(function(count) { return (count+1)});
        console.log(">> Timer: " +count);
    }
  return (
    <div>
      <h5>Timer {name}</h5>
        Seconds: {count} <br/><br/>
        <button onClick={doIncrement}> Increment</button>
        <button onClick={stopTimer}> Stop</button>&nbsp;
        <button onClick={resetTimer}> Reset to 0</button>&nbsp;
        <button onClick={restartTimer}> Start</button>
    </div>
  );
}
export default Timer;
