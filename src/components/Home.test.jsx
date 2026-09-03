import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('portfolio call to action navigates to portfolio route', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const portfolioLink = screen.getByRole('link', { name: /view portfolio/i });

  expect(portfolioLink.getAttribute('href')).toBe('/portfolio');
});