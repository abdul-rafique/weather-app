import React from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { ClockLoader } from "react-spinners";
import { useFetchWeatherByCityQuery } from "./features/weather/weather-api-slice";

import Navbar from "./Components/Navbar";
import PredictionCard from "./Components/PredictionCard";
import WeatherCard from "./Components/WeatherCard";
import WeatherParameters from "./Components/WeatherParameters";
import Sidebar from "./Components/Sidebar";
import SunSetAndRise from "./Components/SunSetAndRise";

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
        <Navbar handleLocationChange={handleLocationChange} />

        {/* <!-- Main content Start --> */}
        {/* onFetch */}
        {isFetching && (
          <div className="h-screen flex items-center justify-center">
            <ClockLoader size={64} className="bg-primary" />
          </div>
        )}

        {/* onLoad */}
        {isLoading && (
          <div className="h-screen flex items-center justify-center">
            Loading...
          </div>
        )}

        {/* onError */}
        {isError && (
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col text-red-400">
              <span className="text-lg font-bold">{error.status}</span>
              <span>{error.data.split(".")[0]}</span>
            </div>
          </div>
        )}

        {/* onSuccess */}
        {!isError && data && (
          <div className="px-10 xl:px-56">
            {/* Today's weather */}
            <div className="flex flex-col items-center py-2 mb-10">
              <WeatherCard data={data} />
              <WeatherParameters data={data} />
            </div>

            {/* Sunrise and Sunset Time */}
            <div className="flex justify-center items-center gap-16 md:gap-36 mb-10 font-semibold">
              <SunSetAndRise
                Icon={WiSunrise}
                time={data.currentConditions.sunrise}
                state="Sunrise"
              />
              <SunSetAndRise
                Icon={WiSunset}
                time={data.currentConditions.sunset}
                state="Sunset"
              />
            </div>

            {/* Weather pridiction for next 7 days */}
            <div className="flex justify-center items-center gap-5 flex-wrap">
              {data.days.map((dwData) => (
                <PredictionCard
                  key={dwData.datetime.split("-").join("")}
                  data={dwData}
                />
              ))}
            </div>
          </div>
        )}

        {/* <!-- Main content End --> */}
      </div>

      {/* Sidebar */}
      <Sidebar handleLocationChange={handleLocationChange} />
    </div>
  );
}

export default App;
