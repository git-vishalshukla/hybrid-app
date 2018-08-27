import React from 'react';
import './index.css';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: '', textareaValue: '', selectValue : 'black'};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);    
    this.handleSelectChange = this.handleSelectChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value.toUpperCase()});
  }

  handleTextareaChange(event) {
    this.setState({textareaValue: event.target.value});
  }

  handleSelectChange(event) {
    this.setState({selectValue: event.target.value});
  }

  handleSubmit(event) {
    alert('First Name was submitted: ' + this.state.inputValue + '\n Last Name was submitted: ' + this.state.textareaValue + '\n Favourite Color was submitted: ' + this.state.selectValue);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        </label>
        <br/>
        <br/>
        <label>
          Last Name:
          <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange} />
        </label>
        <br/>
        <br/>
         <label>
          Pick your favorite color:
          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}