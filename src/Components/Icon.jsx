import React, { useCallback } from "react";
import {
  WiSnow,
  WiDaySnow,
  WiNightSnow,
  WiRain,
  WiThunderstorm,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiDayShowers,
  WiNightAltShowers,
  WiFog,
  WiWindy,
  WiCloudy,
  WiDayCloudy,
  WiNightAltPartlyCloudy,
  WiDaySunny,
  WiNightClear,
} from "react-icons/wi";

import { IoHelp } from "react-icons/io5";

function Icon(props) {
  const { name, size } = props;

  const handleIcon = useCallback(() => {
    switch (name) {
      case "snow":
        return <WiSnow size={size} />;

      case "snow-showers-day":
        return <WiDaySnow size={size} />;

      case "snow-showers-night":
        return <WiNightSnow size={size} />;

      case "rain":
        return <WiRain size={size} />;

      case "thunder-rain":
        return <WiThunderstorm size={size} />;

      case "thunder-showers-day":
        return <WiDayThunderstorm size={size} />;

      case "thunder-showers-night":
        return <WiNightAltThunderstorm size={size} />;

      case "showers-day":
        return <WiDayShowers size={size} />;

      case "showers-night":
        return <WiNightAltShowers size={size} />;

      case "fog":
        return <WiFog size={size} />;

      case "wind":
        return <WiWindy size={size} />;

      case "cloudy":
        return <WiCloudy size={size} />;

      case "partly-cloudy-day":
        return <WiDayCloudy size={size} />;

      case "partly-cloudy-night":
        return <WiNightAltPartlyCloudy size={size} />;

      case "clear-day":
        return <WiDaySunny size={size} />;

      case "clear-night":
        return <WiNightClear size={size} />;

      default:
        return <IoHelp size={size} />;
    }
  }, [name, size]);

  return <>{handleIcon()}</>;
}

export default Icon;
