import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slices/themeSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
