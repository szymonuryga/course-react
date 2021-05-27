import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Add User', () => {
  it('Adds new user to the list', () => {
    render(
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
    fireEvent.click(screen.getByText('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Szymon');
  });

  it('Prevent addding new user if the consent is not chcecked', () => {
    render(
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
    const newUser = screen.queryByText('Szymon');
    expect(newUser).not.toBeInTheDocument();
  });
});
