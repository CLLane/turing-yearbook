import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should render to match the snapshot', () => {
    const wrapper = shallow(<Person 
      id={9999}
      key={9999}
      name='Chris'
      quote='Greg is awesome'
      superlative='Mostlikely to ask Greg for testing help'
      photo='cheese.jpeg'
      deleteStudent= {jest.fn()}
    />)

    expect(wrapper).toMatchSnapshot()
  });
});