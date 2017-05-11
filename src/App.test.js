import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has two checkboxes', () => {
  const app = shallow(<App />);
  expect(app.find(Checkbox)).to.have.length(2);
});

it('has Internet checked by default', () => {
  const app = shallow(<App />);
  // ...
});
