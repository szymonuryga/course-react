import React from 'react';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo } from './UserInfo.styles';

const UserInfo = ({ name, attendance, onClick }) => (
  <StyledInfo>
    <p>
      {name} <DeleteButton onClick={() => onClick(name)} />
    </p>
    <p>attendance :{attendance}</p>
  </StyledInfo>
);

export default UserInfo;
