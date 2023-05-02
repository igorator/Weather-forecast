import React, { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import CityButtons from "./components/CityButtons";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "Odessa" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const formatBackground = () => {
    if (!weather) return "from-gray-600 to-gray-800";
    const treshold = units === "metric" ? 20 : 60;
    if (weather.temp <= treshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-400 to-orange-900";
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";

      toast.info(`Fetching weather for ${message}`);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Succesfully fetched weather for ${data.name}, ${data.country}`
        );

        setWeather(data);
      });
    };

    fetchWeather().catch(() =>
      toast.error(
        `No location found named ${query.q ? query.q : "current location"}.`
      )
    );
  }, [query, units]);

  return (
    <div
      className={`${formatBackground()} shadow-gray-800' mx-auto mt-4 h-fit max-w-screen-md rounded-md bg-gradient-to-br px-32 py-4 pb-10 shadow-xl `}
    >
      <CityButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title={"Hourly forecast"} forecasts={weather.hourly} />
          <Forecast title={"Daily forecast"} forecasts={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
};

export default App;
