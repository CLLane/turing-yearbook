import React from 'react';
import Person from './Person.js'
// import App from './App.js'
import './Cohort.css';

const Cohort = ({people, deleteStudent}) => {
  console.log('deleteStudent :', deleteStudent);
  const peopleCards = people.map(human => {
    return (
      <Person 
        id={ human.id }
        name= {human.name}
        quote={human.quote}
        superlative={human.superlative}
        photo={human.photo}
        deleteStudent={deleteStudent}
      />
    )
  })

  return <div className="cohort">{peopleCards}</div>;
}

export default Cohort;
