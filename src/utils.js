import Rain from "./assets/icons/rainy.svg";
import Haze from "./assets/icons/haze.svg";
import Cloud from "./assets/icons/cloud.svg";
import Snow from "./assets/icons/snow.svg";
import Sun from "./assets/icons/sun.svg";
import Sunny from "./assets/icons/sunny.svg";
import Wind from "./assets/icons/wind.svg";

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

export { getDate };
