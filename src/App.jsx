import Header from "./components/header/header";
import WeatherBoard from "./components/weatherBoard/weatherBoard";
import "./App.css";
import { WeatherDataProvider } from "./provider/weatherDataProvider";
function App() {
  return (
    <>
      <WeatherDataProvider>
        <Header />
        <div className="grid w-screen h-screen justify-items-center align-middle self-center place-content-center">
          <WeatherBoard />
        </div>
      </WeatherDataProvider>
    </>
  );
}

export default App;
