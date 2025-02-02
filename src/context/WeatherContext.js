import React, { createContext, useState } from "react";

const WeatherContext = createContext(); 

export const WeatherProvider = ({ children }) => { 
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext; 
