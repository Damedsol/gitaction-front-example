import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link with random messaje', () => {
  render(<App />);
  const linkElement = screen.getByText(/random mesage/i);
  expect(linkElement).toBeInTheDocument();
});