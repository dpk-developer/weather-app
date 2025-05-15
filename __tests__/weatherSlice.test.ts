import weatherReducer, {
  setCity,
  fetchWeather,
} from '@store/slices/weatherSlice';
import { WeatherResponse } from '@models/Weather';

describe('weatherSlice', () => {
  it('should handle initial state', () => {
    expect(weatherReducer(undefined, { type: '' })).toEqual({
      city: '',
      data: null,
      loading: false,
      error: null,
    });
  });

  it('should handle setCity', () => {
    const state = weatherReducer(undefined, setCity('Paris'));
    expect(state.city).toBe('Paris');
  });

  it('should handle fulfilled fetchWeather', () => {
    const mockPayload: WeatherResponse = {
      name: 'Paris',
      main: { temp: 20 },
      weather: [{ description: 'sunny', icon: '01d' }],
    };
    const state = weatherReducer(undefined, {
      type: fetchWeather.fulfilled.type,
      payload: mockPayload,
    });
    expect(state.data).toEqual(mockPayload);
    expect(state.loading).toBe(false);
  });
});
