import { render, screen } from '@testing-library/react';
import App from './App';

test('renders family roots link', () => {
  render(<App />);
  const linkElement = screen.getByText(/family roots therapy/i);
  expect(linkElement).toBeInTheDocument();
});
