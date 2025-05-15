# 📱 WeatherApp

A scalable React Native Weather App built with **TypeScript**, **Redux Toolkit**, **MVVM architecture**, **Dark/Light Mode**, **Jest + Enzyme** for testing, **Custom Hooks**, and **Centralized HTTP services**.

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js ≥ 16
- Yarn or npm
- Android Studio / Xcode
- React Native CLI
- Xcode CLI tools (for iOS)
- CocoaPods (for iOS)

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/dpk-developer/weather-app.git
cd weather-app

# Install dependencies
yarn install

# iOS only: Install CocoaPods
cd ios && pod install && cd ..
```

---

## 📲 Running the App

### ✅ Android

Start Android emulator or connect a device, then run:

```bash
yarn android
```

### 🍏 iOS

Start iOS simulator (or connect device), then run:

```bash
yarn ios
```

> Ensure you've run `cd ios && pod install` at least once before launching on iOS.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your API key:

```env
OPEN_WEATHER_API_KEY=your_api_key_here
BASE_URL=https://api.openweathermap.org/data/2.5
```

Use the variables in your app via a library `react-native-dotenv`.

Example usage:

```ts
import { OPEN_WEATHER_API_KEY } from '@env';
```

---

## 🧪 Running Tests

### ▶️ Run All Tests

```bash
yarn test
```

### 🛠️ Jest Configuration Highlights

- React Native modules in `node_modules` are included in transform
- Setup file includes gesture handler and extended matchers

Example `jest.config.js`:

```js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@?react-native|@react-native|react-native|react-redux|@reduxjs/toolkit)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

```

---

## 📦 Babel Configuration

Example `babel.config.js`:

```js
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


```

---

## 🧩 Project Structure (MVVM)

```
src/
├── models/              # ViewModel logic
├── views/               # React Native screens & components
├── redux/               # Redux Toolkit store & slices
├── services/            # Centralized API calls
├── hooks/               # Custom reusable hooks
└── theme/               # Dark/Light mode themes
```

---

## ✅ Features

- 🌤️ Real-time weather info
- 🔁 Redux Toolkit for state management
- 🧠 MVVM architecture for clean separation
- 🌓 Dark & Light mode toggle
- 🔬 Unit tests with snapshot coverage
- 📱 Fully responsive and cross-platform