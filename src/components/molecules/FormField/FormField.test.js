import React from 'react';
import { render } from 'test-utils';
import FormField from './FormField';

describe('Form field', () => {
  it('Renders the component', () => {
    render(<FormField label="name" name="name" id="name" />);
  });
});
