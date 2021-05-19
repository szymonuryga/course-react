import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UserProvider';

const UserList = () => {
  const { users } = useContext(UsersContext);
  return (
    <>
      <Title>Users List</Title>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};
export default UserList;
