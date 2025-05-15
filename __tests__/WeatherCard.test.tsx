import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherCard from '@components/WeatherCard';
import { WeatherResponse } from '@models/Weather';

jest.mock('@hooks/useTheme', () => ({
  useTheme: () => ({
    theme: {
      text: '#000',
      card: '#fff',
    },
  }),
}));

const mockWeather: WeatherResponse = {
  name: 'London',
  main: { temp: 21 },
  weather: [{ description: 'clear sky', icon: '01d' }],
};

describe('WeatherCard', () => {
  it('renders weather info correctly', () => {
    const { getByText, toJSON } = render(<WeatherCard weather={mockWeather} />);
    expect(getByText('London')).toBeTruthy();
    expect(getByText('21°C')).toBeTruthy();
    expect(getByText('clear sky')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
