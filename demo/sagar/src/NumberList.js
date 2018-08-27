import React from 'react';
import './index.css';
import {ListItem} from './ListItem';

export class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.numbers = props.numbers;
  }

  render() {
    const listItems = this.numbers.map((number) =>
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}