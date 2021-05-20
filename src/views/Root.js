import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from './AddUser';
import MainTemplate from 'components/templates/MainTemplate';
import Dashboard from './Dashboard';
import UserProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UserProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UserProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
