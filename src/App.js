import "./styles.css";
import Form from "./Form";
import WeatherDescription from "./WeatherDescription";
import CurrentTemp from "./CurrentTemp";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div>
      <div className="App">
        <Form />
        <WeatherDescription />
        <CurrentTemp />
        <CurrentWeather />
      </div>
      <p>
        <a
          href="https://github.com/jane-ovcharenko/weather-react"
          target="_blank"
        >
          Open-source
        </a>{" "}
        code by{" "}
        <a href="https://dazzling-moonbeam-551a6d.netlify.app/" target="_blank">
          Jane Ovcharenko
        </a>
      </p>
    </div>
  );
}
