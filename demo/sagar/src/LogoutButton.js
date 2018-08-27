import React from 'react';
import './index.css';


export class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = props.onClick;
  }

  render() {
     return (
       <div>
        <button onClick={this.onClick}>
          Logout
        </button>
      </div>
    );
  }
}