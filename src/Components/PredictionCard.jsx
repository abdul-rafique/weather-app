import React, { useEffect, useState } from "react";
import { dateToDay } from "../DateTime";
import Icon from "./Icon";

function PredictionCard(props) {
  const { data } = props;

  const [dimensions, setDimensions] = useState({
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
    <div className="relative card card-bordered border-base-content cursor-pointer overflow-visible">
      <div className="card-body flex flex-col items-center p-3 md:p-6">
        <span className="text-lg md:text-2xl">{dateToDay(data.datetime)}</span>
        <Icon name={data.icon} size={dimensions.width > 425 ? 96 : 72} />
        <div className="flex items-center gap-3 text-base md:text-xl font-semibold">
          <span>
            {Math.round(data.tempmax)}
            <sup>o</sup>
          </span>
          <span className="opacity-60">
            {Math.round(data.tempmin)}
            <sup>o</sup>
          </span>
        </div>

        {/* Tooltip */}
        <span
          className="block absolute inset-0 z-10 tooltip tooltip-info"
          data-tip={data.conditions}
        ></span>
      </div>
    </div>
  );
}

export default PredictionCard;
