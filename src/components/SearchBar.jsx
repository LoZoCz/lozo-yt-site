// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/lozo-yt-site/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <form action="" className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="border-none outline-none rounded-full px-3 py-1 font-roboto text-lg w-48 lg:w-96 "
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        type="submit"
        className="absolute right-1 top-0 bottom-0 h-full text-red-600 aspect-square"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
      </button>
    </form>
  );
};
