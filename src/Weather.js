import React, { useState } from "react";
import "./Weather.scss";

const Weather = () => {
  // 天気データを保持するためのステート変数
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const apiKey = "9554513f316a4c9edecf91e03eaec027";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="card">
      <h2 className="cardTitle">Weather Check</h2>
      <div className="inputWrap">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="inputBtn" onClick={fetchWeather}>Search</button>
      </div>

      {error && (
        <div className="error">
          <p>Invalid city name</p>
        </div>
      )}

      {weatherData && (
        <div className="weather">
          <img
            src={`./img/${weatherData.weather[0].main.toLowerCase()}.png`}
            alt={weatherData.weather[0].main}
          />
          <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
          <h2 className="city">{weatherData.name}</h2>
          <div className="details">
            <div className="col">
              <img src="./img/humidity.png" alt="Humidity" />
              <div>
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="./img/wind.png" alt="Wind Speed" />
              <div>
                <p className="wind">{weatherData.wind.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
