import Rain from "./assets/icons/rainy.svg";
import Haze from "./assets/icons/haze.svg";
import Cloud from "./assets/icons/cloud.svg";
import Snow from "./assets/icons/snow.svg";
import Sun from "./assets/icons/sun.svg";
import Sunny from "./assets/icons/sunny.svg";
import Wind from "./assets/icons/wind.svg";
// import bg image
import RainBg from "./assets/backgrounds/rainy-day.jpg";
import HazeBg from "./assets/backgrounds/mist.jpeg";
import CloudBg from "./assets/backgrounds/few-clouds.jpg";
import SnowBg from "./assets/backgrounds/snow.jpg";
import SunBg from "./assets/backgrounds/clear-sky.jpg";
import SunnyBg from "./assets/backgrounds/sunny.jpg";
import WindBg from "./assets/backgrounds/winter.jpg";

export default function weatherModeIcon(value) {
  switch (value) {
    case "Rain":
      return Rain;
    case "Haze":
      return Haze;
    case "Clouds":
      return Cloud;
    case "Snow":
      return Snow;
    case "Sun":
      return Sun;
    case "Sunny":
      return Sunny;
    case "Wind":
      return Wind;
    case "Clear":
      return Sunny;

    default:
      break;
  }
}

function getDate(value, type, inMs) {
  if (!type) return value;

  if (!inMs) value *= 1000;

  const date = new Date(value);

  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  } else {
    throw new Error(`Invalid type: ${type}. Expected "date" or "time".`);
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

function weatherModeBg(value) {
  switch (value) {
    case "Rain":
      return RainBg;
    case "Haze":
      return HazeBg;
    case "Clouds":
      return CloudBg;
    case "Snow":
      return SnowBg;
    case "Sun":
      return SunBg;
    case "Sunny":
      return SunnyBg;
    case "Wind":
      return WindBg;
    case "Clear":
      return SunnyBg;

    default:
      break;
  }
}

export { getDate, weatherModeBg };
