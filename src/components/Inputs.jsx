import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handeSearchClick = () => {
    if (city && city !== "") setQuery({ q: city });
    else return;
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location...");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success(`Location fetched.`);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setCity("");
        setQuery({ lat, lon });
      });
    }
  };

  const handleClickUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className='my-6 flex flex-row justify-center'>
      <div className=' flex w-3/4 items-center justify-between space-x-4 sm:flex-col md:flex-row'>
        <input
          type='text'
          className='rounded-xl p-3 text-xl font-light capitalize shadow-xl focus:outline-none'
          placeholder='Country / City search...'
          maxLength={32}
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
        />
        <BsSearch
          size={25}
          className='cursor-pointer text-white transition ease-out hover:scale-125'
          onClick={handeSearchClick}
        />
        <GoLocation
          size={25}
          className='cursor-pointer text-white transition ease-out hover:scale-125'
          onClick={handleLocationClick}
        />
      </div>

      <div className='flex w-1/4 flex-row items-center justify-end gap-3'>
        <button
          name='metric'
          className='text-xl font-light text-white transition ease-out hover:scale-125'
          onClick={handleClickUnitsChange}
        >
          °C
        </button>
        <p className='cursor-default text-xl text-white'> | </p>
        <button
          name='imperial'
          className='text-xl font-light text-white transition ease-out hover:scale-125'
          onClick={handleClickUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
