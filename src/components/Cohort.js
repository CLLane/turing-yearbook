import React from 'react';
import Person from './Person.js'
// import App from './App.js'
import './Cohort.css';

const Cohort = ({people}) => {
  const peopleCards = people.map(human => {
    return (
      <Person 
        name= {human.name}
        quote={human.quote}
        superlative={human.superlative}
        photo={human.photo}
      />
    )
  })

  return <div className="cohort">{peopleCards}</div>;
}

export default Cohort;
