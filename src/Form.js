import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quote: "",
      superlative: "",
      photo: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewStudent = event => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewStudent(newStudent);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: "",
      quote: "",
      superlative: "",
      photo: ""
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.changeHandler(event)}
        />

        <input
          type="text"
          placeholder="Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.changeHandler(event)}
        />

        <input
          type="text"
          placeholder="Most likely to..."
          name="superlative"
          value={this.state.superlative}
          onChange={event => this.changeHandler(event)}
        />

        <input
          type="text"
          placeholder="link a photo"
          name="photo"
          value={this.state.photo}
          onChange={event => this.changeHandler(event)}
        />

        <button onClick={event => this.submitNewStudent(event)}>SUBMIT</button>
      </form>
    );
  }
}

export default Form;