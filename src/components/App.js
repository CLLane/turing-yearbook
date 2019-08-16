import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from '../Form.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }

  }
  
  addNewStudent = (newStudent) => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  deleteStudent = (id) => {
    const filteredStudents = this.state.students.filter(student => student.id !== id)

    this.setState({students: filteredStudents})
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <h2>Staff</h2>
        <Cohort people={this.state.staff} />
        <h2>Students</h2>
        <Form addNewStudent={this.addNewStudent} />
        <Cohort people={this.state.students} deleteStudent={this.deleteStudent}/>
      </main>
    );
  }
}


export default App;
