import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type your city"
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-light" />
          </div>
        </div>
      </form>
      <div className="Date">November 15</div>
      <div className="CurrentTemp">
        25<span className="CTemp">°C</span>
        <span className="FTemp">|°F</span>
      </div>
      <div className="WeatherDesc">Overcast ☁</div>
      <div className="CurrentWeather">
        <span className="Humidity">💧45%</span>
        <span className="Wind">💨6km/hr</span>
      </div>
    </div>
  );
}
