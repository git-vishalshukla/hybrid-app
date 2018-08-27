import React from 'react';
import './index.css';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, isUp: true, isLeft: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this is:', this); // for detail purpose
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick1 = () => {
    console.log('this is:', this);
    this.setState(prevState => ({
      isUp: !prevState.isUp
    }));
  }

  handleClick2() {
   console.log('this is:', this);
   this.setState(prevState => ({
     isLeft: !prevState.isLeft
   }));
 }

  render() {
    // handleClick2 syntax ensures `this` is bound within handleClick
    return (<div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      <button onClick={this.handleClick1}>
        {this.state.isUp ? 'UP' : 'DOWN'}
      </button>

      <button onClick={(e) => this.handleClick2(e)}>
        {this.state.isLeft ? 'LEFT' : 'RIGHT'}
      </button>
      </div>
    );
  }
}
