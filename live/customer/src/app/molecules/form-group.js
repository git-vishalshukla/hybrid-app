import React from 'react';
import { Label } from '../atoms/label';
import { Input } from '../atoms/input';

export class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="form-group">
        <Label for={this.props.labelFor} title={this.props.labelTitle}/>
        <Input type={this.props.inputType} id={this.props.inputId} placeholder={this.props.inputPlaceholder}/>
      </div>
    );
  }
}

