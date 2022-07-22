import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../src/AppRouter';

describe('Tests in <AppRouter />', () => {
  test('should render /home page', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );
  });

  test("shouldn't display /login if logged", () => {
    const status = 'authenticated';
  });
});
