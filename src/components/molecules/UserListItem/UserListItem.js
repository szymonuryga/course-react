import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Mark from 'components/atoms/Mark/Mark';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import { UserShape } from 'types';

const UserListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Mark average={average} />
      <UserInfo name={name} attendance={attendance} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UserListItem;
