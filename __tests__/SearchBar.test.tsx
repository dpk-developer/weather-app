import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import SearchBar from '@components/SearchBar';

jest.mock('@hooks/useTheme.ts', () => ({
  useTheme: () => ({
    theme: {
      background: '#fff',
      text: '#000',
      inputBackground: '#eee',
      placeholder: '#888',
      button: '#333',
      icon: '#fff',
    },
  }),
}));

describe('SearchBar', () => {
  it('renders correctly and handles input', () => {
    const mockChange = jest.fn();
    const mockSubmit = jest.fn();

    const { getByPlaceholderText, getByTestId, toJSON } = render(
      <SearchBar city="London" onChange={mockChange} onSubmit={mockSubmit} />,
    );

    const input = getByPlaceholderText('Enter city');
    fireEvent.changeText(input, 'Paris');

    const button = getByTestId('search-button');
    fireEvent.press(button);

    expect(mockChange).toHaveBeenCalledWith('Paris');
    expect(mockSubmit).toHaveBeenCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
