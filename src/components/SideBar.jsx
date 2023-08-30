import { categories } from "../utils/constans";
import PropTypes from "prop-types";
export const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section
      className="sidebar flex flex-row gap-2 h-fit items-center px-2 lg:p-4 border-neutral-800 border-r-2 border-solid lg:sticky bg-neutral-900 overflow-x-scroll lg:flex-col"
      style={{ top: "5rem" }}
    >
      {categories.map((btn, i) => {
        return (
          <button
            key={i}
            className="flex items-center justify-start gap-2 w-full py-2 px-3 rounded-full transition-colors duration-200 ease-in-out hover:bg-red-600 group"
            style={{
              backgroundColor:
                btn.name === selectedCategory && "rgb(220, 38, 38)",
            }}
            onClick={() => {
              setSelectedCategory(btn.name);
            }}
          >
            <span
              className="text-red-600 transition-colors duration-200 ease-in-out group-hover:text-white"
              style={{
                color: btn.name === selectedCategory && "rgb(255, 255, 255)",
              }}
            >
              {btn.icon}
            </span>
            <span
              className="text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-100"
              style={{
                color: btn.name === selectedCategory && "rgb(245, 245, 245)",
              }}
            >
              {btn.name}
            </span>
          </button>
        );
      })}
    </section>
  );
};

SideBar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};
