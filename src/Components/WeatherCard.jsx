import React, { useEffect } from "react";
import { WiCelsius } from "react-icons/wi";
import { dateToDay, getCustomDateFormat } from "../DateTime";
import Icon from "./Icon";

function WeatherCard(props) {
  const { data } = props;
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="card">
      <div className="card-body flex flex-col items-center px-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center">
          {dateToDay(data.days[0].datetime)}{" "}
          {getCustomDateFormat(data.timezone)}
        </h3>

        <span className="block text-xl lg:text-2xl">
          {data.resolvedAddress}
        </span>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center gap-x-3 pr-10">
            <div className="mt-5">
              <Icon
                name={data.currentConditions.icon}
                size={dimensions.width > 425 ? 196 : 96}
              />
            </div>

            <div className="flex items-center">
              <span className="relative text-7xl md:text-9xl">
                {Math.ceil(data.currentConditions.temp)}
                <WiCelsius
                  size={dimensions.width > 425 ? 128 : 96}
                  className="absolute -top-5 -right-[4.5rem] md:-right-24"
                />
              </span>
            </div>
          </div>

          <span className="text-xl md:text-2xl font-semibold text-center">
            {data.currentConditions.conditions}
          </span>
          <p className="text-xl text-center">"{data.description}"</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
