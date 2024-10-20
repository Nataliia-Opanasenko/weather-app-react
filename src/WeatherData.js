import React from "react";

function getWeatherData() {
  return (
    <main>
      <div className="weather-app-data">
        <div>
          <h2 className="weather-app-city" id="city">city</h2>
          <p className="weather-app-details">
            <span id="time"></span>, <span id="description"></span>
            <br />
            Humidity: <strong id="humidity"></strong>, Wind:
            <strong id="wind-speed"></strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div id="icon"></div>
          <div className="weather-app-temperature" id="temperature"></div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </main>
  );
}
export default getWeatherData;