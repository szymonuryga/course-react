import React from 'react';
import { Wrapper } from './Mark.styles';

const Mark = ({ average }) => <Wrapper mark={average}>{average}</Wrapper>;

export default Mark;
