import { useContext } from "react";
import { WeatherContext } from "../../context";
import weatherModeIcon, { getDate } from "../../utils";
import { PinIcon } from "../../icons";
export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);

  const { temp, location, date, weather } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={weatherModeIcon(weather)} alt="" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temp)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <PinIcon />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getDate(date, "time", false)} - {getDate(date, "date", false)}
      </p>
    </div>
  );
}
