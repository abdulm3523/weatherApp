import { useState, useEffect, useContext } from "react";
import { LocationContext } from "../context";
LocationContext;
const useWeather = () => {
  const [weatherData, setWeatherDate] = useState({
    location: "",
    weather: "",
    temp: "",
    date: "",
    maxTemp: "",
    minTemp: "",
    humadity: "",
    cloudy: "",
    wind: "",
    latitude: "",
    longitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [err, setErr] = useState(null);

  const { selectedLocation } = useContext(LocationContext);
  const fetchData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching data...",
      });

      //Todo: call to fetch data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      // Checking error
      if (!response.ok) {
        const errorMessage = `Fetching date failed ${response.status}`;
        throw new Error(errorMessage);
      }

      // fetching data
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        temp: data?.main?.temp,
        weather: data?.weather[0]?.main,
        date: data?.dt,
        maxTemp: data?.main?.temp_max,
        minTemp: data?.main?.temp_min,
        humadity: data?.main?.humidity,
        cloudy: data?.clouds?.all,
        wind: data?.wind?.speed,
        latitude: latitude,
        longitude: longitude,
      };
      setWeatherDate(updateWeatherData);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Fetching Date....",
    });
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    loading,
    err,
  };
};

export default useWeather;
