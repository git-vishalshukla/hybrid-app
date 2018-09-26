import React from 'react';
import { FormGroup } from '../molecules/form-group';
import { Button } from '../atoms/button';

export class Form extends React.Component {

  render() {
    return (
      <form>
        <FormGroup labelFor="username" labelTitle="User Name" inputId="username" inputType="text" inputPlaceholder="Enter User Name"/>
        <FormGroup labelFor="password" labelTitle="Password" inputId="password" inputType="password" inputPlaceholder="Password"/>
        <Button/>
      </form>
    );
  }
}

