import { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import { LocationContext } from "../../context";
import { findLocationByName } from "../../data/locationData";
findLocationByName;
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);
  function handelOnSubmit(e) {
    e.preventDefault();
    console.log(searchTerm);
    const fetchedLocation = findLocationByName(searchTerm.toLowerCase());
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }
  return (
    <form action="#" onSubmit={handelOnSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
}
