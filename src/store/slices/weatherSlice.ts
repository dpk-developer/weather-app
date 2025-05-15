import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { WeatherResponse } from '@models/Weather';
import { fetchWeatherByCity } from '@services/weatherService';

export interface WeatherState {
  city: string;
  data: WeatherResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  city: '',
  data: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk<
  WeatherResponse,
  string,
  { rejectValue: string }
>('weather/fetchWeather', async (city, { rejectWithValue }) => {
  try {
    return await fetchWeatherByCity(city);
  } catch (err) {
    let errorMessage = 'Unknown error';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return rejectWithValue(errorMessage);
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unexpected error';
      });
  },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
