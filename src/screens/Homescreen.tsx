import React, { Suspense } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@hooks/useTheme';
import { RootState, AppDispatch } from '@store/index';
import { fetchWeather, setCity } from '@store/slices/weatherSlice';

const SearchBar = React.lazy(() => import('@components/SearchBar'));
const WeatherCard = React.lazy(() => import('@components/WeatherCard'));

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { city, data, loading, error } = useSelector(
    (state: RootState) => state.weather,
  );

  const { theme } = useTheme();

  const handleFetch = () => {
    if (city) dispatch(fetchWeather(city));
  };

  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }}>
      <Suspense
        fallback={
          <Text style={{ color: theme.text, textAlign: 'center' }}>
            Loading UI...
          </Text>
        }>
        <SearchBar
          city={city}
          onChange={(text: string) => dispatch(setCity(text))}
          onSubmit={handleFetch}
        />
        {loading && (
          <Text style={{ color: theme.text, textAlign: 'center' }}>
            Loading...
          </Text>
        )}
        {error && <Text style={styles.notFound}>{error}</Text>}
        {data && <WeatherCard weather={data} />}
      </Suspense>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notFound: {
    color: 'red',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
