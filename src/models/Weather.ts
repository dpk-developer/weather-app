export interface WeatherResponse {
  name: string;
  main: { temp: number };
  weather: [{ description: string; icon: string }];
}
