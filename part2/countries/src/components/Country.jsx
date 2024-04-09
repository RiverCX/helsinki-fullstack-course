import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const apiKey = import.meta.env.VITE_WEATHER;

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [lat, lon] = country.capitalInfo.latlng;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      .then((res) => setWeather(res.data));
  }, [lat, lon]);

  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages</h3>
      {Object.values(country.languages).map((lan) => (
        <li key={lan}> {lan} </li>
      ))}
      <img src={country.flags.png} alt={country.flags.alt} />
      <h3>Weather of {country.capital[0]}</h3>
      {weather && (
        <>
          <p>temperature {weather.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={`${weather.weather[0].description}`}
          />
          <p>wind {weather.wind.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default Country;
