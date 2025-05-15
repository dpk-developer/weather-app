module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', { moduleName: '@env' }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@App': './src/App',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@themes': './src/themes',
          '@utils': './src/utils',
          '@viewModels': './src/viewmodels',
        },
      },
    ],
  ],
};
