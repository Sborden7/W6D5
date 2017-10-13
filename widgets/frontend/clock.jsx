import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    console.log("this is constructing!");
    super(props);
    this.state = {time: new Date() };
    this.tick = this.tick.bind(this);
  }

  render () {
    return (
    <span>
      <h1 className="title">This is a clock!</h1>
      <div className="clock">
        <div  className="words">
          <h2 className="date">Date:</h2>
          <h2 className="time">Time:</h2>
        </div>
        <div className="render">
          <span>{this.state.time.getFullYear()}:{this.state.time.getMonth()}:{this.state.time.getDay()}</span>
          <br />
          <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</span>
        </div>
      </div>
    </span>
    );
  }

  tick() {
    this.setState( {time: new Date()} );
  }

  componentDidMount() {
    console.log("am I mounted??");
    this.intervalId = setInterval(this.tick, 1000);
  }

}


export default Clock;
