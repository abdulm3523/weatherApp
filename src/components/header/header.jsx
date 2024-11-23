import Favorite from "./favorite";
import FavoriteModal from "./favoriteModal";
import Logo from "./logo";
import SearchBar from "./searchBar";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchBar />

          <Favorite />
          {/* <!-- Modal --> */}
          <FavoriteModal />
        </div>
      </nav>
    </header>
  );
}
