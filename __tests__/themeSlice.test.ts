import themeReducer, { setTheme } from '../src/store/slices/themeSlice';

describe('themeSlice', () => {
  it('should return initial state', () => {
    expect(themeReducer(undefined, { type: '' })).toEqual({ mode: 'light' });
  });

  it('should change theme', () => {
    const state = themeReducer({ mode: 'light' }, setTheme('dark'));
    expect(state.mode).toBe('dark');
  });
});
