import React, { useContext } from 'react';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo } from './UserInfo.styles';
import { UsersContext } from 'providers/UserProvider';

const UserInfo = ({ name, attendance }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <StyledInfo>
      <p>
        {name} <DeleteButton onClick={() => deleteUser(name)} />
      </p>
      <p>attendance :{attendance}</p>
    </StyledInfo>
  );
};

export default UserInfo;
