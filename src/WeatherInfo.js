import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city">{props.info.city}</div>
      <div className="Date">
        <FormattedDate date={props.info.date} />
      </div>
      <div className="Temperature">
        {Math.round(props.info.temperature)}
        <span className="CTemp">°C</span>
        <span className="FTemp">|°F</span>
      </div>
      <div className="WeatherDesc">
        <span className="text-capitalize">{props.info.description}</span>
      </div>
      <div className="CurrentWeather">
        <span className="Humidity">💧{props.info.humidity}%</span>
        <span className="Wind">💨{Math.round(props.info.wind)}km/hr</span>
      </div>
    </div>
  );
}
