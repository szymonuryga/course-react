import UserList from 'components/organisms/UserList/UserList';
import PropTypes from 'prop-types';
import React from 'react';
import { UserShape } from 'types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = ({ users, handleDeleteUser }) => {
  return (
    <ViewWrapper>
      <UserList users={users} handleDeleteUser={handleDeleteUser} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDeleteUser: PropTypes.func,
};

export default Dashboard;
