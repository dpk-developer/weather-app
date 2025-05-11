import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTheme, saveTheme } from '../../utils/storage';

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      saveTheme(action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
