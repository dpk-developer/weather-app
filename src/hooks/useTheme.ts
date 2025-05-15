import { useSelector } from 'react-redux';

import { RootState } from '@store/index';
import { LightTheme, DarkTheme } from '@themes/index';

export const useTheme = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return {
    mode,
    theme: mode === 'light' ? LightTheme : DarkTheme,
  };
};
