import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UserList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
