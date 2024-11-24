import Header from "./components/header/header";
import WeatherBoard from "./components/weatherBoard/weatherBoard";
import "./App.css";
import { WeatherDataProvider } from "./provider/weatherDataProvider";
import { FavDataProvider } from "./provider/favDataProvider";
import { LocationProvider } from "./provider/locationProvider";
import { weatherModeBg } from "./utils";
import { useContext } from "react";
import { WeatherContext } from "./context";
weatherModeBg;
function App() {
  const { loading } = useContext(WeatherContext);
  return (
    <>
      <div
        className="weatherAppBg"
        style={{
          backgroundImage: `url(.${weatherModeBg})`,
          backgroundColor: "#f7f7f7",
        }}
      >
        {loading && (
          <div className="loading">
            <p>{loading.message}</p>
          </div>
        )}

        <LocationProvider>
          <WeatherDataProvider>
            <FavDataProvider>
              <Header />
              <div className="grid w-screen h-screen justify-items-center align-middle self-center place-content-center">
                <WeatherBoard />
              </div>
            </FavDataProvider>
          </WeatherDataProvider>
        </LocationProvider>
      </div>
    </>
  );
}

export default App;
