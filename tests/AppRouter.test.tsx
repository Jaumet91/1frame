import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from '../src/AppRouter';

// TODO
describe('Tests in <AppRouter />', () => {
  test('should render /home page', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
  });

  test("shouldn't display /auth/login if logged", () => {});
});
