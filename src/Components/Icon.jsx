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
        return <WiSnow size={size} {...props} />;

      case "snow-showers-day":
        return <WiDaySnow size={size} {...props} />;

      case "snow-showers-night":
        return <WiNightSnow size={size} {...props} />;

      case "rain":
        return <WiRain size={size} {...props} />;

      case "thunder-rain":
        return <WiThunderstorm size={size} {...props} />;

      case "thunder-showers-day":
        return <WiDayThunderstorm size={size} {...props} />;

      case "thunder-showers-night":
        return <WiNightAltThunderstorm size={size} {...props} />;

      case "showers-day":
        return <WiDayShowers size={size} {...props} />;

      case "showers-night":
        return <WiNightAltShowers size={size} {...props} />;

      case "fog":
        return <WiFog size={size} {...props} />;

      case "wind":
        return <WiWindy size={size} {...props} />;

      case "cloudy":
        return <WiCloudy size={size} {...props} />;

      case "partly-cloudy-day":
        return <WiDayCloudy size={size} {...props} />;

      case "partly-cloudy-night":
        return <WiNightAltPartlyCloudy size={size} {...props} />;

      case "clear-day":
        return <WiDaySunny size={size} {...props} />;

      case "clear-night":
        return <WiNightClear size={size} {...props} />;

      default:
        return <IoHelp size={size} {...props} />;
    }
  }, [name, size]);

  return <>{handleIcon()}</>;
}

export default Icon;
