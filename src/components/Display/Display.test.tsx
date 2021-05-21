import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Display } from './Display';
import { api } from '../../utils/api';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
});

it('render', () => {
  jest.mock()
  render(<Display url={'url'} />);
  expect(screen.getByText(/data/i)).toBeInTheDocument();
});
