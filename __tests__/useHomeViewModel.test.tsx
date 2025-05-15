import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-hooks';

import weatherReducer from '@store/slices/weatherSlice';
import { useHomeViewModel } from '@viewModels/useHomeViewModel';

jest.mock('@utils/storage.ts', () => ({
  getLastCity: () => Promise.resolve('Berlin'),
  saveLastCity: jest.fn(),
}));

jest.mock('@services/weatherService.ts', () => ({
  fetchWeatherByCity: () =>
    Promise.resolve({
      name: 'Berlin',
      main: { temp: 20 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    }),
}));

describe('useHomeViewModel', () => {
  it('loads last city on mount and fetches weather', async () => {
    const store = configureStore({
      reducer: { weather: weatherReducer },
    });

    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useHomeViewModel(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.city).toBe('Berlin');
    expect(result.current.data?.name).toBe('Berlin');
  });
});
