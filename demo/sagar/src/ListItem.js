import React from 'react';
import './index.css';

export class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.value;
  }

  render() {
    return <li id={this.value}>{this.value}</li>;
  }
}