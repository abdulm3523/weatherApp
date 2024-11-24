import { useContext, useEffect, useState } from "react";
import { FavContext, WeatherContext } from "../../context";
import HeartIcon from "../../assets/icons/heart.svg";
import RedHeartIcon from "../../assets/icons/heart-red.svg";
export default function AddToFavorite() {
  const { favData, addFavData, removeFavData } = useContext(FavContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const [isFav, toggleisFav] = useState(false);

  // useEffect(() => {
  //   const found = favData.find(
  //     (favLocation) => favLocation.location == location
  //   );

  // }, []);

  function handelFav() {
    console.log(favData);
    const found = favData.find(
      (favLocation) => favLocation.location == location
    );

    if (!found) {
      addFavData(latitude, longitude, location);
      console.log("agggg", found);
    } else {
      removeFavData(location);
      console.log("rgggg", found);
    }
    toggleisFav(!isFav);
  }

  return (
    <div className="md:col-span-2 pt-10">
      <div className="flex items-center justify-end space-x-6 pt-10">
        <button
          onClick={handelFav}
          className="pt-10 text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          {isFav ? (
            <img src={RedHeartIcon} alt="" />
          ) : (
            <img src={HeartIcon} alt="" />
          )}
        </button>
      </div>
    </div>
  );
}
