import React from 'react';
import { render, screen } from '@testing-library/react';

import { Sidebar } from '../../../src/features/Sidebar/Sidebar';

describe('Tests in Navbar.tsx', () => { 

  test('should render the navigation menu by default', () => { 
    render (<Sidebar />);

    const logoImg: HTMLImageElement = screen.getByRole('img', {name:'logo-img'});
    expect(logoImg.src).toContain('/assets/img/logo.svg');

    const darkLogoImg: HTMLImageElement = screen.getByRole('img', {name:'dark_logo-img'});
    expect(darkLogoImg.src).toContain('/assets/img/logo-white.svg');

    expect(screen.getAllByText('News Feed'));
    expect(screen.getAllByText('Trending'));
    expect(screen.getAllByText('Platforms'));
    expect(screen.getAllByText('Genres'));
    expect(screen.getAllByText('1Frame Gaming'));
    expect(screen.getAllByText('Settings'));
    expect(screen.getAllByText('Analytics'));
    expect(screen.getAllByText("Say Hello to the creator's page"));

    const burguerBtn = screen.getByLabelText('burguer-btn');
    const openCloseBtn = screen.getByLabelText('open_close-btn');
    const contactBtn = screen.getByLabelText('contact-tbn');

   })

 })