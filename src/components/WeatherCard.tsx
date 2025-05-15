import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useTheme } from '@hooks/useTheme';
import { WeatherResponse } from '@models/Weather.ts';

interface Props {
  weather: WeatherResponse;
}

const WeatherCard = ({ weather }: Props) => {
  const { theme } = useTheme();

  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.city, { color: theme.text }]}>{weather.name}</Text>

      <Image source={{ uri: icon }} style={styles.icon} />

      <Text style={[styles.temp, { color: theme.text }]}>
        {Math.round(weather.main.temp)}°C
      </Text>

      <Text style={[styles.desc, { color: theme.text }]}>
        {weather.weather[0].description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    elevation: 2,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 32,
    fontWeight: '500',
  },
  desc: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});

export default WeatherCard;
