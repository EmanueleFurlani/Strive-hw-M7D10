import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import WeeklyWeather from "./WeeklyWeather";

const apiKey = process.env.REACT_APP_APIKEY

const Details = () => {
  const [city, setCity] = useState(null);

  const lon = useSelector((state) => state.city.lon);
  const lat = useSelector((state) => state.city.lat);
  const name = useSelector((state) => state.city.name);

  const fetchForecast = async () => {
    try {
      let response = await fetch(`
      https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&units=metric&appid=${apiKey}
            `);
      if (response.ok) {
        console.log("Response is ok");
        let weather = await response.json();
        setCity(weather);
        console.log(weather);
      } else {
        console.log("Error Error Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="details-cont">
      <h1>{name}</h1>
      <WeeklyWeather city={city} />
    </div>
  );
};

export default Details;