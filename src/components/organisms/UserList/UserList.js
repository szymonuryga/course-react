import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UserList = ({ users, handleDeleteUser }) => {
  return (
    <>
      <Title>Users List</Title>
      <StyledList>
        {users.map((userData) => (
          <UserListItem
            key={userData.name}
            userData={userData}
            onClick={handleDeleteUser}
          />
        ))}
      </StyledList>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDeleteUser: PropTypes.func,
};
export default UserList;