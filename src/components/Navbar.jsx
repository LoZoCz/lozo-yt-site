import { Link } from "react-router-dom";
import { logo } from "../utils/constans";
import { SearchBar } from "./SearchBar";
export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-8 sticky top-0 w-full py-2 px-16 bg-neutral-900 z-10">
      <Link to="/lozo-yt-site" className="flex items-center">
        <img src={logo} alt="logo" className="h-12" />
      </Link>
      <SearchBar />
    </nav>
  );
};
