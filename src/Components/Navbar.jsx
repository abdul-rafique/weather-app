import React from "react";
import {
  IoSearchOutline,
  IoMenuOutline,
  IoCloudOutline,
} from "react-icons/io5";

function Navbar(props) {
  const { handleLocationChange } = props;
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="navbar gap-3 sticky top-0 z-20 bg-base-100 shadow">
      {/* Logo */}
      <div className="flex-1">
        <a className="btn btn-link normal-case text-xl hover:no-underline flex gap-2">
          <IoCloudOutline size={32} />
          Weather App
        </a>
      </div>
      {/* Search Box for large screen */}
      <div className="flex-none group hidden md:block">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered "
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-primary btn-square"
              onClick={() => handleLocationChange(searchValue)}
            >
              <IoSearchOutline size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Search Box for large screen */}

      {/* Drawer Opener */}
      <div className="flex-none">
        <label
          htmlFor="myDrawer"
          className="btn btn-primary drawer-button lg:hidden px-2"
        >
          <IoMenuOutline size={32} />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
