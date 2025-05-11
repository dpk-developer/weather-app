import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useTheme } from '../hooks/useTheme';

interface Props {
  city: string;
  onChange: (t: string) => void;
  onSubmit: () => void;
}

const IC_SEARCH = require('../assets/icons/search.png');

const SearchBar = ({ city, onChange, onSubmit }: Props) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[
          styles.input,
          {
            color: theme.text,
            backgroundColor: theme.inputBackground,
          },
        ]}
        placeholder="Enter city"
        placeholderTextColor={theme.placeholder}
        value={city}
        onChangeText={onChange}
      />
      <TouchableOpacity
        accessibilityRole="button"
        testID="search-button"
        style={[styles.iconContainer, { backgroundColor: theme.button }]}
        onPress={onSubmit}>
        <Image
          source={IC_SEARCH}
          style={[styles.searchIcon, { tintColor: theme.icon }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    margin: 16,
    height: 54,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
    fontWeight: '500',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  iconContainer: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default SearchBar;
