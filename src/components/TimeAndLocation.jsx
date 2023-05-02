import React from "react";
import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div className='my-6 flex items-center justify-center'>
        <p className='text-xl font-extralight text-white'>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className='my-3 flex items-center justify-center'>
        <p className='text-3xl font-medium text-white'>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
