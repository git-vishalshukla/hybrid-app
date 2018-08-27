import React from 'react';
import './index.css';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    //render();
  }

  render() {
    return (
      <div>
        <h4>Time is {this.state.date.toLocaleTimeString()}.</h4>
      </div>
    );
  }
}
