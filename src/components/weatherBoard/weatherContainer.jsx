import TempMaxIcon from "../../assets/icons/temp-max.svg";
import TempMinIcon from "../../assets/icons/temp-min.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartRedIcon from "../../assets/icons/heart-red.svg";
import HumadityIcon from "../../assets/icons/humidity.svg";
import CloudyIcon from "../../assets/icons/cloud.svg";
import WindIcon from "../../assets/icons/wind.svg";
import { useContext } from "react";
import { WeatherContext } from "../../context";

export default function WeatherContainer() {
  const { weatherData } = useContext(WeatherContext);
  const { weather, maxTemp, minTemp, humadity, cloudy, wind } = weatherData;

  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with {weather}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{maxTemp}</p>
            <img src={TempMaxIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{minTemp}°</p>
            <img src={TempMinIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humadity}%</p>
            <img src={HumadityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudy}%</p>
            <img src={CloudyIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={WindIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
