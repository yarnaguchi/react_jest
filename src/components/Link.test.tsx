import { render, screen } from '@testing-library/react';
import { Link } from './Link';

it('renders learn react link', () => {
  render(<Link href={'url'} />);
  const linkElement = screen.getByText(/link to/i);
  expect(linkElement).toBeInTheDocument();
});
