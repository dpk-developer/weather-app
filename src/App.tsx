import React, { useEffect, Suspense, memo } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Switch,
  useColorScheme,
} from 'react-native';

import { Provider, useDispatch, useSelector } from 'react-redux';

import dark from './themes/dark';
import light from './themes/light';
import { getTheme } from './utils/storage';
import { setTheme } from './store/slices/themeSlice';
import { store, RootState, AppDispatch } from './store';

const HomeScreen = React.lazy(() => import('./screens/Homescreen'));

const ThemeToggle = memo(
  ({
    themeMode,
    toggle,
    theme,
  }: {
    themeMode: 'light' | 'dark';
    toggle: () => void;
    theme: typeof light | typeof dark;
  }) => {
    return (
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: theme.text }]}>
          {themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch value={themeMode === 'dark'} onValueChange={toggle} />
      </View>
    );
  },
);

const AppContent = () => {
  const sys = useColorScheme();
  const dispatch = useDispatch<AppDispatch>();
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const theme = themeMode === 'light' ? light : dark;

  useEffect(() => {
    getTheme().then(stored => {
      if (stored === 'light' || stored === 'dark') dispatch(setTheme(stored));
      else dispatch(setTheme(sys === 'dark' ? 'dark' : 'light'));
    });
  }, []);

  const toggle = () => {
    dispatch(setTheme(themeMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={themeMode === 'light' ? 'dark-content' : 'light-content'}
      />
      <ThemeToggle themeMode={themeMode} toggle={toggle} theme={theme} />
      <Suspense
        fallback={<Text style={{ color: theme.text }}>Loading...</Text>}>
        <HomeScreen />
      </Suspense>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  toggleText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
