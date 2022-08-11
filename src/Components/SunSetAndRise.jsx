import React from "react";
import { addAMPM } from "../DateTime";

function SunSetAndRise(props) {
  const { Icon, time, state } = props;
  return (
    <div
      className="flex flex-col items-center tooltip tooltip-info"
      data-tip={state}
    >
      <Icon size={48} />
      <span>{addAMPM(time)}</span>
    </div>
  );
}

export default SunSetAndRise;
