import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from '../src/AppRouter';
import { authSlice } from '../src/store/auth/authSlice';
import { notAuthenticatedState } from './fixtures/authFixtures';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe('Tests in <AppRouter />', () => {
  test('should render /news-feed page by default', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('NewsFeed'));
    expect(container).toMatchSnapshot();
  });

  test("shouldn't display /auth/login if logged", () => {});
});
