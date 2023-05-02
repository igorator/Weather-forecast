import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

const Forecast = ({ title, forecasts }) => {
  return (
    <div>
      <div className='mt-6 flex items-center justify-start'>
        <p className='font-medium uppercase text-white'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        {forecasts &&
          forecasts.map((forecast) => (
            <div
              key={forecast.time}
              className='flex flex-col items-center justify-center'
            >
              <p className='text-sm font-light'>{forecast.time}</p>
              <img
                src={iconUrlFromCode(forecast.icon)}
                alt='red circle'
                className='my-1 w-12'
              />
              <p className='font-medium'>{forecast.temp.toFixed()}°</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
