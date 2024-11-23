import Header from "./components/header/header";
import WeatherBoard from "./components/weatherBoard/weatherBoard";
import "./App.css";
import useWeather from "./hooks/useWeather";
function App() {
  const { weatherData, loading, err } = useWeather();
  console.log(weatherData, err, loading);
  return (
    <>
      <Header />
      <p>{loading.message}</p>
      <main>
        <WeatherBoard />
      </main>
    </>
  );
}

export default App;
