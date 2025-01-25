import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders header, main, and footer components', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assuming your Header component contains a specific text
  const headerElement = screen.getByText(/Elhalj./i);
  expect(headerElement).toBeInTheDocument();

  // Assuming your Main component contains a specific text
  const mainElement = screen.getByText(/Frontend Developer/i);
  expect(mainElement).toBeInTheDocument();

  // Assuming your Footer component contains a specific text
  const footerElement = screen.getByText(/Footer Text/i); // Replace with actual text in your Footer
  expect(footerElement).toBeInTheDocument();
});
