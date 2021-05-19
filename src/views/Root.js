import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { users as usersData } from 'data/users';
import AddUser from './AddUser';
import MainTemplate from 'components/templates/MainTemplate';
import Dashboard from './Dashboard';

const initalFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initalFormState);

  const handleDeleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initalFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              </Route>
              <Route path="/">
                <Dashboard handleDeleteUser={handleDeleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
