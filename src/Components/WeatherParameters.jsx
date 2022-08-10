import React from "react";
import { WiRaindrop, WiWindy, WiCloud } from "react-icons/wi";

function WeatherParameters(props) {
  const { data } = props;

  return (
    <div className="card card-bordered bg-base-content text-base-100 overflow-visible">
      <div className="card-body flex-row gap-10 py-5 pr-14 font-semibold">
        <div
          className="flex items-center tooltip tooltip-info"
          data-tip="Humidity"
        >
          <WiRaindrop size={36} />
          <span className="block text-xl">
            {data.currentConditions.humidity}%
          </span>
        </div>
        <div
          className="flex items-center gap-2 tooltip tooltip-info"
          data-tip="Wind Speed"
        >
          <WiWindy size={36} />
          <span className="block text-xl">
            {data.currentConditions.windspeed} km/h
          </span>
        </div>
        <div
          className="flex items-center gap-2 tooltip tooltip-info"
          data-tip="Cloud"
        >
          <WiCloud size={36} />
          <span className="block text-xl">
            {data.currentConditions.cloudcover}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherParameters;
