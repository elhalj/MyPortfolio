import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
	render(<Header />);
	const linkElement = screen.getByText(/header text/i);
	expect(linkElement).toBeInTheDocument();
});