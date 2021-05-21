import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Link } from './Link';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  ReactDOM.render(<Link />, document.createElement('div'));
});

// eslint-disable-next-line jest/no-commented-out-tests
// describe('Link', () => {
it('render', () => {
  render(<Link href={'url'} />);
  expect(screen.getByText(/link to/i)).toBeInTheDocument();
});

it('no prop', () => {
  render(<Link />);
  expect(screen.queryByText(/link to/i)).toBeNull();
  // screen.debug();
});
// });
