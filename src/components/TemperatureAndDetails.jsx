import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { RiWindyFill } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { TbSunset2 } from "react-icons/tb";
import { iconUrlFromCode } from "../services/weatherService";
import { formatToLocalTime } from "../services/weatherService";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className='items flex items-center justify-center py-6 '>
        <p className='text-xl text-yellow-400'>{details}</p>
      </div>

      <div className='flex flex-row items-center justify-between py-3 text-white'>
        <div className='w-1/3'>
          <img src={iconUrlFromCode(icon)} alt='red circle' className='w-20' />
        </div>
        <p className='text-5xl'>{temp.toFixed()}°</p>
        <div className='flex w-1/3 flex-col space-y-2'>
          <div className='flex items-center justify-center gap-2 text-sm font-light'>
            <FaTemperatureLow size={15} />
            Real fell:
            <span className='ml-font-medium'>{feels_like.toFixed()}°</span>
          </div>

          <div className='flex items-center justify-center gap-2 text-sm font-light'>
            <CiDroplet size={15} />
            Humidity:
            <span className='ml-font-medium'>{humidity}%</span>
          </div>

          <div className='flex items-center justify-center gap-2 text-sm font-light'>
            <RiWindyFill size={15} />
            Wind:
            <span className='ml-font-medium'>{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 py-3 text-sm text-white'>
        <BsSun />
        <p className='font-light'>
          Rise:{" "}
          <span className='ml-1 font-medium'>
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className='font-light'>|</p>
        <TbSunset2 />
        <p className='font-light'>
          Set:{" "}
          <span className='ml-1 font-medium'>
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className='font-light'>|</p>
        <AiOutlineArrowUp />
        <p className='font-light'>
          High: <span className='ml-1 font-medium'>{temp_max.toFixed()}°</span>
        </p>
        <p className='font-light'>|</p>
        <AiOutlineArrowDown />
        <p className='font-light'>
          Low: <span className='ml-1 font-medium'>{temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
