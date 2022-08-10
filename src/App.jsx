import React, { useEffect } from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { useFetchWeatherByCityQuery } from "./features/weather/weather-api-slice";

import Navbar from "./Components/Navbar";
import PredictionCard from "./Components/PredictionCard";
import WeatherCard from "./Components/WeatherCard";
import WeatherParameters from "./Components/WeatherParameters";
import { addAMPM } from "./DateTime";

const favCities = [
  "karachi",
  "lahore",
  "islamabad",
  "peshawar",
  "quetta",
  "multan",
  "sialkot",
];

function App() {
  const [locationName, setLocationName] = React.useState("karachi");
  const { data, error, isFetching, isLoading, isError } =
    useFetchWeatherByCityQuery({
      locationName,
    });

  const handleLocationChange = (value) => {
    setLocationName(value);
  };

  return (
    <div className="drawer drawer-mobile drawer-end bg-base">
      <input id="myDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pb-10">
        {/* <!-- Page content here --> */}
        <Navbar handleLocationChange={handleLocationChange} />
        {isFetching && (
          <div className="h-screen flex items-center justify-center">
            Fetching...
          </div>
        )}
        {isLoading && (
          <div className="h-screen flex items-center justify-center">
            Loading...
          </div>
        )}
        {isError && (
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col text-red-400">
              <span className="text-lg font-bold">{error.status}</span>
              <span>{error.data.split(".")[0]}</span>
            </div>
          </div>
        )}
        {!isError && data && (
          <>
            <div className="flex flex-col items-center py-2 px-10 mb-10">
              <WeatherCard data={data} />
              <WeatherParameters data={data} />
            </div>

            <div className="flex justify-center items-center gap-36 mb-10 px-5 font-semibold">
              <div
                className="flex flex-col items-center tooltip tooltip-info"
                data-tip="Sunrise"
              >
                <WiSunrise size={48} />
                <span>{addAMPM(data.currentConditions.sunrise)}</span>
              </div>
              <div
                className="flex flex-col items-center tooltip tooltip-info"
                data-tip="Sunset"
              >
                <WiSunset size={48} />
                <span>{addAMPM(data.currentConditions.sunset)}</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap px-10 xl:px-36">
              {data.days.map((dwData) => (
                <PredictionCard
                  key={dwData.datetime.split("-").join("")}
                  data={dwData}
                />
              ))}
              {!data && (
                <div className="flex flex-col items-center justify-center">
                  <h1>No data</h1>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <div className="drawer-side">
        <label htmlFor="myDrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="menu-title">
            <span>Favorite Cities</span>
          </li>
          <li></li>
          {favCities.map((city) => (
            <li key={city}>
              <a onClick={() => handleLocationChange(city)}>
                {city.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
