import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';

export const saveLastCity = async (city: string) => {
  try {
    await (AsyncStorage as AsyncStorageStatic).setItem('LAST_CITY', city);
  } catch (error) {
    console.error('Error saving city to AsyncStorage:', error);
  }
};

export const getLastCity = async (): Promise<string | null> => {
  try {
    const city = await (AsyncStorage as AsyncStorageStatic).getItem(
      'LAST_CITY',
    );
    return city;
  } catch (error) {
    console.error('Error fetching city from AsyncStorage:', error);
    return null;
  }
};

export const saveTheme = async (theme: 'light' | 'dark') => {
  try {
    await (AsyncStorage as AsyncStorageStatic).setItem('THEME', theme);
  } catch (error) {
    console.error('Error saving theme to AsyncStorage:', error);
  }
};

export const getTheme = async (): Promise<'light' | 'dark' | null> => {
  try {
    const theme = await (AsyncStorage as AsyncStorageStatic).getItem('THEME');
    return theme as 'light' | 'dark' | null;
  } catch (error) {
    console.error('Error fetching theme from AsyncStorage:', error);
    return null;
  }
};
