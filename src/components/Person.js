import React from 'react';
import './Person.css';

const Person = ({ name, quote, superlative, photo}) => {
  return (
   <div className='person'>
    <h3>{name}</h3>
    <p>{quote}</p>
    <p>{superlative}</p>
    <img src={photo}/>
   </div>
  )
}

export default Person;
