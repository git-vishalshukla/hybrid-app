import React from 'react';
import './index.css';
import {UserGreeting} from './UserGreeting';
import {GuestGreeting} from './GuestGreeting';

export class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn:props.isLoggedIn};
  }

  componentDidUpdate(prevProps){
     if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
          this.setState({isLoggedIn:this.props.isLoggedIn});
     }
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}