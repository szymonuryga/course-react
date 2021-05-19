import React from 'react';
import Button from 'components/atoms/Button/Button';
import { StyledInfo } from './UserInfo.styles';

const UserInfo = ({ name, attendance, onClick }) => (
  <StyledInfo>
    <p>
      {name} <Button onClick={() => onClick(name)} />
    </p>
    <p>attendance :{attendance}</p>
  </StyledInfo>
);

export default UserInfo;
