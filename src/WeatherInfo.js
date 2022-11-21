import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city">{props.info.city}</div>
      <div className="Date">
        <FormattedDate date={props.info.date} />
      </div>
      <WeatherTemperature celsius={props.info.temperature} />
      <div className="WeatherDesc">
        <span className="text-capitalize">{props.info.description}</span>
        <img src={props.info.iconUrl} alt={props.info.description} />
      </div>
      <div className="CurrentWeather">
        <span className="Humidity">💧{props.info.humidity}%</span>
        <span className="Wind">💨{Math.round(props.info.wind)}km/hr</span>
      </div>
    </div>
  );
}
