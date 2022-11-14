import "./styles.css";
import Form from "./Form";
import WeatherDescription from "./WeatherDescription";
import CurrentTemp from "./CurrentTemp";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <Form />
      <WeatherDescription />
      <CurrentTemp />
      <CurrentWeather />
    </div>
  );
}
