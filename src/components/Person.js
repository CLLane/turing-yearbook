import React, { Component } from 'react';
import './Person.css';

// const Person = ({ name, quote, superlative, photo, id, deleteStudent}) => {
//   return (
//    <div className='person'>
//     <h3>{name}</h3>
//     <p>{quote}</p>
//     <p>{superlative}</p>
//     <img src={photo}/>
//     <button onClick={() => deleteStudent(id)}>Delete</button>
//    </div>
//   )


// }
class Person extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      quote: this.props.quote,
      superlative: this.props.superlative,
      photo: this.props.photo
    }
    console.log('this.state :', this.state);
  }

  editHandler(event) {
    this.setState({ [event.target.id]: event.target.innerText })
  }

  render() {
    return (
      <div className='person'data-id={this.props.id}>
        <h3 
          contentEditable='true'
          suppressContentEditableWarning={true}
          onKeyUp={event => this.editHandler(event, 'name')}
          onBlur={this.editSave}
          >{this.state.name}
        </h3>
        <img src={this.state.photo} alt="the essence of one\'s being"></img>
        <p
          contentEditable='true'
          suppressContentEditableWarning={true}
          onKeyUp={event => this.editHandler(event, 'quote')}
          onBlur={this.editSave}
          >{this.state.quote}
        </p>
        <p 
           contentEditable='true'
           suppressContentEditableWarning={true}
           onKeyUp={event => this.editHandler(event, 'superlative')}
           onBlur={this.editSave}
           > {this.state.superlative}
        </p>
        <button onClick={() => this.props.deleteStudent(this.state.id)}>Delete</button>
      </div>
    )
  }
}
export default Person;
