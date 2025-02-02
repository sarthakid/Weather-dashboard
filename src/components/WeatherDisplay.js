import React from "react";

const WeatherDisplay = ({ data }) => {
  if (!data) return null;

  const { main, weather, wind } = data;
  const { temp, humidity } = main;
  const { speed } = wind;
  const { description, icon } = weather[0];

  return (
    <div className="weather-info">
      <h2>{data.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
