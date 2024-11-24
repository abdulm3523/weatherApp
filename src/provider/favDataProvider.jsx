import { FavContext } from "../context";
import { useLocalStorage } from "../hooks/useFavorite";

const FavDataProvider = ({ children }) => {
  const [favData, setFavData] = useLocalStorage("favorite", []);

  const addFavData = (latitude, longitude, location) => {
    setFavData([
      ...favData,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFavData = (location) => {
    const restFav = favData.filter((currLocation) => currLocation != location);
    setFavData(restFav);
  };

  return (
    <FavContext.Provider value={{ favData, addFavData, removeFavData }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavDataProvider };
