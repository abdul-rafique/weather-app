import React from "react";
import { IoClose } from "react-icons/io5";

const favCities = [
  "karachi",
  "lahore",
  "islamabad",
  "peshawar",
  "quetta",
  "multan",
  "sialkot",
];

function Sidebar(props) {
  const { handleLocationChange } = props;

  return (
    <div className="drawer-side border-l">
      <label htmlFor="myDrawer" className="drawer-overlay"></label>

      <div className="relative overflow-y-auto w-80">
        <label
          htmlFor="myDrawer"
          className="absolute z-20 right-2 btn btn-ghost drawer-button px-2"
        >
          <IoClose size={32} className="lg:hidden" />
        </label>
        <ul className="menu p-4 h-full bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="menu-title">
            <span>Favorite Cities</span>
          </li>
          <li></li>
          {favCities.map((city) => (
            <li key={city}>
              <a
                onClick={() => handleLocationChange(city)}
                className="relative"
              >
                {city.toUpperCase()}
                <label
                  htmlFor="myDrawer"
                  className="absolute z-20 inset-0"
                ></label>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
