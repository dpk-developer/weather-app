import axios from 'axios';
import { OPEN_WEATHER_API_KEY } from '@env';
import { WeatherResponse } from '../models/Weather';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const fetchWeatherByCity = async (
  city: string,
): Promise<WeatherResponse> => {
  try {
    const { data } = await instance.get('/weather', {
      params: { q: city, appid: OPEN_WEATHER_API_KEY, units: 'metric' },
    });
    return data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        'An error occurred while fetching weather data',
    );
  }
};
