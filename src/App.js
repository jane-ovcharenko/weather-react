import "./styles.css";
import Form from "./Form";
import WeatherDescription from "./WeatherDescription";
import CurrentTemp from "./CurrentTemp";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div className="App-weather">
        <Form />
        <WeatherDescription />
        <CurrentTemp />
        <CurrentWeather />
      </div>
      <p>
        <a
          href="https://github.com/jane-ovcharenko/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>{" "}
        code by{" "}
        <a
          href="https://dazzling-moonbeam-551a6d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Jane Ovcharenko
        </a>
      </p>
    </div>
  );
}
