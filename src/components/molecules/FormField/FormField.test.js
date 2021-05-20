import React from 'react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import FormField from './FormField';

describe('Form field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
