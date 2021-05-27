import React from 'react';
import Mark from 'components/atoms/Mark/Mark';
import { Title } from 'components/atoms/Title/Title';
import {
  BigAverage,
  Wrapper,
  StyledDetails,
  StyledLabel,
  StyledInfo,
  StyledSubjectInfo,
} from './StudentDetails.styles';

export const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <BigAverage mark={student.average}>{student.average}</BigAverage>
      <Title isBig>{student.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Mark average={average} />
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};
