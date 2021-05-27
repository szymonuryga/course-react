import React from 'react';
import { StyledAverage } from './Mark.styles';

const Mark = ({ average }) => (
  <StyledAverage mark={average}>{average}</StyledAverage>
);

export default Mark;
