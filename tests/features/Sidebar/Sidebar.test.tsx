import React from 'react';
import { render, screen } from '@testing-library/react';

import { Sidebar } from '../../../src/features/Sidebar/Sidebar';

describe('Tests in Navbar.tsx', () => { 

  test('should render the navigation menu by default', () => { 
    const {container} = render (<Sidebar />);

    expect(screen.getAllByText('News Feed'));
    expect(screen.getAllByText('Trending'));
    expect(screen.getAllByText('Platforms'));
    expect(screen.getAllByText('Genres'));
    expect(screen.getAllByText('Settings'));
    expect(screen.getAllByText('Analitics'));

   })

 })