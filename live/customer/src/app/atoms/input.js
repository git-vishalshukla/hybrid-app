import React from 'react';

export class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type={this.props.type} class="form-control" id={this.props.id} placeholder={this.props.placeholder} />
    );
  }
}

