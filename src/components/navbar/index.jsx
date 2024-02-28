import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav
      className="navbar flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0"
    >
      <h2 className="text-2xl font-semibold text-black">
        <NavLink to="/">FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center mt-4 lg:mt-0">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white px-4 py-2 rounded-full outline-none lg:w-96 mr-4 shadow-md shadow-gray-300 focus:shadow-gray-400"
        />
        <button type="submit" className="navbar-btn">
          Search
        </button>
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="navbar-link">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
