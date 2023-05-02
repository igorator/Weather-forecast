import React from "react";

const cities = [
  {
    id: 1,
    title: "Odessa",
  },
  { id: 2, title: "Mykolaiv" },
  { id: 3, title: "Kyiv" },
  { id: 4, title: "Kherson" },
  { id: 5, title: "Kharkiv" },
];

const CityButtons = ({ setQuery }) => {
  return (
    <div className='my-6 flex w-full items-center justify-center gap-5 text-lg font-medium text-white'>
      {cities.map((city) => (
        <button
          className='cursor-pointer outline-none transition ease-out hover:scale-125'
          key={city.id}
          onClick={() => {
            setQuery({ q: city.title });
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default CityButtons;
