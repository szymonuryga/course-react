import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Mark from 'components/atoms/Mark/Mark';
import UserInfo from 'components/atoms/UserInfo/UserInfo';

const UserListItem = ({
  onClick,
  userData: { name, average, attendance = '0%' },
}) => {
  return (
    <Wrapper>
      <Mark average={average} />
      <UserInfo name={name} attendance={attendance} onClick={onClick} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
