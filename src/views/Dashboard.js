import UserList from 'components/organisms/UserList/UserList';
import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UserList />
    </ViewWrapper>
  );
};

export default Dashboard;
