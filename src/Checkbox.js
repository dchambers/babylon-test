import React from 'react';
import styled from 'styled-components';

const CheckboxDiv = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid black;
`;

const CheckMarkDiv = styled.div`
  width: 13px;
  height: 13px;
  margin: 2px;
  background-color: ${props => props.checked ? 'gray' : 'white'};
`;

const Checkbox = ({checked, onCheck}) => (
  <CheckboxDiv onClick={() => onCheck(!checked)}>
    <CheckMarkDiv checked={checked}/>
  </CheckboxDiv>
);

export default Checkbox;
