import React, { useEffect } from "react";
import { WiCloudy, WiCelsius } from "react-icons/wi";
import { dateToDay, getCustomDateFormat } from "../DateTime";
import Icon from "./Icon";

function WeatherCard(props) {
  const { data } = props;

  return (
    <div className="card">
      <div className="card-body flex flex-col items-center px-10">
        <h3 className="text-4xl text-center">
          {dateToDay(data.days[0].datetime)}{" "}
          {getCustomDateFormat(data.timezone)}
        </h3>

        <span className="block text-2xl">{}</span>
        <span className="block text-2xl">{data.resolvedAddress}</span>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center gap-5 pr-10">
            <Icon name={data.currentConditions.icon} size={196} />

            <div>
              <div className="flex items-center">
                <span className="relative text-9xl">
                  {Math.ceil(data.currentConditions.temp)}
                  <WiCelsius size={128} className="absolute -top-5 -right-24" />
                </span>
              </div>
              <span className="text-2xl">
                {data.currentConditions.conditions}
              </span>
            </div>
          </div>
          <p className="text-xl">"{data.description}"</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
