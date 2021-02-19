import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Open Banking Brasil title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open Banking Brasil/i);
  expect(linkElement).toBeInTheDocument();
});
