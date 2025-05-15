import React from 'react';
import { render } from '@testing-library/react-native';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import themeReducer, { ThemeState } from '@store/slices/themeSlice';
import weatherReducer, { WeatherState } from '@store/slices/weatherSlice';

jest.mock('@components/SearchBar.tsx', () => () => <></>);
jest.mock('@components/WeatherCard.tsx', () => () => <></>);

describe('HomeScreen', () => {
  it('renders correctly with initial state', () => {
    type RootState = {
      weather: WeatherState;
      theme: ThemeState;
    };

    const store = configureStore<RootState>({
      reducer: {
        weather: weatherReducer,
        theme: themeReducer,
      },
      preloadedState: {
        weather: {
          city: 'Paris',
          data: null,
          loading: false,
          error: null,
        },
        theme: { mode: 'light' },
      },
    });

    const HomeScreen = require('@screens/Homescreen').default;

    const { toJSON } = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
