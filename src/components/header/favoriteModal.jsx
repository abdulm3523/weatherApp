import { useContext } from "react";
import { FavContext, LocationContext } from "../../context";
import { findLocationByName } from "../../data/locationData";
export default function FavoriteModal({ showModal }) {
  const { favData } = useContext(FavContext);
  const { setSelectedLocation } = useContext(LocationContext);

  const handelOnClick = (e, location) => {
    e.preventDefault();
    const chooseLocation = findLocationByName(location);
    setSelectedLocation({ ...chooseLocation });
  };
  return (
    <>
      {showModal && (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {favData.length > 0 ? (
              favData.map((item) => (
                <li key={item.location} className="hover:bg-gray-200">
                  <a onClick={(e) => handelOnClick(e, item.location)} href="">
                    {item.location}
                  </a>
                </li>
              ))
            ) : (
              <p>No Favorites</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
