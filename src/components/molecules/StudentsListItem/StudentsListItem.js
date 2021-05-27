import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './StudentsListItem.styles';
import Mark from 'components/atoms/Mark/Mark';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import { UserShape } from 'types';

const StudentsListItem = ({
  studentData: { name, average, attendance = '0%' },
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Mark average={average} />
      <UserInfo name={name} attendance={attendance} />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
