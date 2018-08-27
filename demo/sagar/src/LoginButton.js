import React from 'react';
import './index.css';

export class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = props.onClick;
  }

  render() {
     return (
       <div>
        <button onClick={this.onClick}>
          Login
        </button>
      </div>
    );
  }
}