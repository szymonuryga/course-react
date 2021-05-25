import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import NewsSection, { query } from './NewsSection';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const API_ENDPOINT = 'https://graphql.datocms.com/';

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost(API_ENDPOINT, { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost(API_ENDPOINT, { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
