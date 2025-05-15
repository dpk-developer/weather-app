import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '@store/index.ts';
import { fetchWeather } from '@store/slices/weatherSlice.ts';
import { saveLastCity, getLastCity } from '@utils/storage.ts';

export const useHomeViewModel = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector((s: RootState) => s.weather);

  const [city, setCity] = useState<string>('');

  useEffect(() => {
    getLastCity().then(_city => {
      if (_city) {
        setCity(_city);
        dispatch(fetchWeather(_city));
      }
    });
  }, [dispatch]);

  const fetch = () => {
    dispatch(fetchWeather(city));
    saveLastCity(city);
  };

  return { city, setCity, data, loading, error, fetch };
};
