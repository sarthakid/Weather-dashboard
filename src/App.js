import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import WeatherContext from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ErrorComponent from "./components/ErrorComponent";

// OpenWeatherMap API key (Use from .env file)
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

function App() {
  const { weather, error, setWeather, setError } = useContext(WeatherContext);
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "London");

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}&q=${city}`);
      setWeather(response.data);
      localStorage.setItem("lastCity", city);
      setError(null);
    } catch (err) {
      setError("Error fetching weather data. Please check the city name.");
    }
  };

  useEffect(() => {
    fetchWeather(city);
    const interval = setInterval(() => fetchWeather(city), 30000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="App">
      <SearchBar setCity={setCity} />
      {error ? <ErrorComponent message={error} /> : <WeatherDisplay data={weather} />}
    </div>
  );
}

export default App;
