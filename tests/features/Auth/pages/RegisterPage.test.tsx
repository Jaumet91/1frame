import React from 'react';
import { render, screen } from '@testing-library/react';
import { RegisterPage } from '../../../../src/features/Auth/pages/RegisterPage';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in <RegisterPage />', () => {
  test('should render the register page by default', () => {
    const { container } = render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );

    const logoImg: HTMLImageElement = screen.getByRole('img', {
      name: 'logo-img'
    });

    expect(screen.getAllByText('All your favourite games in one place'));
    expect(container).toMatchSnapshot();
  });
});
