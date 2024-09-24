import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StaticPage from '../src/app/pages/static/page';

describe('StaticPage', () => {
  it('renders correctly', () => {
    render(<StaticPage />);
    expect(screen.getByText('Statically Generated Page')).toBeInTheDocument();
  });
});
