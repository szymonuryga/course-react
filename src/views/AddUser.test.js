import React from 'react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Add User', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser /> <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Szymon' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.2' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Szymon');
  });
});
