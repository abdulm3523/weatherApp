import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";
const WeatherDataProvider = ({ children }) => {
  const { weatherData, loading, err } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, err }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherDataProvider };
