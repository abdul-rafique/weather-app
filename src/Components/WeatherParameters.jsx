import React from "react";
import { WiRaindrop, WiWindy, WiCloud } from "react-icons/wi";

function WeatherParameters(props) {
  const { data } = props;

  return (
    <div className="min-w-fit card card-bordered bg-base-content text-base-100 text-lg overflow-visible">
      <div className="min-w-fit card-body md:flex-row gap-5 md:gap-10 py-5 pl-5 md:pl-8 md:pr-14 font-semibold">
        <div
          className="min-w-fit flex items-center flex-1 tooltip tooltip-info"
          data-tip="Humidity"
        >
          <WiRaindrop size={36} />
          <span className="block">{data.currentConditions.humidity}%</span>
        </div>
        <div
          className="min-w-fit flex flex-nowrap items-center gap-2 tooltip tooltip-info"
          data-tip="Wind Speed"
        >
          <WiWindy size={36} />
          <span className="block">{data.currentConditions.windspeed} km/h</span>
        </div>
        <div
          className="min-w-fit flex items-center gap-2 tooltip tooltip-info"
          data-tip="Cloud"
        >
          <WiCloud size={36} />
          <span className="block">{data.currentConditions.cloudcover}%</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherParameters;
